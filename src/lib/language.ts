import { Converter } from 'opencc-js';
import { pinyin, convert as convertPinyinNotation } from 'pinyin-pro';
import { grammarFor, grammarsFor } from '../data/grammar';
import type { Dictionary, DictionaryEntry, Level, Token } from '../types';

const toTraditional = Converter({ from: 'cn', to: 't' });
const toSimplified = Converter({ from: 't', to: 'cn' });
const han = /\p{Script=Han}/u;

/** Contextual OpenCC conversion; the source is never mutated. */
export function convert(text: string, traditional: boolean): string {
  return traditional ? toTraditional(text) : toSimplified(text);
}

/** Makes CC-CEDICT cross-references readable without changing the licensed source data. */
export function formatDefinition(definition: string, traditional = false): string {
  const references = /([\p{Script=Han}\p{L}\p{N}·〇]+)(?:\|([\p{Script=Han}\p{L}\p{N}·〇]+))?\[([a-zA-ZüÜvV:0-5 '\-]+)\]/gu;
  return definition.replace(/\bCL:/g, 'Measure words: ').replace(references, (_, first: string, second: string | undefined, numbered: string) => {
    const word = convert(traditional ? first : second ?? first, traditional);
    const pronunciation = convertPinyinNotation(numbered.replace(/u:/gi, 'ü').replace(/([a-züv]+)[05]\b/gi, '$1'));
    return `${word} (${pronunciation})`;
  });
}

/** One syllable per character; punctuation and Latin characters have empty syllables. */
export function toPinyin(text: string): string[] {
  return pinyin(convert(text, false), {
    type: 'all', nonZh: 'spaced', toneType: 'symbol', segmentit: 2,
    toneSandhi: { yi: true, bu: true, thirdTone: false },
  }).map(item => item.isZh ? item.pinyin : '');
}

interface SearchRow {
  entry: DictionaryEntry; chinese: string; pronunciation: string; english: string;
  englishHeadwords: string; score: number; order: number;
}
interface DictionaryIndex {
  byTraditional: Map<string, DictionaryEntry>;
  alternatives: Map<string, DictionaryEntry[]>;
  maxWordLength: number;
  rows?: SearchRow[];
}
const indexes = new WeakMap<Dictionary, DictionaryIndex>();
const commonParticleReadings: Record<string, string> = {
  的: 'de', 地: 'de', 得: 'de', 了: 'le', 着: 'zhe', 会: 'hui', 还: 'hai', 给: 'gei', 和: 'he', 都: 'dou',
};

// Prefer ordinary meanings over surname-only and cross-reference-only entries.
function meaningScore(entry: DictionaryEntry): number {
  const definitions = entry.definitions.join('; ').toLowerCase();
  let score = entry.definitions.length / 100;
  if (/^surname\b/.test(definitions)) score -= 4;
  if (/^(old |archaic |ancient |variant |alternate |see |abbr\.)/.test(definitions)) score -= 2;
  if (/^\(.*?\) variant of/.test(definitions)) score -= 2;
  if (/^[A-Z]/.test(entry.pinyin)) score -= 0.5;
  const commonReading = commonParticleReadings[entry.simplified];
  if (commonReading && entry.grammar && normalizePinyin(entry.pinyin) === commonReading) score += 4;
  return score;
}

export function createDictionary(entries: DictionaryEntry[]): Dictionary {
  const prepared: DictionaryEntry[] = [];
  const bySimplified = new Map<string, DictionaryEntry>();
  const byTraditional = new Map<string, DictionaryEntry>();
  const alternatives = new Map<string, DictionaryEntry[]>();
  let maxWordLength = 1;
  for (const source of entries) {
    if (!source || typeof source.simplified !== 'string' || !source.simplified ||
      typeof source.traditional !== 'string' || typeof source.pinyin !== 'string' ||
      !Array.isArray(source.definitions)) continue;
    const entry = { ...source, grammar: grammarFor(source.simplified, source.pinyin) };
    prepared.push(entry);
    maxWordLength = Math.max(maxWordLength, Array.from(entry.simplified).length);
    const existing = bySimplified.get(entry.simplified);
    if (existing) {
      const readings = alternatives.get(entry.simplified) ?? [existing];
      readings.push(entry);
      alternatives.set(entry.simplified, readings);
    }
    if (!existing || meaningScore(entry) > meaningScore(existing)) bySimplified.set(entry.simplified, entry);
    const tradExisting = byTraditional.get(entry.traditional);
    if (!tradExisting || meaningScore(entry) > meaningScore(tradExisting)) byTraditional.set(entry.traditional, entry);
  }
  const dictionary = { entries: prepared, bySimplified };
  indexes.set(dictionary, { byTraditional, alternatives, maxWordLength });
  return dictionary;
}

function getIndex(dictionary: Dictionary): DictionaryIndex {
  let index = indexes.get(dictionary);
  if (!index) {
    const built = createDictionary(dictionary.entries);
    index = indexes.get(built)!;
    indexes.set(dictionary, index);
  }
  return index;
}

export function lookup(word: string, dictionary: Dictionary): DictionaryEntry | undefined {
  return getIndex(dictionary).byTraditional.get(word) ??
    dictionary.bySimplified.get(word) ?? dictionary.bySimplified.get(convert(word, false));
}

function normalizePinyin(value: string): string {
  // Keep ü distinct from u, while accepting keyboard v and u: spellings.
  return value.toLowerCase().replace(/u:|v/g, 'ü').normalize('NFD')
    .replace(/u\u0308/g, 'v').replace(/[\u0300-\u036f]/g, '')
    .replace(/[0-5\s’'\-]/g, '').normalize('NFC');
}

function contextualEntry(word: string, syllables: string[], dictionary: Dictionary): DictionaryEntry | undefined {
  const primary = dictionary.bySimplified.get(word);
  const readings = getIndex(dictionary).alternatives.get(word);
  if (!readings) return primary;
  const contextual = syllables.join(' ').toLowerCase();
  const compatible = readings.filter(entry => normalizePinyin(entry.pinyin) === normalizePinyin(contextual))
    .sort((a, b) => meaningScore(b) - meaningScore(a));
  // Several CC-CEDICT rows can share a pronunciation: an old variant or surname
  // must not hide the ordinary definition merely because it appears first.
  const exact = compatible.find(entry => entry.pinyin.toLowerCase() === contextual);
  if (exact && meaningScore(exact) >= 0) return exact;
  // The pronunciation model sometimes retains a full tone where the common word
  // is neutral, e.g. 故事 gù shi. Keep the useful sense ahead of "old practice".
  return compatible[0] ?? exact ?? primary;
}

/** Maximum dictionary matching keeps multi-character words and idioms together. */
export function tokenize(text: string, dictionary: Dictionary): Token[] {
  const simplifiedText = convert(text, false);
  const chars = Array.from(simplifiedText);
  const originalChars = Array.from(text);
  const traditionalChars = Array.from(convert(simplifiedText, true));
  const syllables = toPinyin(simplifiedText);
  const index = getIndex(dictionary);
  const tokens: Token[] = [];
  for (let offset = 0; offset < chars.length;) {
    let length = 1;
    if (han.test(chars[offset])) {
      const end = Math.min(chars.length, offset + index.maxWordLength);
      for (let candidateEnd = end; candidateEnd > offset; candidateEnd--) {
        const candidate = chars.slice(offset, candidateEnd).join('');
        if (dictionary.bySimplified.has(candidate)) {
          length = candidateEnd - offset;
          break;
        }
      }
    } else {
      // Preserve whitespace/punctuation separately from a Latin or numeric word.
      const latin = /[\p{Letter}\p{Number}_]/u;
      if (latin.test(chars[offset])) {
        while (offset + length < chars.length && !han.test(chars[offset + length]) &&
          latin.test(chars[offset + length])) length++;
      }
    }
    const word = chars.slice(offset, offset + length).join('');
    const pronunciation = syllables.slice(offset, offset + length);
    const entry = contextualEntry(word, pronunciation, dictionary);
    tokens.push({
      text: originalChars.slice(offset, offset + length).join('') || word,
      simplified: word,
      // Use sentence-level conversion for ambiguous characters, such as 后 and 发.
      traditional: traditionalChars.slice(offset, offset + length).join(''),
      pinyin: pronunciation,
      level: (entry?.level ?? (han.test(word) ? 6 : 1)) as Level,
      entry,
      grammar: grammarFor(word, pronunciation.join(' ')) ?? entry?.grammar,
      grammars: grammarsFor(word, pronunciation.join(' ')),
    });
    offset += length;
  }
  return tokens;
}

/** Searches all senses, with exact matches ranked before broad substring matches. */
export function searchDictionary(query: string, dictionary: Dictionary, limit = 60): DictionaryEntry[] {
  const trimmed = query.trim();
  if (!trimmed || limit <= 0) return [];
  const index = getIndex(dictionary);
  index.rows ??= dictionary.entries.map((entry, order) => ({
    entry,
    chinese: `${entry.simplified}\n${entry.traditional}`,
    pronunciation: normalizePinyin(entry.pinyin),
    english: entry.definitions.join('; ').toLowerCase(),
    englishHeadwords: `\n${entry.definitions.map(definition => definition.toLowerCase()
      .replace(/\([^)]*\)/g, '').replace(/^to /, '').trim()).join('\n')}\n`,
    score: meaningScore(entry), order,
  }));
  const lower = trimmed.toLowerCase();
  const chineseQuery = convert(trimmed, false);
  const pronunciationQuery = normalizePinyin(trimmed);
  const isChinese = han.test(trimmed);
  // A bounded max-heap avoids sorting tens of thousands of broad English matches.
  // Its root is the worst currently selected match; only better matches replace it.
  type Match = { row: SearchRow; rank: number };
  const results: Match[] = [];
  const cap = Math.min(dictionary.entries.length, Math.floor(limit));
  if (!cap) return [];
  const compare = (a: Match, b: Match): number => a.rank - b.rank ||
    a.row.entry.level - b.row.entry.level || a.row.entry.simplified.length - b.row.entry.simplified.length ||
    b.row.score - a.row.score || a.row.order - b.row.order;
  function keep(match: Match) {
    if (results.length < cap) {
      results.push(match);
      let at = results.length - 1;
      while (at > 0) {
        const parent = (at - 1) >> 1;
        if (compare(results[at], results[parent]) <= 0) break;
        [results[at], results[parent]] = [results[parent], results[at]];
        at = parent;
      }
      return;
    }
    if (compare(match, results[0]) >= 0) return;
    results[0] = match;
    let at = 0;
    for (;;) {
      const left = at * 2 + 1;
      const right = left + 1;
      if (left >= results.length) return;
      const worse = right < results.length && compare(results[right], results[left]) > 0 ? right : left;
      if (compare(results[at], results[worse]) >= 0) return;
      [results[at], results[worse]] = [results[worse], results[at]];
      at = worse;
    }
  }
  for (const row of index.rows) {
    let rank = 100;
    if (row.entry.simplified === chineseQuery || row.entry.traditional === trimmed) rank = 0;
    else if (!isChinese && row.pronunciation === pronunciationQuery) rank = 1;
    else if (!isChinese && row.englishHeadwords.includes(`\n${lower}\n`)) rank = 2;
    else if (isChinese && (row.entry.simplified.startsWith(chineseQuery) || row.entry.traditional.startsWith(trimmed))) rank = 3;
    else if (!isChinese && row.english.startsWith(lower)) rank = 4;
    else if (!isChinese && row.pronunciation.startsWith(pronunciationQuery)) rank = 5;
    else if (isChinese && (row.chinese.includes(trimmed) || row.entry.simplified.includes(chineseQuery))) rank = 6;
    else if (!isChinese && row.english.includes(lower)) rank = 7;
    if (rank < 100) keep({ row, rank });
  }
  return results.sort(compare).map(result => result.row.entry);
}
