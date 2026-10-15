import { describe, expect, it } from 'vitest';
import { coreGrammarNotes, grammarById, grammarNotes, grammarsFor } from '../src/data/grammar';
import { grammarBooks } from '../src/data/grammarCourses';
import { workbookGrammarCoverage, workbookSourceMetadata } from '../src/data/icLevel1Workbook';
import { validateUserData } from '../src/lib/storage';
import { studyKey } from '../src/lib/studyIdentity';
import type { GrammarNote, SavedWord } from '../src/types';

// Independently transcribed counts from the two uploaded textbook contents.
// A topic can have several explanatory notes, so count distinct citations.
const numberedTopicsByLesson = {
  'l1p1-textbook': [7, 7, 7, 7, 6, 6, 9, 10, 7, 6],
  'l1p2-textbook': [6, 7, 8, 6, 7, 4, 5, 6, 4, 4],
};
const lessonStartPages = {
  'l1p1-textbook': [53, 75, 99, 131, 155, 183, 209, 235, 259, 285, 312],
  'l1p2-textbook': [30, 60, 92, 130, 162, 198, 228, 256, 286, 314, 342],
};

function courseNotes() { return grammarNotes.filter(note => note.sources?.length); }
function studyEntry(note: GrammarNote, addedAt: number): SavedWord {
  return {
    simplified: note.pattern, traditional: note.pattern, pinyin: '',
    definitions: [note.explanation], level: note.level, grammar: note,
    studyKey: `grammar:${note.id}`, due: 0, interval: 0, reviews: 0, addedAt,
  };
}

describe('Integrated Chinese source coverage', () => {
  it('tracks all eight uploads and never attributes grammar to the five unread books', () => {
    expect(grammarBooks).toHaveLength(8);
    expect(new Set(grammarBooks.map(book => book.id)).size).toBe(8);
    const blocked = grammarBooks.filter(book => book.status === 'blocked');
    expect(blocked.map(book => book.id).sort()).toEqual([
      'l1p2-workbook', 'l2p1-textbook', 'l2p1-workbook', 'l2p2-textbook', 'l2p2-workbook',
    ]);
    for (const book of blocked) {
      expect(book.reason).toMatch(/32 MiB/);
      expect(courseNotes().flatMap(note => note.sources!).filter(source => source.bookId === book.id)).toHaveLength(0);
    }
    expect(grammarBooks.find(book => book.id === 'l1p1-textbook')?.pageCount).toBe(371);
    expect(grammarBooks.find(book => book.id === 'l1p2-textbook')?.pageCount).toBe(433);
    expect(grammarBooks.find(book => book.id === 'l1p1-workbook')?.pageCount).toBe(160);
  });

  it('covers every numbered grammar topic in textbook lessons 1–20', () => {
    for (const [bookId, counts] of Object.entries(numberedTopicsByLesson)) {
      const offset = bookId === 'l1p1-textbook' ? 1 : 11;
      const sources = courseNotes().flatMap(note => note.sources!)
        .filter(source => source.bookId === bookId && source.section === 'Grammar');
      expect(new Set(sources.map(source => `${source.lesson}:${source.topic}`)).size)
        .toBe(counts.reduce((sum, count) => sum + count, 0));
      for (const [index, count] of counts.entries()) {
        const lesson = offset + index;
        expect(new Set(sources.filter(source => source.lesson === lesson).map(source => source.topic)).size,
          `${bookId}, lesson ${lesson}`).toBe(count);
      }
    }
  });

  it('links every reviewed workbook practice target to taught grammar without counting repeats as new rules', () => {
    expect(workbookSourceMetadata.reviewedPages).toBe(160);
    expect(workbookSourceMetadata.lessons).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(workbookGrammarCoverage).toHaveLength(83);
    expect(workbookSourceMetadata.limitations).toMatch(/audio/i);
    for (const target of workbookGrammarCoverage) {
      expect(target.noteIds.length, target.topic).toBeGreaterThan(0);
      expect(target.sources.length, target.topic).toBeGreaterThan(0);
      for (const id of target.noteIds) {
        const note = grammarById(id);
        expect(note, target.topic).toBeDefined();
        for (const reference of target.sources) {
          expect(reference.bookId, target.topic).toBe('l1p1-workbook');
          expect(reference.lesson, target.topic).toBe(target.lesson);
          expect(note!.sources?.some(source => source.bookId === reference.bookId &&
            source.lesson === reference.lesson && source.pdfPage === reference.pdfPage &&
            source.topic === reference.topic), `${id}: workbook practice citation`).toBe(true);
        }
      }
    }
  });

  it('links every citation to a real book, lesson, page, and authoritative note', () => {
    expect(new Set(grammarNotes.map(note => note.id)).size).toBe(grammarNotes.length);
    for (const note of courseNotes()) {
      expect(grammarById(note.id)).toBe(note);
      expect(note.pattern.trim(), note.id).not.toBe('');
      expect(note.explanation.length, note.id).toBeGreaterThan(60);
      expect(note.examples.length, note.id).toBeGreaterThanOrEqual(1);
      for (const example of note.examples) {
        expect(example.zh, note.id).toMatch(/\p{Script=Han}/u);
        expect(example.en, note.id).toMatch(/[a-z]/i);
      }
      for (const source of note.sources!) {
        const book = grammarBooks.find(item => item.id === source.bookId);
        expect(book, note.id).toBeDefined();
        expect(book!.status, note.id).toBe('verified');
        expect(Number.isInteger(source.pdfPage), note.id).toBe(true);
        expect(source.pdfPage, note.id).toBeGreaterThan(0);
        expect(source.pdfPage, note.id).toBeLessThanOrEqual(book!.pageCount!);
        expect(source.topic.trim(), note.id).not.toBe('');
        expect(Number.isInteger(source.lesson), note.id).toBe(true);
        const firstLesson = book!.part === 1 ? 1 : 11;
        const introduction = source.lesson === 0 && book!.kind === 'textbook' && /^Introduction/i.test(source.section ?? '');
        expect(source.lesson, note.id).toBeGreaterThanOrEqual(introduction ? 0 : firstLesson);
        expect(source.lesson, note.id).toBeLessThan(firstLesson + 10);
        if (source.section === 'Grammar' && source.bookId in lessonStartPages) {
          const pages = lessonStartPages[source.bookId as keyof typeof lessonStartPages];
          const index = source.lesson - firstLesson;
          expect(source.pdfPage, `${note.id}: citation belongs to its lesson`).toBeGreaterThanOrEqual(pages[index]);
          expect(source.pdfPage, `${note.id}: citation belongs to its lesson`).toBeLessThan(pages[index + 1]);
        }
      }
    }
    expect(grammarById('not-a-real-note')).toBeUndefined();
    expect(coreGrammarNotes).toHaveLength(68);
  });
});

describe('course grammar reading and retention', () => {
  it('offers distinct taught uses of a particle while preserving its lexical readings', () => {
    const uses = grammarsFor('就', 'jiù');
    expect(uses.filter(note => note.sources?.length).length).toBeGreaterThanOrEqual(3);
    expect(new Set(uses.map(note => note.explanation)).size).toBe(uses.length);
    const descriptions = grammarsFor('得', 'de');
    expect(descriptions.some(note => /descriptive|manner/i.test(`${note.title} ${note.explanation}`))).toBe(true);
    expect(descriptions.some(note => note.sources?.some(source => source.lesson === 7))).toBe(true);
    expect(grammarsFor('得', 'dé')).toEqual([]);
    expect(grammarsFor('还', 'huán')).toEqual([]);
    expect(grammarsFor('了', 'liǎo')).toEqual([]);
  });

  it('retains separately saved course notes and restores authoritative explanations instead of stored text', () => {
    const notes = courseNotes();
    const first = notes.find(note => notes.some(other => note.id !== other.id && note.pattern === other.pattern));
    const second = notes.find(note => note.id !== first?.id && note.pattern === first?.pattern);
    expect(first).toBeDefined();
    expect(second).toBeDefined();
    const entries = [studyEntry(first!, 1), studyEntry(second!, 2)];
    entries[0].grammar = { ...first!, explanation: 'A stale or modified explanation from local storage.' };
    entries[0].definitions = ['A stale definition from an earlier app version.'];
    const restored = validateUserData({ words: JSON.parse(JSON.stringify(entries)) }).words;
    expect(restored).toHaveLength(2);
    expect(new Set(restored.map(studyKey)).size).toBe(2);
    expect(restored[0].grammar).toBe(grammarById(first!.id));
    expect(restored[1].grammar).toBe(grammarById(second!.id));
    expect(restored[0].definitions).toEqual([first!.explanation]);
    expect(restored[0].grammar?.explanation).not.toBe(restored[1].grammar?.explanation);
    expect(restored.every(word => word.grammar?.sources?.length)).toBe(true);
  });
});
