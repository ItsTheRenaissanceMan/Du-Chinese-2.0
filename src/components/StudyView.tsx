import { useEffect, useMemo, useState, type KeyboardEvent } from 'react';
import { ArrowLeft, ArrowRight, Bookmark, Check, CheckCircle2, ChevronDown, Clock3, GraduationCap, Layers3, RotateCcw, Search, Trash2, Volume2, Zap } from 'lucide-react';
import { grammarNotes } from '../data/grammar';
import { grammarBooks } from '../data/grammarCourses';
import { convert } from '../lib/language';
import { speakChinese, stopSpeaking } from '../lib/speech';
import { studyKey } from '../lib/studyIdentity';
import { LEVEL_NAMES, type Dictionary, type DictionaryEntry, type GrammarNote, type SavedWord, type Settings } from '../types';
import './study.css';
import GrammarSourceLabel from './GrammarSourceLabel';

export interface StudyViewProps {
  dictionary: Dictionary;
  settings: Settings;
  savedWords: SavedWord[];
  onSaveWord: (entry: DictionaryEntry) => void;
  onReview: (word: string, rating: 'again' | 'good' | 'easy') => void;
  onRemoveWord: (word: string) => void;
}

function dueLabel(word: SavedWord, now: number) {
  if (word.due <= now) return 'Ready to review';
  if (word.due - now < 60 * 60 * 1000) return `In ${Math.max(1, Math.ceil((word.due - now) / 60000))} min`;
  return `Due ${new Date(word.due).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`;
}

export default function StudyView({ dictionary, settings, savedWords, onSaveWord, onReview, onRemoveWord }: StudyViewProps) {
  const [tab, setTab] = useState<'vocabulary' | 'grammar'>('vocabulary');
  const [query, setQuery] = useState('');
  const [grammarQuery, setGrammarQuery] = useState('');
  const [grammarLevel, setGrammarLevel] = useState('all');
  const [grammarBook, setGrammarBook] = useState('all');
  const [grammarLesson, setGrammarLesson] = useState('all');
  const [expandedGrammar, setExpandedGrammar] = useState<string | null>(null);
  const [session, setSession] = useState<string[] | null>(null);
  const [position, setPosition] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [audioError, setAudioError] = useState('');
  const [clock, setClock] = useState(() => Date.now());
  const [removeTarget, setRemoveTarget] = useState<string | null>(null);
  const now = clock;
  const dueWords = savedWords.filter(word => word.due <= now).sort((a, b) => a.due - b.due);
  const saved = useMemo(() => new Set(savedWords.map(studyKey)), [savedWords]);
  const vocabulary = useMemo(() => {
    const term = query.trim().toLowerCase();
    return [...savedWords].filter(word => !term || `${word.simplified} ${word.traditional} ${word.pinyin} ${word.definitions.join(' ')}`.toLowerCase().includes(term)).sort((a, b) => a.due - b.due);
  }, [savedWords, query]);
  const selectedBook = grammarBooks.find(book => book.id === grammarBook);
  const verifiedBooks = grammarBooks.filter(book => book.status === 'verified');
  const unavailableBooks = grammarBooks.filter(book => book.status === 'blocked');
  const processingBooks = grammarBooks.filter(book => book.status === 'processing');
  const courseNotes = grammarNotes.filter(note => note.sources?.length);
  const lessons = useMemo(() => [...new Set(grammarNotes.flatMap(note => (note.sources ?? [])
    .filter(source => grammarBook === 'all' || source.bookId === grammarBook)
    .map(source => source.lesson)))].sort((a, b) => a - b), [grammarBook]);
  const notes = useMemo(() => {
    const term = grammarQuery.trim().toLowerCase();
    return grammarNotes.filter(note => {
      const matchesCourse = grammarBook === 'all' && grammarLesson === 'all' || note.sources?.some(source =>
        (grammarBook === 'all' || source.bookId === grammarBook) && (grammarLesson === 'all' || source.lesson === Number(grammarLesson)));
      const searchText = `${note.pattern} ${note.title} ${note.explanation} ${note.examples.map(example => `${example.zh} ${example.en}`).join(' ')} ${note.sources?.map(source => source.topic).join(' ') ?? ''}`;
      return matchesCourse && (grammarLevel === 'all' || note.level === Number(grammarLevel)) && (!term || searchText.toLowerCase().includes(term));
    });
  }, [grammarQuery, grammarLevel, grammarBook, grammarLesson]);
  const currentWord = session && position < session.length ? savedWords.find(word => studyKey(word) === session[position]) : undefined;
  const completed = !!session && position >= session.length;
  const nextDue = savedWords.length ? Math.min(...savedWords.map(word => word.due)) : null;

  useEffect(() => { const timer = window.setInterval(() => setClock(Date.now()), 30000); return () => window.clearInterval(timer); }, []);
  useEffect(() => () => stopSpeaking(), []);
  useEffect(() => {
    if (session && position < session.length && !currentWord) { setPosition(value => value + 1); setRevealed(false); }
  }, [currentWord, position, session]);

  async function pronounce(text: string) {
    setAudioError('');
    try { await speakChinese(text, settings.speechRate, { onError: setAudioError }); }
    catch (error) { setAudioError(error instanceof Error ? error.message : 'Pronunciation is unavailable on this device.'); }
  }
  function startReview(words: SavedWord[]) { stopSpeaking(); setSession(words.map(studyKey)); setPosition(0); setRevealed(false); setAudioError(''); }
  function rate(rating: 'again' | 'good' | 'easy') {
    if (!currentWord) return;
    stopSpeaking(); onReview(studyKey(currentWord), rating); setPosition(value => value + 1); setRevealed(false); setClock(Date.now());
  }
  function grammarEntry(note: GrammarNote): DictionaryEntry {
    const existing = dictionary.entries.find(entry => entry.grammar?.id === note.id && entry.simplified === note.pattern);
    return { ...(existing ?? { simplified: note.pattern, traditional: convert(note.pattern, true), pinyin: '', level: note.level }), definitions: [note.explanation], grammar: note, studyKey: `grammar:${note.id}` };
  }
  function navigateTabs(event: KeyboardEvent<HTMLDivElement>) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 'vocabulary' : event.key === 'End' ? 'grammar' : tab === 'vocabulary' ? 'grammar' : 'vocabulary';
    setTab(next); document.getElementById(`${next}-tab`)?.focus();
  }

  return <section className="learning-page study-page" aria-labelledby="study-heading">
    <div className="learning-page-heading"><div><p className="learning-eyebrow">SMALL STEPS. LASTING KNOWLEDGE.</p><h1 id="study-heading">Make it stick.</h1><p>Revisit the words you discover. Build confidence, one little review at a time.</p></div><div className="learning-heading-icon" aria-hidden="true"><GraduationCap size={32} strokeWidth={1.5} /></div></div>
    <div className="learning-tabs" role="tablist" aria-label="Study sections" onKeyDown={navigateTabs}><button type="button" role="tab" id="vocabulary-tab" aria-controls="vocabulary-panel" aria-selected={tab === 'vocabulary'} tabIndex={tab === 'vocabulary' ? 0 : -1} className={tab === 'vocabulary' ? 'is-active' : ''} onClick={() => setTab('vocabulary')}><Bookmark size={17} />My vocabulary <span>{savedWords.length}</span></button><button type="button" role="tab" id="grammar-tab" aria-controls="grammar-panel" aria-selected={tab === 'grammar'} tabIndex={tab === 'grammar' ? 0 : -1} className={tab === 'grammar' ? 'is-active' : ''} onClick={() => setTab('grammar')}><GraduationCap size={18} />Grammar guide <span>{grammarNotes.length}</span></button></div>
    {audioError && <p className="learning-notice" role="alert">{audioError}</p>}
    {tab === 'vocabulary' ? <div id="vocabulary-panel" role="tabpanel" aria-labelledby="vocabulary-tab">
      {session ? <div className="review-session">
        <div className="review-top"><button type="button" className="learning-text-button" onClick={() => { stopSpeaking(); setSession(null); }}><ArrowLeft size={16} />Back to vocabulary</button><span>{Math.min(position, session.length)} of {session.length} reviewed</span></div>
        <div className="review-progress" role="progressbar" aria-label="Review progress" aria-valuemin={0} aria-valuemax={session.length} aria-valuenow={Math.min(position, session.length)}><span style={{ width: `${session.length ? Math.min(position / session.length, 1) * 100 : 0}%` }} /></div>
        {completed ? <div className="review-complete"><CheckCircle2 size={48} strokeWidth={1.5} /><p className="learning-eyebrow">A LITTLE MORE FAMILIAR</p><h2>Good work. Let it settle.</h2><p>You reviewed {session.length} {session.length === 1 ? 'word' : 'words'}. Your answers have been saved, and each word is scheduled for its next review.</p><button type="button" className="learning-primary" onClick={() => setSession(null)}>Back to my vocabulary <ArrowRight size={16} /></button></div> : currentWord ? <>
          <div className="review-card"><div className="review-card-top"><span className={`learning-level level-${currentWord.level}`}>{LEVEL_NAMES[currentWord.level - 1]}</span><button type="button" className="learning-icon-button" aria-label={`Hear ${currentWord.simplified}`} onClick={() => pronounce(currentWord.simplified)}><Volume2 size={22} /></button></div><p className="review-prompt">{currentWord.grammar ? 'How does this pattern work?' : 'What does this word mean?'}</p><h2 lang={settings.traditional ? 'zh-Hant' : 'zh-Hans'}>{settings.traditional ? currentWord.traditional : currentWord.simplified}</h2>
          {revealed ? <div className="review-answer">{currentWord.pinyin && <p className="review-pinyin">{currentWord.pinyin}</p>}<p className="review-definition">{currentWord.definitions.join('; ')}</p>{currentWord.grammar && <GrammarSourceLabel note={currentWord.grammar} />}{currentWord.grammar?.examples.slice(0, 2).map(example => <div className="learning-example" key={example.zh}><p lang={settings.traditional ? 'zh-Hant' : 'zh-Hans'}>{convert(example.zh, settings.traditional)}</p><span>{example.en}</span></div>)}</div> : <button type="button" className="learning-primary reveal-answer" onClick={() => setRevealed(true)}>Reveal answer <ArrowRight size={17} /></button>}</div>
          {revealed && <div className="review-rating"><p>How well did you remember?</p><div><button type="button" onClick={() => rate('again')}><RotateCcw size={19} /><strong>Again</strong><span>Review soon</span></button><button type="button" onClick={() => rate('good')}><Check size={20} /><strong>Good</strong><span>A little more time</span></button><button type="button" onClick={() => rate('easy')}><Zap size={19} /><strong>Easy</strong><span>A longer break</span></button></div></div>}
        </> : <p className="learning-notice" role="status">Moving to your next saved word…</p>}
      </div> : <>
        <div className="study-summary"><div className="study-summary-icon" aria-hidden="true"><Layers3 size={27} strokeWidth={1.6} /></div><div><p className="learning-eyebrow">YOUR DAILY PRACTICE</p><h2>{dueWords.length ? `${dueWords.length} ${dueWords.length === 1 ? 'word is' : 'words are'} ready for you.` : savedWords.length ? 'All caught up, for now.' : 'Your next discovery starts a collection.'}</h2><p>{dueWords.length ? 'A quick review helps the words you have learned stay with you.' : savedWords.length ? `Next review: ${new Date(nextDue!).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}. Or practice your collection now.` : 'Save words from a story or the dictionary, then return here to review them.'}</p></div>{savedWords.length > 0 && <button type="button" className="learning-primary" onClick={() => startReview(dueWords.length ? dueWords : savedWords)}>{dueWords.length ? 'Start review' : 'Practice all'}<ArrowRight size={17} /></button>}</div>
        {!savedWords.length ? <div className="learning-empty study-empty"><Bookmark size={36} strokeWidth={1.4} /><h3>A place for your new words.</h3><p>While reading, hover over a word and choose “Save word”. You can also search the Dictionary and save a word there. Your collection and review schedule will appear here.</p><button type="button" className="learning-secondary" onClick={() => setTab('grammar')}>Explore the grammar guide <ArrowRight size={16} /></button></div> : <><div className="study-list-heading"><h2>Your collection <span>{savedWords.length}</span></h2><label className="study-list-search" htmlFor="saved-word-search"><Search size={17} aria-hidden="true" /><input id="saved-word-search" type="search" aria-label="Search saved vocabulary" value={query} onChange={event => setQuery(event.target.value)} placeholder="Find a saved word" /></label></div><div className="study-word-list">{vocabulary.map(word => <div key={studyKey(word)} className="study-word-row"><span className={`learning-level level-${word.level}`}>{word.level}</span><div className="study-word-main"><span className="study-word" lang={settings.traditional ? 'zh-Hant' : 'zh-Hans'}>{settings.traditional ? word.traditional : word.simplified}</span>{word.pinyin && <span className="dictionary-pinyin">{word.pinyin}</span>}<p>{word.definitions.slice(0, 2).join('; ')}</p></div><span className={`study-word-due ${word.due <= now ? 'is-due' : ''}`}><Clock3 size={13} />{dueLabel(word, now)}</span><button type="button" className="learning-icon-button" onClick={() => pronounce(word.simplified)} aria-label={`Hear ${word.simplified}`}><Volume2 size={18} /></button>{removeTarget === studyKey(word) ? <div className="study-remove-confirm"><button type="button" onClick={() => { onRemoveWord(studyKey(word)); setRemoveTarget(null); }}>Remove</button><button type="button" onClick={() => setRemoveTarget(null)}>Keep</button></div> : <button type="button" className="learning-icon-button study-remove" onClick={() => setRemoveTarget(studyKey(word))} aria-label={`Remove ${word.simplified} from vocabulary`}><Trash2 size={17} /></button>}</div>)}{!vocabulary.length && <div className="learning-empty"><Search size={26} /><h3>No saved words match</h3><p>Try another word or clear your search.</p><button type="button" className="learning-secondary" onClick={() => setQuery('')}>Clear search</button></div>}</div><p className="study-schedule-note">Reviews adapt to your answers. Your vocabulary and schedule are saved on this device.</p></>}
      </>}
    </div> : <div id="grammar-panel" role="tabpanel" aria-labelledby="grammar-tab">
      <div className="grammar-intro"><h2>Understand the little things.</h2><p>Sentence patterns, useful particles, and the grammar that makes a story come together.</p></div>
      <section className="grammar-course-coverage" aria-labelledby="grammar-coverage-heading">
        <div className="grammar-coverage-heading"><h3 id="grammar-coverage-heading">Integrated Chinese course coverage</h3><span>{verifiedBooks.length} of {grammarBooks.length} books checked</span></div>
        <p>{courseNotes.length} course grammar notes with original explanations and examples. {unavailableBooks.length > 0 ? `${unavailableBooks.length} uploaded PDFs exceed the file inspection limit; their grammar has not been added yet.` : ''} {processingBooks.length > 0 ? `${processingBooks.length} ${processingBooks.length === 1 ? 'book is' : 'books are'} still being checked.` : ''} Learning levels below are estimates for study.</p>
        <details><summary>View book availability</summary><ul className="grammar-book-availability">{grammarBooks.map(book => <li key={book.id}><span>{book.title}</span><span className={`grammar-book-status ${book.status}`}>{book.status === 'verified' ? 'References checked' : book.status === 'processing' ? 'Being checked' : 'Awaiting a smaller file'}</span></li>)}</ul></details>
      </section>
      <div className="grammar-controls">
        <label className="study-list-search" htmlFor="grammar-search"><Search size={18} aria-hidden="true" /><input id="grammar-search" type="search" aria-label="Search grammar guide" value={grammarQuery} onChange={event => setGrammarQuery(event.target.value)} placeholder="Search a pattern or explanation" /></label>
        <label className="dictionary-level-filter">Study level<select aria-label="Filter grammar by estimated level" value={grammarLevel} onChange={event => setGrammarLevel(event.target.value)}><option value="all">All estimated levels</option>{LEVEL_NAMES.map((name, index) => <option value={index + 1} key={name}>{name}</option>)}</select></label>
      </div>
      <div className="grammar-course-controls">
        <label className="grammar-course-filter" htmlFor="grammar-book-filter">Book<select id="grammar-book-filter" aria-label="Filter grammar by book" value={grammarBook} onChange={event => { setGrammarBook(event.target.value); setGrammarLesson('all'); setExpandedGrammar(null); }}><option value="all">All grammar</option>{grammarBooks.map(book => <option value={book.id} key={book.id}>{book.title}{book.status !== 'verified' ? ' — pending' : ''}</option>)}</select></label>
        <label className="grammar-course-filter" htmlFor="grammar-lesson-filter">Lesson<select id="grammar-lesson-filter" aria-label="Filter grammar by lesson" disabled={!lessons.length} value={grammarLesson} onChange={event => { setGrammarLesson(event.target.value); setExpandedGrammar(null); }}><option value="all">All lessons</option>{lessons.map(lesson => <option key={lesson} value={lesson}>{lesson === 0 ? 'Introduction' : `Lesson ${lesson}`}</option>)}</select></label>
      </div>
      {selectedBook && selectedBook.status !== 'verified' ? <div className="learning-empty grammar-book-pending" role="status"><GraduationCap size={32} /><h3>{selectedBook.status === 'processing' ? 'This book is being checked' : 'This book is not available yet'}</h3><p>{selectedBook.reason ?? 'This PDF exceeds the 32 MiB file inspection limit. Its grammar has not been imported. A smaller PDF or extracted text is needed to finish this book.'}</p><button type="button" className="learning-secondary" onClick={() => { setGrammarBook('all'); setGrammarLesson('all'); }}>Explore available grammar</button></div> : <>
        <p className="grammar-results-summary" role="status">{notes.length} {notes.length === 1 ? 'pattern' : 'patterns'}{selectedBook ? ` in ${selectedBook.title}` : ''}{grammarLesson !== 'all' ? ` · Lesson ${grammarLesson}` : ''}</p>
        <div className="grammar-list">{notes.map(note => <article className={`grammar-card ${expandedGrammar === note.id ? 'is-expanded' : ''}`} key={note.id} data-grammar-id={note.id}>
          <button type="button" className="grammar-card-heading" aria-expanded={expandedGrammar === note.id} aria-controls={`grammar-${note.id}`} onClick={() => setExpandedGrammar(value => value === note.id ? null : note.id)}><span className={`learning-level level-${note.level}`} title="Estimated study level">{note.level}</span><span><strong lang={settings.traditional ? 'zh-Hant' : 'zh-Hans'}>{convert(note.pattern, settings.traditional)}</strong><span>{note.title}</span>{note.sources?.length ? <span className="grammar-card-course">Integrated Chinese · {note.sources.length} {note.sources.length === 1 ? 'reference' : 'references'}</span> : null}</span><ChevronDown size={20} /></button>
          {expandedGrammar === note.id && <div className="grammar-card-body" id={`grammar-${note.id}`}><p>{note.explanation}</p><GrammarSourceLabel note={note} />{note.examples.map(example => <div className="learning-example grammar-example" key={example.zh}><div><p lang={settings.traditional ? 'zh-Hant' : 'zh-Hans'}>{convert(example.zh, settings.traditional)}</p><span>{example.en}</span></div><button type="button" className="learning-icon-button" onClick={() => pronounce(example.zh)} aria-label={`Hear example: ${example.zh}`}><Volume2 size={18} /></button></div>)}<button type="button" className="learning-secondary" disabled={saved.has(`grammar:${note.id}`)} onClick={() => onSaveWord(grammarEntry(note))}>{saved.has(`grammar:${note.id}`) ? <Check size={16} /> : <Bookmark size={16} />}{saved.has(`grammar:${note.id}`) ? 'Pattern saved' : 'Save pattern for review'}</button></div>}
        </article>)}</div>
        {!notes.length && <div className="learning-empty"><GraduationCap size={32} /><h3>No patterns found</h3><p>Try another search, lesson, or estimated level.</p><button type="button" className="learning-secondary" onClick={() => { setGrammarQuery(''); setGrammarLevel('all'); setGrammarBook('all'); setGrammarLesson('all'); }}>Show all patterns</button></div>}
      </>}
    </div>}
  </section>;
}
