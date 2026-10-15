import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowLeft, BookOpen, Check, ChevronDown, ChevronLeft, ChevronRight,
  CircleHelp, Headphones, Mic, Minus, Pause, Play, Plus, RotateCcw, Square, Volume2, X,
} from 'lucide-react';
import type { DictionaryEntry, ReaderProps, Token } from '../types';
import { LEVEL_NAMES } from '../types';
import { convert, formatDefinition, tokenize } from '../lib/language';
import {
  pauseChineseSpeech, recognitionAvailability, resumeChineseSpeech,
  speakChinese, startReadingPractice,
} from '../lib/speech';
import GrammarSourceLabel from './GrammarSourceLabel';
import './reader.css';

type WordLocation = { token: Token; sentence: number; index: number };
type TooltipPosition = { left: number; top: number; below: boolean };
type AudioState = 'idle' | 'loading' | 'playing' | 'paused';
type PracticeState = 'idle' | 'loading' | 'listening' | 'complete';

const hasChinese = (text: string) => /\p{Script=Han}/u.test(text);

export default function Reader({
  story, dictionary, settings, onSettingsChange, onSaveWord, savedWords,
  onProgress, initialSentence = 0, onBack,
}: ReaderProps) {
  const [selectedSentence, setSelectedSentence] = useState(Math.max(0, Math.min(initialSentence, story.sentences.length - 1)));
  const [inspectedWord, setInspectedWord] = useState<WordLocation | null>(null);
  const [hoveredWord, setHoveredWord] = useState<WordLocation | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition | null>(null);
  const [audioState, setAudioState] = useState<AudioState>('idle');
  const [audioScope, setAudioScope] = useState<'story' | 'sentence'>('story');
  const [spokenWord, setSpokenWord] = useState<string | null>(null);
  const [practiceState, setPracticeState] = useState<PracticeState>('idle');
  const [practiceWord, setPracticeWord] = useState<string | null>(null);
  const [practiceStatus, setPracticeStatus] = useState('');
  const [transcript, setTranscript] = useState('');
  const [speechError, setSpeechError] = useState('');
  const [completed, setCompleted] = useState(false);
  const audioCleanup = useRef<(() => void) | null>(null);
  const practiceCleanup = useRef<(() => void) | null>(null);
  const audioController = useRef<AbortController | null>(null);
  const practiceController = useRef<AbortController | null>(null);
  const operation = useRef(0);
  const tooltipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipElement = useRef<HTMLDivElement | null>(null);
  const sentenceElements = useRef<Map<number, HTMLElement>>(new Map());
  const selectedRef = useRef(selectedSentence);
  const tokens = useMemo(() => story.sentences.map(sentence => tokenize(sentence.zh, dictionary)), [story, dictionary]);
  const availability = recognitionAvailability();
  const saved = useMemo(() => new Set(savedWords.filter(word => !word.studyKey).map(word => word.simplified)), [savedWords]);
  const wordCount = useMemo(() => tokens.flat().filter(token => hasChinese(token.text)).length, [tokens]);
  const displayToken = (token: Token) => settings.traditional ? token.traditional : token.simplified;

  function cancelAudio() {
    audioController.current?.abort();
    audioController.current = null;
    audioCleanup.current?.();
    audioCleanup.current = null;
    setAudioState('idle');
    setSpokenWord(null);
  }

  function cancelPractice() {
    practiceController.current?.abort();
    practiceController.current = null;
    practiceCleanup.current?.();
    practiceCleanup.current = null;
    setPracticeState('idle');
    setPracticeWord(null);
  }

  function stopEverything() {
    operation.current += 1;
    cancelAudio();
    cancelPractice();
  }

  useEffect(() => {
    const start = Math.max(0, Math.min(initialSentence, story.sentences.length - 1));
    setSelectedSentence(start);
    selectedRef.current = start;
    setInspectedWord(null);
    setHoveredWord(null);
    setCompleted(false);
    setSpeechError('');
    setAudioState('idle');
    setSpokenWord(null);
    setPracticeState('idle');
    setPracticeWord(null);
    setTranscript('');
    return () => {
      operation.current += 1;
      audioController.current?.abort();
      practiceController.current?.abort();
      audioCleanup.current?.();
      practiceCleanup.current?.();
      if (tooltipTimer.current) clearTimeout(tooltipTimer.current);
    };
    // A new story gets a new reader session; updates to progress must not reset it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [story.id]);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setHoveredWord(null);
    }
    function closeOnScroll(event: Event) {
      // Long explanations scroll within the popup; only movement of the
      // surrounding reader invalidates the word's screen position.
      if (event.target instanceof Node && tooltipElement.current?.contains(event.target)) return;
      setHoveredWord(null);
    }
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('scroll', closeOnScroll, true);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('scroll', closeOnScroll, true);
    };
  }, []);

  useLayoutEffect(() => {
    const rectangle = tooltipElement.current?.getBoundingClientRect();
    if (!rectangle) return;
    const adjustment = rectangle.top < 10 ? 10 - rectangle.top
      : rectangle.bottom > window.innerHeight - 10 ? window.innerHeight - 10 - rectangle.bottom : 0;
    if (adjustment) setTooltipPosition(position => position ? { ...position, top: position.top + adjustment } : null);
  }, [hoveredWord]);

  function selectSentence(index: number, scroll = false, fromNarration = false) {
    const next = Math.max(0, Math.min(index, story.sentences.length - 1));
    if (!fromNarration && next !== selectedRef.current &&
      (practiceState === 'loading' || practiceState === 'listening' || audioState !== 'idle')) stopEverything();
    setSelectedSentence(next);
    selectedRef.current = next;
    onProgress(story.id, next);
    if (scroll) sentenceElements.current.get(next)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function revealWord(location: WordLocation, element: HTMLElement) {
    if (tooltipTimer.current) clearTimeout(tooltipTimer.current);
    setInspectedWord(location);
    const rect = element.getBoundingClientRect();
    const below = rect.top < 240;
    setTooltipPosition({
      left: Math.max(12, Math.min(rect.left + rect.width / 2 - 144, window.innerWidth - 300)),
      top: below ? rect.bottom + 12 : rect.top - 12,
      below,
    });
    setHoveredWord(location);
  }

  function dismissTooltip() {
    if (tooltipTimer.current) clearTimeout(tooltipTimer.current);
    tooltipTimer.current = setTimeout(() => {
      const tooltip = tooltipElement.current;
      // Saving disables the focused button, which can emit blur. Keep the
      // explanation open while the learner still points at or uses the popup.
      if (tooltip?.matches(':hover') || tooltip?.contains(document.activeElement)) return;
      setHoveredWord(null);
    }, 120);
  }

  async function listen(textOverride?: string) {
    stopEverything();
    setSpeechError('');
    const currentOperation = operation.current;
    const controller = new AbortController();
    audioController.current = controller;
    setAudioState('loading');
    const selected = selectedRef.current;
    const sentenceIndices = audioScope === 'sentence' ? [selected] : story.sentences.map((_, index) => index);
    const text = textOverride ?? sentenceIndices.map(index => convert(story.sentences[index].zh, settings.traditional)).join('\n');
    const offsets: { start: number; end: number; key: string; sentence: number }[] = [];
    let cursor = 0;
    if (!textOverride) sentenceIndices.forEach((sentence, position) => {
      tokens[sentence].forEach((token, index) => {
        const display = displayToken(token);
        offsets.push({ start: cursor, end: cursor + display.length, key: `${sentence}-${index}`, sentence });
        cursor += display.length;
      });
      if (position < sentenceIndices.length - 1) cursor += 1;
    });
    try {
      const cleanup = await speakChinese(text, settings.speechRate, {
        signal: controller.signal,
        onBoundary: (charIndex: number, unit?: 'word' | 'sentence') => {
          if (operation.current !== currentOperation) return;
          if (unit === 'sentence') setSpokenWord(null);
          const match = offsets.find(item => charIndex >= item.start && charIndex < item.end) ??
            (unit === 'sentence' ? offsets.find(item => item.start >= charIndex) : undefined);
          if (match) {
            if (unit !== 'sentence') setSpokenWord(match.key);
            if (selectedRef.current !== match.sentence) selectSentence(match.sentence, true, true);
          }
        },
        onEnd: () => {
          if (operation.current !== currentOperation) return;
          setAudioState('idle');
          setSpokenWord(null);
          audioCleanup.current = null;
        },
        onError: message => {
          if (operation.current !== currentOperation) return;
          setSpeechError(message);
          setAudioState('idle');
          setSpokenWord(null);
        },
      });
      if (operation.current !== currentOperation) { cleanup(); return; }
      audioCleanup.current = cleanup;
      setAudioState(state => state === 'loading' ? 'playing' : state);
    } catch (error) {
      if (operation.current !== currentOperation) return;
      setAudioState('idle');
      setSpeechError(error instanceof Error ? error.message : 'Chinese audio could not start.');
    }
  }

  function toggleAudio() {
    if (audioState === 'playing') {
      pauseChineseSpeech();
      setAudioState('paused');
    } else if (audioState === 'paused') {
      resumeChineseSpeech();
      setAudioState('playing');
    } else if (audioState === 'idle') {
      void listen();
    }
  }

  async function practice() {
    stopEverything();
    setSpeechError('');
    setTranscript('');
    const currentOperation = operation.current;
    const controller = new AbortController();
    practiceController.current = controller;
    const sentenceIndices = audioScope === 'sentence' ? [selectedRef.current] : story.sentences.map((_, index) => index);
    const targets = sentenceIndices.flatMap(sentence => tokens[sentence]
      .map((token, index) => ({ token: { ...token, text: displayToken(token) }, key: `${sentence}-${index}`, sentence })))
      .filter(item => hasChinese(item.token.text));
    if (!targets.length) return;
    setPracticeState('loading');
    setPracticeStatus('Preparing microphone…');
    setPracticeWord(targets[0].key);
    try {
      const session = await startReadingPractice(targets.map(item => item.token), {
        signal: controller.signal,
        onWord: index => {
          if (operation.current !== currentOperation) return;
          const target = targets[index];
          setPracticeWord(target?.key ?? null);
          if (target && selectedRef.current !== target.sentence) selectSentence(target.sentence, true, true);
          setPracticeState('listening');
        },
        onTranscript: text => {
          if (operation.current === currentOperation) setTranscript(text);
        },
        onStatus: message => {
          if (operation.current === currentOperation) setPracticeStatus(message);
        },
        onComplete: () => {
          if (operation.current !== currentOperation) return;
          if (audioScope === 'story') selectSentence(story.sentences.length - 1, true, true);
          setPracticeState('complete');
          setPracticeWord(null);
          setPracticeStatus(audioScope === 'story' ? 'Story practice complete. Every word was recognized.' : 'Sentence complete. Every word was recognized.');
          practiceCleanup.current = null;
        },
        onError: message => {
          if (operation.current !== currentOperation) return;
          setSpeechError(message);
          setPracticeState('idle');
          setPracticeWord(null);
          practiceCleanup.current?.();
          practiceCleanup.current = null;
        },
      });
      if (operation.current !== currentOperation) { session.stop(); return; }
      practiceCleanup.current = () => session.stop();
      setPracticeState(state => state === 'loading' ? 'listening' : state);
    } catch (error) {
      if (operation.current !== currentOperation) return;
      setPracticeState('idle');
      setPracticeWord(null);
      setSpeechError(error instanceof Error ? error.message : 'Pronunciation practice could not start.');
    }
  }

  function moveSentence(direction: number) {
    stopEverything();
    setTranscript('');
    selectSentence(selectedSentence + direction, true);
  }

  const currentWord = inspectedWord ?? (() => {
    for (let sentence = 0; sentence < tokens.length; sentence++) {
      const index = tokens[sentence].findIndex(token => token.entry);
      if (index >= 0) return { token: tokens[sentence][index], sentence, index };
    }
    return null;
  })();
  const entry = currentWord?.token.entry;
  const grammar = currentWord?.token.grammar ?? entry?.grammar;
  const courseGrammar = (currentWord?.token.grammars ?? []).filter(note => note.id !== grammar?.id && note.sources?.length);
  const levelName = LEVEL_NAMES[story.level - 1];
  const isPracticing = practiceState === 'loading' || practiceState === 'listening';
  const progress = story.sentences.length ? (completed ? 100 : Math.round((selectedSentence + 1) / story.sentences.length * 100)) : 0;

  function save(entryToSave: DictionaryEntry) {
    onSaveWord(entryToSave);
  }

  function renderToken(token: Token, index: number, sentence: number) {
    const display = displayToken(token);
    if (!hasChinese(display)) return <span key={index} className="reader-punctuation">{display}</span>;
    const key = `${sentence}-${index}`;
    const location = { token, index, sentence };
    const pronunciation = token.pinyin;
    return (
      <button
        key={index}
        type="button"
        className={`reader-word level-${token.level} ${spokenWord === key ? 'is-spoken' : ''} ${practiceWord === key ? 'is-practice-target' : ''} ${inspectedWord?.sentence === sentence && inspectedWord.index === index ? 'is-inspected' : ''}`}
        aria-label={`${display}${token.entry ? `: ${token.entry.definitions.map(definition => formatDefinition(definition, settings.traditional)).join('; ')}` : ''}. Show word details`}
        onMouseEnter={event => revealWord(location, event.currentTarget)}
        onMouseLeave={dismissTooltip}
        onFocus={event => revealWord(location, event.currentTarget)}
        onBlur={dismissTooltip}
        onClick={event => revealWord(location, event.currentTarget)}
      >
        {Array.from(display).map((character, characterIndex) => settings.pinyin ? (
          <ruby key={characterIndex}>{character}<rt>{pronunciation[characterIndex] ?? ''}</rt></ruby>
        ) : <span key={characterIndex}>{character}</span>)}
      </button>
    );
  }

  return (
    <div className="reader-page">
      <div className="reader-navigation">
        <button className="reader-back" onClick={() => { stopEverything(); onBack(); }}><ArrowLeft size={17} /> Back to library</button>
        <span className="reader-nav-note"><BookOpen size={15} /> A little reading, every day</span>
      </div>

      <header className="reader-heading">
        <div className="reader-story-meta">
          <span className={`reader-level-pill level-${story.level}`}>{levelName}</span>
          <span>{story.category}</span><span className="reader-meta-dot">·</span><span>{story.minutes} min read</span>
          {story.series && <><span className="reader-meta-dot">·</span><span>{story.series}</span></>}
        </div>
        <h1 lang={settings.traditional ? 'zh-Hant' : 'zh-Hans'}>{convert(story.title, settings.traditional)}</h1>
        <p className="reader-english-title">{story.titleEn}</p>
        <p className="reader-story-summary">{story.summary}</p>
      </header>

      <div className="reader-customization" aria-label="Reading preferences">
        <div className="reader-script-switch" role="group" aria-label="Chinese character script">
          <button className={!settings.traditional ? 'active' : ''} aria-pressed={!settings.traditional} onClick={() => { stopEverything(); onSettingsChange({ traditional: false }); }}>简体 <span>Simplified</span></button>
          <button className={settings.traditional ? 'active' : ''} aria-pressed={settings.traditional} onClick={() => { stopEverything(); onSettingsChange({ traditional: true }); }}>繁體 <span>Traditional</span></button>
        </div>
        <label className="reader-pinyin-switch"><input type="checkbox" checked={settings.pinyin} onChange={event => onSettingsChange({ pinyin: event.target.checked })} /><span className="reader-toggle-track" aria-hidden="true" /><span>Pinyin</span></label>
        <div className="reader-font-controls" role="group" aria-label="Reader text size">
          <button onClick={() => onSettingsChange({ fontSize: Math.max(20, settings.fontSize - 2) })} disabled={settings.fontSize <= 20} aria-label="Decrease text size"><Minus size={14} /></button>
          <span aria-hidden="true">Aa</span>
          <button onClick={() => onSettingsChange({ fontSize: Math.min(40, settings.fontSize + 2) })} disabled={settings.fontSize >= 40} aria-label="Increase text size"><Plus size={14} /></button>
        </div>
        <span className="reader-word-count">{wordCount} words</span>
      </div>

      <div className="reader-layout">
        <div className="reader-content-column">
          <div className="reader-audio-bar">
            <div className="reader-audio-actions">
              <button className="reader-listen-button" onClick={toggleAudio} disabled={audioState === 'loading'} aria-label={audioState === 'playing' ? 'Pause Chinese narration' : audioState === 'paused' ? 'Resume Chinese narration' : 'Play Chinese narration'}>
                {audioState === 'playing' ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}
                {audioState === 'loading' ? 'Loading…' : audioState === 'playing' ? 'Pause' : audioState === 'paused' ? 'Resume' : 'Listen'}
              </button>
              {audioState !== 'idle' && <button className="reader-icon-button" onClick={() => { operation.current += 1; cancelAudio(); }} aria-label="Stop narration"><Square size={15} /></button>}
              <label className="reader-select-label"><span className="reader-sr-only">Listening and practice scope</span><select value={audioScope} onChange={event => { stopEverything(); setAudioScope(event.target.value as 'story' | 'sentence'); }}><option value="story">Whole story</option><option value="sentence">Selected sentence</option></select><ChevronDown size={12} aria-hidden="true" /></label>
              <label className="reader-select-label reader-rate"><span className="reader-sr-only">Narration speed</span><select value={settings.speechRate} onChange={event => { if (audioState !== 'idle') { operation.current += 1; cancelAudio(); } onSettingsChange({ speechRate: Number(event.target.value) }); }}>{![0.65, 0.8, 1, 1.15, 1.3].includes(settings.speechRate) && <option value={settings.speechRate}>{settings.speechRate}×</option>}<option value={0.65}>0.65×</option><option value={0.8}>0.8×</option><option value={1}>1×</option><option value={1.15}>1.15×</option><option value={1.3}>1.3×</option></select><ChevronDown size={12} aria-hidden="true" /></label>
            </div>
            <button className={`reader-practice-button ${isPracticing ? 'active' : ''}`} onClick={() => isPracticing ? stopEverything() : void practice()} disabled={!availability.available} title={!availability.available ? availability.message : `Read the ${audioScope === 'story' ? 'whole story' : 'selected sentence'} aloud; each word advances only after recognition.`}>
              {isPracticing ? <Square size={15} /> : <Mic size={16} />}{isPracticing ? 'Stop practice' : 'Read aloud'}
            </button>
          </div>

          {speechError && <div className="reader-message reader-error" role="alert"><CircleHelp size={17} /><span>{speechError}</span><button onClick={() => setSpeechError('')} aria-label="Dismiss audio error"><X size={16} /></button></div>}
          {practiceState !== 'idle' && <div className={`reader-practice-status ${practiceState === 'complete' ? 'complete' : ''}`} role="status">
            {practiceState === 'complete' ? <Check size={17} /> : <Mic size={17} />}
            <div><strong>{practiceStatus || 'Say the highlighted word aloud.'}</strong>{transcript && <p>Heard: “{transcript}”</p>}{isPracticing && <p>The highlight waits until this word is recognized.</p>}</div>
            {practiceState === 'complete' && <button onClick={() => void practice()} aria-label={`Practice the ${audioScope === 'story' ? 'story' : 'sentence'} again`}><RotateCcw size={16} /></button>}
          </div>}
          {(!availability.available || !availability.offline) && <p className="reader-recognition-note"><Mic size={14} />{availability.message}</p>}

          <article className={`reader-prose ${settings.pinyin ? 'with-pinyin' : ''}`} style={{ '--reader-font-size': `${settings.fontSize}px` } as CSSProperties} lang={settings.traditional ? 'zh-Hant' : 'zh-Hans'} aria-label="Chinese story">
            <div className="reader-page-marker"><span />正文<span /></div>
            {story.sentences.map((sentence, index) => <section
              key={`${story.id}-${index}`}
              className={`reader-sentence ${selectedSentence === index ? 'is-selected' : ''}`}
              ref={element => { if (element) sentenceElements.current.set(index, element); else sentenceElements.current.delete(index); }}
              aria-label={`Sentence ${index + 1}`}
            >
              <div className="reader-sentence-line">
                <button className="reader-sentence-number" aria-label={`Select sentence ${index + 1} and show English translation`} aria-pressed={selectedSentence === index} onClick={() => selectSentence(index)}>{String(index + 1).padStart(2, '0')}</button>
                <p onClick={() => selectSentence(index)}>{tokens[index].map((token, tokenIndex) => renderToken(token, tokenIndex, index))}</p>
              </div>
              {selectedSentence === index && <div className="reader-translation" lang="en"><span>ENGLISH</span><p>{sentence.en}</p></div>}
            </section>)}
            <div className="reader-end-mark" aria-hidden="true">✦</div>
          </article>

          <div className="reader-bottom-controls">
            <div className="reader-sentence-nav"><button onClick={() => moveSentence(-1)} disabled={selectedSentence <= 0} aria-label="Previous sentence"><ChevronLeft size={18} /></button><span>Sentence <strong>{selectedSentence + 1}</strong> of {story.sentences.length}</span><button onClick={() => moveSentence(1)} disabled={selectedSentence >= story.sentences.length - 1} aria-label="Next sentence"><ChevronRight size={18} /></button></div>
            <button className={`reader-complete-button ${completed ? 'completed' : ''}`} onClick={() => { stopEverything(); setCompleted(true); onProgress(story.id, story.sentences.length - 1, true); }} disabled={completed}>{completed ? <Check size={16} /> : <BookOpen size={16} />}{completed ? 'Story completed' : 'Mark as read'}</button>
          </div>
          <div className="reader-progress" aria-label={`Reading position: ${progress}%`} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><span style={{ width: `${progress}%` }} /></div>
        </div>

        <aside className="reader-sidebar" aria-label="Word and grammar details">
          <section className="reader-inspector">
            <div className="reader-sidebar-label"><span>WORD EXPLORER</span><BookOpen size={16} /></div>
            {currentWord ? <>
              <div className="reader-word-title"><h2 lang={settings.traditional ? 'zh-Hant' : 'zh-Hans'}>{displayToken(currentWord.token)}</h2><button className="reader-word-audio" onClick={() => void listen(displayToken(currentWord.token))} aria-label={`Hear ${currentWord.token.text} pronounced`}><Volume2 size={20} /></button></div>
              <p className="reader-word-pinyin">{entry?.pinyin ?? currentWord.token.pinyin.join(' ')}</p>
              <span className={`reader-difficulty-label level-${currentWord.token.level}`}><span />{LEVEL_NAMES[currentWord.token.level - 1]}</span>
              <div className="reader-definitions"><h3>Meaning</h3>{entry ? <ol>{entry.definitions.map((definition, index) => <li key={index}>{formatDefinition(definition, settings.traditional)}</li>)}</ol> : <p>This word is not in the bundled dictionary yet. You can look up another word in the dictionary.</p>}</div>
              {grammar && <div className="reader-grammar-note"><div className="reader-grammar-eyebrow">GRAMMAR NOTE</div><h3>{grammar.title}</h3><code>{grammar.pattern}</code><p>{grammar.explanation}</p><GrammarSourceLabel note={grammar} />{grammar.examples.slice(0, 2).map((example, index) => <div className="reader-grammar-example" key={index}><p lang={settings.traditional ? 'zh-Hant' : 'zh-Hans'}>{convert(example.zh, settings.traditional)}</p><p>{example.en}</p></div>)}</div>}
              {courseGrammar.length > 0 && <section className="reader-course-grammar" aria-label="Related textbook grammar"><h3>Related textbook grammar</h3><p>Choose a construction that fits this sentence. A word can have several grammatical uses.</p>{courseGrammar.map(note => <details key={note.id} data-grammar-id={note.id}><summary>{convert(note.pattern, settings.traditional)} · {note.title}</summary><p>{note.explanation}</p><GrammarSourceLabel note={note} />{note.examples.map(example => <div className="reader-grammar-example" key={example.zh}><p lang={settings.traditional ? 'zh-Hant' : 'zh-Hans'}>{convert(example.zh, settings.traditional)}</p><p>{example.en}</p></div>)}<button className="reader-save-word" disabled={savedWords.some(word => word.studyKey === `grammar:${note.id}`)} onClick={() => save({ simplified: note.pattern, traditional: convert(note.pattern, true), pinyin: '', definitions: [note.explanation], level: note.level, grammar: note, studyKey: `grammar:${note.id}` })}>{savedWords.some(word => word.studyKey === `grammar:${note.id}`) ? 'Pattern saved' : 'Save grammar pattern'}</button></details>)}</section>}
              {entry && <button className={`reader-save-word ${saved.has(entry.simplified) ? 'saved' : ''}`} disabled={saved.has(entry.simplified)} onClick={() => save(entry)}>{saved.has(entry.simplified) ? <Check size={16} /> : <Plus size={16} />}{saved.has(entry.simplified) ? 'Saved to your vocabulary' : 'Save to vocabulary'}</button>}
              <p className="reader-inspector-hint">Hover over or focus a word to explore its meaning.</p>
            </> : <p className="reader-inspector-hint">Hover over a Chinese word to see definitions, pronunciation, and grammar.</p>}
          </section>
          <section className="reader-level-guide"><h3>A little color, a little context</h3><p>Underlines show each word’s learning level.</p><div>{LEVEL_NAMES.map((name, index) => <span className={`level-${index + 1}`} key={name}><i />{name}</span>)}</div></section>
          <section className="reader-tip"><Headphones size={22} /><div><h3>Make it your own</h3><p>Listen once, then read aloud. Click a sentence for its English translation.</p></div></section>
        </aside>
      </div>

      {hoveredWord && tooltipPosition && createPortal(<div
        ref={tooltipElement}
        className="reader-word-tooltip"
        style={{ left: tooltipPosition.left, top: tooltipPosition.top, transform: tooltipPosition.below ? undefined : 'translateY(-100%)' }}
        onMouseEnter={() => { if (tooltipTimer.current) clearTimeout(tooltipTimer.current); }}
        onMouseLeave={dismissTooltip}
        onFocus={() => { if (tooltipTimer.current) clearTimeout(tooltipTimer.current); }}
        onBlur={dismissTooltip}
        role="dialog"
        aria-label={`Meaning of ${hoveredWord.token.text}`}
      >
        <div className="reader-tooltip-heading"><strong>{displayToken(hoveredWord.token)}</strong><span>{hoveredWord.token.entry?.pinyin ?? hoveredWord.token.pinyin.join(' ')}</span><button onClick={() => setHoveredWord(null)} aria-label="Close word details"><X size={13} /></button></div>
        <p>{hoveredWord.token.entry?.definitions.slice(0, 3).map(definition => formatDefinition(definition, settings.traditional)).join('; ') ?? 'Definition not available in this dictionary.'}</p>
        {(hoveredWord.token.grammar ?? hoveredWord.token.entry?.grammar) && <div className="reader-tooltip-grammar"><span>Grammar</span><p>{(hoveredWord.token.grammar ?? hoveredWord.token.entry?.grammar)?.explanation}</p></div>}
        {(hoveredWord.token.grammars?.filter(note => note.sources?.length).length ?? 0) > 0 && <p className="reader-tooltip-course-hint">Textbook explanations are available in Word Explorer.</p>}
        {hoveredWord.token.entry && <button className="reader-tooltip-save" disabled={saved.has(hoveredWord.token.entry.simplified)} onClick={() => save(hoveredWord.token.entry!)}>{saved.has(hoveredWord.token.entry.simplified) ? <Check size={13} /> : <Plus size={13} />}{saved.has(hoveredWord.token.entry.simplified) ? 'Saved' : 'Save word'}</button>}
      </div>, document.body)}
    </div>
  );
}
