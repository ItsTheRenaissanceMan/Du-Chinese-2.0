import type { SavedWord, Settings } from '../types';
import { grammarFor, grammarById } from '../data/grammar';
export interface Progress { sentence: number; complete: boolean; updatedAt: number }
export interface UserData { settings: Settings; words: SavedWord[]; progress: Record<string, Progress> }
const DEFAULTS: Settings = { traditional: false, pinyin: true, dark: false, fontSize: 28, speechRate: 0.8 };
const KEY = 'hanlin.user.v1';
export function validateUserData(value: unknown): UserData {
  const data = value && typeof value === 'object' ? value as Partial<UserData> : {};
  const source = data.settings || DEFAULTS;
  const settings: Settings = {
    traditional: source.traditional === true, pinyin: source.pinyin !== false,
    dark: source.dark === true,
    fontSize: Number.isFinite(source.fontSize) ? Math.max(20, Math.min(40, source.fontSize)) : DEFAULTS.fontSize,
    speechRate: Number.isFinite(source.speechRate) ? Math.max(0.5, Math.min(1.5, source.speechRate)) : DEFAULTS.speechRate,
  };
  const words = Array.isArray(data.words) ? data.words.filter(w => w && typeof w.simplified === 'string' && typeof w.traditional === 'string' && typeof w.pinyin === 'string' && Array.isArray(w.definitions) && w.definitions.every(d => typeof d === 'string') && Number.isFinite(w.due) && Number.isFinite(w.interval) && Number.isFinite(w.reviews) && Number.isFinite(w.addedAt) && Number.isInteger(w.level) && w.level >= 1 && w.level <= 6).map(w => {
    const known = typeof w.grammar?.id === 'string' ? grammarById(w.grammar.id) : undefined;
    const isPattern = known && w.simplified === known.pattern && w.studyKey === `grammar:${known.id}`;
    return { ...w, studyKey: isPattern ? `grammar:${known.id}` : undefined,
      grammar: isPattern ? known : grammarFor(w.simplified, w.pinyin),
      definitions: isPattern ? [known.explanation] : w.definitions };
  }) : [];
  const progress: Record<string, Progress> = {};
  if (data.progress && typeof data.progress === 'object') {
    for (const [id, entry] of Object.entries(data.progress)) {
      if (!id.match(/^[a-z0-9-]+$/i) || !entry || !Number.isInteger(entry.sentence) || entry.sentence < 0 || !Number.isFinite(entry.updatedAt)) continue;
      progress[id] = { sentence: entry.sentence, complete: entry.complete === true, updatedAt: entry.updatedAt };
    }
  }
  return { settings, words, progress };
}
export function loadUserData(): UserData {
  try { return validateUserData(JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch { return validateUserData({}); }
}
export function saveUserData(data: UserData) { localStorage.setItem(KEY, JSON.stringify(data)); }
export function scheduleReview(word: SavedWord, rating: 'again'|'good'|'easy', now = Date.now()): SavedWord {
  const interval = rating === 'again' ? 0 : rating === 'easy' ? Math.max(3, word.interval * 3) : Math.max(1, word.interval * 2);
  return { ...word, interval, reviews: word.reviews + 1, due: now + (rating === 'again' ? 10 * 60_000 : interval * 86_400_000) };
}
