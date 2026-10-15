import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { ArrowRight, Bookmark, Check, GraduationCap, Search, Volume2, X } from 'lucide-react';
import { convert, searchDictionary } from '../lib/language';
import { speakChinese, stopSpeaking } from '../lib/speech';
import { LEVEL_NAMES, type Dictionary, type DictionaryEntry, type SavedWord, type Settings } from '../types';
import './study.css';

export interface DictionaryViewProps {
  dictionary: Dictionary;
  settings: Settings;
  savedWords: SavedWord[];
  onSaveWord: (entry: DictionaryEntry) => void;
}

const suggestions = ['学习', 'friend', 'because', 'xi huan'];
const featuredWords = ['学习', '喜欢', '朋友', '故事', '世界', '今天', '因为', '虽然', '把', '了', '读', '书'];

export default function DictionaryView({ dictionary, settings, savedWords, onSaveWord }: DictionaryViewProps) {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query.trim());
  const [level, setLevel] = useState('all');
  const [limit, setLimit] = useState(60);
  const [selected, setSelected] = useState<DictionaryEntry | null>(null);
  const [audioError, setAudioError] = useState('');
  const saved = useMemo(() => new Set(savedWords.filter(word => !word.studyKey).map(word => word.simplified)), [savedWords]);
  const scopedDictionary = useMemo(() => level === 'all' ? dictionary : {
    ...dictionary, entries: dictionary.entries.filter(entry => entry.level === Number(level)),
  }, [dictionary, level]);
  const matches = useMemo(() => {
    if (deferredQuery) return searchDictionary(deferredQuery, scopedDictionary, limit + 1);
    if (level !== 'all') return scopedDictionary.entries.slice(0, limit + 1);
    return featuredWords.map(word => dictionary.bySimplified.get(word)).filter((entry): entry is DictionaryEntry => !!entry);
  }, [deferredQuery, scopedDictionary, dictionary, level, limit]);
  const visibleMatches = matches.slice(0, limit);
  const selectedEntry = selected && visibleMatches.includes(selected) ? selected : visibleMatches[0];

  useEffect(() => { setLimit(60); setSelected(null); }, [query, level]);
  useEffect(() => () => stopSpeaking(), []);

  async function pronounce(entry: DictionaryEntry) {
    setAudioError('');
    try { await speakChinese(entry.simplified, settings.speechRate, { onError: setAudioError }); }
    catch (error) { setAudioError(error instanceof Error ? error.message : 'Pronunciation is unavailable on this device.'); }
  }

  return <section className="learning-page dictionary-page" aria-labelledby="dictionary-heading">
    <div className="learning-page-heading">
      <div><p className="learning-eyebrow">A LITTLE CURIOSITY GOES A LONG WAY</p><h1 id="dictionary-heading">Find the right word.</h1><p>Explore Chinese, follow a meaning, and make new words your own.</p></div>
      <div className="learning-heading-icon" aria-hidden="true"><Search size={29} strokeWidth={1.5} /></div>
    </div>
    <div className="dictionary-search-panel">
      <label className="dictionary-search" htmlFor="dictionary-query">
        <Search size={21} aria-hidden="true" />
        <input id="dictionary-query" type="search" aria-label="Search dictionary" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search Chinese, English, or pinyin…" autoComplete="off" spellCheck={false} />
        {query && <button type="button" className="learning-icon-button" onClick={() => setQuery('')} aria-label="Clear search"><X size={18} /></button>}
      </label>
      <div className="dictionary-search-options"><p>Try <span className="dictionary-suggestions">{suggestions.map(suggestion => <button type="button" key={suggestion} onClick={() => setQuery(suggestion)}>{suggestion}</button>)}</span></p>
        <label className="dictionary-level-filter">Word level <select value={level} onChange={event => setLevel(event.target.value)}><option value="all">All levels</option>{LEVEL_NAMES.map((name, index) => <option value={index + 1} key={name}>{name}</option>)}</select></label>
      </div>
    </div>
    {audioError && <p className="learning-notice" role="alert">{audioError}</p>}
    <div className="dictionary-result-heading"><h2>{deferredQuery ? 'Search results' : level === 'all' ? 'Words to get you started' : `${LEVEL_NAMES[Number(level) - 1]} words`}</h2><span>{dictionary.entries.length.toLocaleString()} dictionary entries · levels are approximate</span></div>
    {!visibleMatches.length ? <div className="learning-empty"><Search size={34} /><h3>No words found</h3><p>Try a shorter word, an English meaning, or pinyin without tone marks.</p><button type="button" className="learning-secondary" onClick={() => { setQuery(''); setLevel('all'); }}>Browse common words <ArrowRight size={16} /></button></div> : <div className="dictionary-layout">
      <div className="dictionary-results" aria-label="Dictionary results" aria-busy={query.trim() !== deferredQuery}>
        {visibleMatches.map((entry, index) => <button type="button" className={`dictionary-result ${selectedEntry === entry ? 'is-selected' : ''}`} key={`${entry.simplified}-${entry.traditional}-${entry.pinyin}-${index}`} onClick={() => setSelected(entry)} aria-pressed={selectedEntry === entry}>
          <span className="dictionary-word-block"><span lang={settings.traditional ? 'zh-Hant' : 'zh-Hans'} className="dictionary-word">{settings.traditional ? entry.traditional : entry.simplified}</span><span className="dictionary-pinyin">{entry.pinyin}</span></span>
          <span className="dictionary-short-definition">{entry.definitions.slice(0, 2).join('; ')}</span>
          <span className={`learning-level level-${entry.level}`}>{entry.grammar ? <GraduationCap size={13} /> : null}{entry.level}</span>
          {saved.has(entry.simplified) && <Bookmark size={15} aria-label="Saved" className="dictionary-saved-indicator" />}
        </button>)}
        {matches.length > limit && <button type="button" className="dictionary-load-more" onClick={() => setLimit(value => value + 60)}>Show more results <ArrowRight size={15} /></button>}
      </div>
      {selectedEntry && <aside className="dictionary-detail" aria-label={`Definition of ${selectedEntry.simplified}`}>
        <div className="dictionary-detail-top"><span className={`learning-level level-${selectedEntry.level}`}>{LEVEL_NAMES[selectedEntry.level - 1]}</span><button type="button" className="learning-icon-button" onClick={() => pronounce(selectedEntry)} aria-label={`Hear ${selectedEntry.simplified}`}><Volume2 size={21} /></button></div>
        <h2 lang={settings.traditional ? 'zh-Hant' : 'zh-Hans'}>{settings.traditional ? selectedEntry.traditional : selectedEntry.simplified}</h2>
        <p className="dictionary-detail-pinyin">{selectedEntry.pinyin}</p>
        {selectedEntry.simplified !== selectedEntry.traditional && <p className="dictionary-other-script">{settings.traditional ? 'Simplified' : 'Traditional'} <span lang={settings.traditional ? 'zh-Hans' : 'zh-Hant'}>{settings.traditional ? selectedEntry.simplified : selectedEntry.traditional}</span></p>}
        <div className="dictionary-definitions"><h3>Meaning</h3><ol>{selectedEntry.definitions.map((definition, index) => <li key={`${definition}-${index}`}>{definition}</li>)}</ol></div>
        {selectedEntry.grammar && <div className="dictionary-grammar"><h3><GraduationCap size={17} /> How it works</h3><h4>{selectedEntry.grammar.title}</h4><p>{selectedEntry.grammar.explanation}</p>{selectedEntry.grammar.examples.map(example => <div className="learning-example" key={example.zh}><p lang={settings.traditional ? 'zh-Hant' : 'zh-Hans'}>{convert(example.zh, settings.traditional)}</p><span>{example.en}</span></div>)}</div>}
        <button type="button" className={saved.has(selectedEntry.simplified) ? 'learning-secondary dictionary-save-button' : 'learning-primary dictionary-save-button'} disabled={saved.has(selectedEntry.simplified)} onClick={() => onSaveWord(selectedEntry)}>{saved.has(selectedEntry.simplified) ? <Check size={17} /> : <Bookmark size={17} />}{saved.has(selectedEntry.simplified) ? 'Saved to your vocabulary' : 'Save to vocabulary'}</button>
        <p className="dictionary-source">Definitions from CC-CEDICT. Saved words are available in Study.</p>
      </aside>}
    </div>}
  </section>;
}
