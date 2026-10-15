import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { convert, createDictionary, formatDefinition, lookup, searchDictionary, tokenize, toPinyin } from '../src/lib/language';
import { grammarFor, grammarNotes, coreGrammarNotes } from '../src/data/grammar';
import type { DictionaryEntry } from '../src/types';

const entries = JSON.parse(readFileSync(new URL('../public/data/cedict.json', import.meta.url), 'utf8')) as DictionaryEntry[];
const dictionary = createDictionary(entries);

describe('offline dictionary data', () => {
  it('retains the full pinned CC-CEDICT dataset with all pronunciation senses', () => {
    expect(dictionary.entries).toHaveLength(124188);
    expect(dictionary.bySimplified.size).toBe(120448);
    expect(dictionary.entries.filter(entry => entry.simplified === '行').map(entry => entry.pinyin))
      .toEqual(expect.arrayContaining(['háng', 'héng', 'xíng']));
    expect(entries.every(entry => entry.level >= 1 && entry.level <= 6)).toBe(true);
  });

  it('finds both character systems and tone-number, tone-mark, toneless, and English queries', () => {
    for (const query of ['银行', '銀行', 'yin2 hang2', 'yín háng', 'yinhang', 'bank']) {
      expect(searchDictionary(query, dictionary, 60).some(entry => entry.simplified === '银行')).toBe(true);
    }
    for (const query of ['nü3 er2', 'nu:3 er2', 'nv3 er2', 'nǚ ér']) {
      expect(searchDictionary(query, dictionary).some(entry => entry.simplified === '女儿')).toBe(true);
    }
    expect(lookup('學習', dictionary)?.simplified).toBe('学习');
    expect(searchDictionary('   ', dictionary)).toEqual([]);
    expect(searchDictionary('Chinese', dictionary, 3)).toHaveLength(3);
  });

  it('ranks an exact headword before compounds and bounds result counts', () => {
    const results = searchDictionary('中国', dictionary, 12);
    expect(results[0].simplified).toBe('中国');
    expect(results.length).toBeLessThanOrEqual(12);
    expect(searchDictionary('中国', dictionary, 0)).toEqual([]);
    expect(searchDictionary('bank', dictionary)[0].simplified).toBe('银行');
  });

  it('converts neutral tones and ü in the generated dataset', () => {
    expect(dictionary.entries.find(entry => entry.simplified === '的' && entry.pinyin === 'de')).toBeDefined();
    expect(dictionary.entries.find(entry => entry.simplified === '女儿')?.pinyin).toBe('nǚ ér');
  });

  it('presents classifier and dictionary cross-references without exposing raw data markup', () => {
    const source = 'book; CL:本[ben3],冊|册[ce4]; see 書本|书本[shu1 ben3]';
    expect(formatDefinition(source)).toBe('book; Measure words: 本 (běn),册 (cè); see 书本 (shū běn)');
    expect(formatDefinition(source, true)).toBe('book; Measure words: 本 (běn),冊 (cè); see 書本 (shū běn)');
    expect(source).toContain('CL:');
    expect(formatDefinition('female; see 女[nu:3]; particle 的[de5]')).toBe('female; see 女 (nǚ); particle 的 (de)');
  });
});

describe('reading language support', () => {
  it('keeps multi-character lexical words and the exact original sentence', () => {
    const text = '我在重庆的银行学习中文。';
    const tokens = tokenize(text, dictionary);
    expect(tokens.map(token => token.text).join('')).toBe(text);
    expect(tokens.map(token => token.simplified)).toEqual(['我', '在', '重庆', '的', '银行', '学习', '中文', '。']);
    expect(tokens.find(token => token.simplified === '重庆')?.pinyin).toEqual(['chóng', 'qìng']);
    expect(tokens.find(token => token.simplified === '银行')?.pinyin).toEqual(['yín', 'háng']);
    expect(tokens.find(token => token.simplified === '的')?.entry?.pinyin).toBe('de');
    expect(tokens.find(token => token.simplified === '的')?.grammar?.id).toBe('de-attributive');
  });

  it('uses phrase context for traditional conversion and keeps character-aligned pinyin', () => {
    expect(convert('头发发展干杯后面', true)).toBe('頭髮發展乾杯後面');
    expect(convert('頭髮發展乾杯後面', false)).toBe('头发发展干杯后面');
    const text = '我在銀行讀書。';
    const tokens = tokenize(text, dictionary);
    expect(tokens.map(token => token.text).join('')).toBe(text);
    expect(tokens.map(token => token.simplified).join('')).toBe('我在银行读书。');
    expect(toPinyin('学习OpenAI！')).toEqual(['xué', 'xí', '', '', '', '', '', '', '']);
    expect(toPinyin('𠀀中文。')).toEqual(['', 'zhōng', 'wén', '']);
  });

  it('handles sentence-context polyphones and 一/不 sandhi', () => {
    expect(toPinyin('他看了书。')).toEqual(['tā', 'kàn', 'le', 'shū', '']);
    expect(toPinyin('我不去。')).toEqual(['wǒ', 'bú', 'qù', '']);
    expect(toPinyin('一本书')).toEqual(['yì', 'běn', 'shū']);
    const tokens = tokenize('我行。', dictionary);
    expect(tokens.find(token => token.simplified === '行')?.entry?.pinyin).toBe('xíng');
  });

  it('shows ordinary reader meanings ahead of same-pronunciation variants and surnames', () => {
    const expected = new Map([
      ['和', '(joining two nouns) and; together with; with (Taiwan pr. [han4])'],
      ['车', 'car'],
      ['里', 'inside'],
      ['故事', 'narrative; story; tale'],
    ]);
    for (const [word, definition] of expected) {
      expect(tokenize(word, dictionary)[0].entry?.definitions).toContain(definition);
    }
    // Alternate meanings remain searchable rather than being removed from data.
    expect(searchDictionary('故事', dictionary).some(entry => entry.definitions.includes('old practice'))).toBe(true);
    expect(searchDictionary('和', dictionary).map(entry => entry.pinyin))
      .toEqual(expect.arrayContaining(['hé', 'hè', 'hú', 'huó', 'huò']));
  });

  it('attaches particle grammar to its grammatical reading, preserving other lexical senses', () => {
    expect(dictionary.bySimplified.get('了')?.pinyin).toBe('le');
    expect(dictionary.bySimplified.get('的')?.pinyin).toBe('de');
    expect(dictionary.bySimplified.get('得')?.pinyin).toBe('de');
    const alternate = dictionary.entries.find(entry => entry.simplified === '了' && entry.pinyin === 'liǎo');
    expect(alternate).toBeDefined();
    expect(alternate?.grammar).toBeUndefined();
    expect(grammarFor('了', 'liǎo')).toBeUndefined();
    expect(grammarFor('地', 'dì')).toBeUndefined();
    expect(grammarFor('还', 'huán')).toBeUndefined();
    expect(grammarFor('都', 'dū')).toBeUndefined();
    expect(grammarFor('得', 'dé')).toBeUndefined();
    expect(grammarFor('得', 'de')?.id).toBe('de-complement');
    expect(grammarFor('了', 'le')?.id).toBe('le-change');
    expect(grammarFor('还', 'hái')?.id).toBe('hai-still');
    expect(coreGrammarNotes.every(note => grammarFor(note.pattern)?.id === note.id)).toBe(true);
  });

  it('preserves unknown words and punctuation without inventing definitions', () => {
    const tokens = tokenize('𠀀 OpenAI 42。', dictionary);
    expect(tokens.map(token => token.text).join('')).toBe('𠀀 OpenAI 42。');
    expect(tokens.find(token => token.text === 'OpenAI')?.entry).toBeUndefined();
    expect(tokens.at(-1)?.pinyin).toEqual(['']);
  });

  it('provides original grammar explanations and aliases independently of dictionary availability', () => {
    expect(grammarNotes.length).toBeGreaterThanOrEqual(60);
    expect(new Set(grammarNotes.map(note => note.id)).size).toBe(grammarNotes.length);
    expect(grammarFor('没有')?.id).toBe('mei-negative');
    expect(grammarFor('了解')).toBeUndefined();
    expect(tokenize('吗', createDictionary([]))[0].grammar?.id).toBe('ma-question');
    expect(grammarNotes.every(note => note.examples.length && note.explanation.length > 40)).toBe(true);
  });
});
