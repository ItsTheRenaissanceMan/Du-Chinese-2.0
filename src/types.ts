export type Level = 1 | 2 | 3 | 4 | 5 | 6;
export const LEVEL_NAMES = ['Newcomer', 'Elementary', 'Intermediate', 'Upper intermediate', 'Advanced', 'Master'] as const;
export interface Sentence { zh: string; en: string }
export interface Story {
  id: string; title: string; titleEn: string; level: Level; category: string;
  summary: string; minutes: number; sentences: Sentence[]; series?: string;
}
export interface GrammarNote {
  id: string; pattern: string; title: string; explanation: string;
  level: Level; examples: Sentence[];
  sources?: GrammarSource[];
  relatedTokens?: string[];
  tokenReadings?: Record<string, string[]>;
}
export interface GrammarSource {
  bookId: string; lesson: number; pdfPage: number; topic: string; section?: string;
}
export interface DictionaryEntry {
  simplified: string; traditional: string; pinyin: string;
  definitions: string[]; level: Level; grammar?: GrammarNote;
  studyKey?: string;
}
export interface Dictionary {
  entries: DictionaryEntry[]; bySimplified: Map<string, DictionaryEntry>;
}
export interface Token {
  text: string; simplified: string; traditional: string; pinyin: string[];
  level: Level; entry?: DictionaryEntry; grammar?: GrammarNote;
  grammars?: GrammarNote[];
}
export interface Settings {
  traditional: boolean; pinyin: boolean; dark: boolean; fontSize: number; speechRate: number;
}
export interface SavedWord extends DictionaryEntry {
  addedAt: number; due: number; interval: number; reviews: number;
}
export interface ReaderProps {
  story: Story; dictionary: Dictionary; settings: Settings;
  onSettingsChange: (patch: Partial<Settings>) => void;
  onSaveWord: (entry: DictionaryEntry) => void;
  savedWords: SavedWord[];
  onProgress: (storyId: string, sentence: number, complete?: boolean) => void;
  initialSentence?: number;
  onBack: () => void;
}
