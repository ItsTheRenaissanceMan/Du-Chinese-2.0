import type { DictionaryEntry } from '../types';
/** Keep separate grammar uses of the same pattern independently reviewable. */
export function studyKey(entry: Pick<DictionaryEntry, 'simplified' | 'studyKey'>): string {
  return entry.studyKey || entry.simplified;
}
