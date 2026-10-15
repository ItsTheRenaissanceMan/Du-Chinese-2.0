export interface GrammarBook {
  id: string; title: string; level: 1 | 2; part: 1 | 2;
  kind: 'textbook' | 'workbook'; status: 'verified' | 'blocked' | 'processing';
  pageCount?: number; edition?: string; sha256?: string; reason?: string;
}
const blockedReason = 'This uploaded PDF exceeded the 32 MiB transfer limit. Its grammar has not been read or verified; a smaller or split copy is needed.';
export const grammarBooks: GrammarBook[] = [
  { id: 'l1p1-textbook', title: 'Integrated Chinese · Level 1 Part 1 · Textbook', level: 1, part: 1, kind: 'textbook', status: 'verified', pageCount: 371, edition: 'Third edition', sha256: 'a1f222383d6293e8a21ec74cc875ea34503af8a6655e6981f251a2c5f849c55b' },
  { id: 'l1p2-textbook', title: 'Integrated Chinese · Level 1 Part 2 · Textbook', level: 1, part: 2, kind: 'textbook', status: 'verified', pageCount: 433, edition: 'Third edition', sha256: '392360a0cbc30125776dfe6774d4c10991d7d6a1eb4df292ce22c3444ac50989' },
  { id: 'l1p1-workbook', title: 'Integrated Chinese · Level 1 Part 1 · Workbook (supplied excerpt)', level: 1, part: 1, kind: 'workbook', status: 'verified', pageCount: 160, sha256: '43413450cc0dd3feb68fbfe6cf66aac0db29ca5a64553b09c8babb89ed62826b' },
  { id: 'l1p2-workbook', title: 'Integrated Chinese · Level 1 Part 2 · Workbook', level: 1, part: 2, kind: 'workbook', status: 'blocked', reason: blockedReason },
  { id: 'l2p1-textbook', title: 'Integrated Chinese · Level 2 Part 1 · Textbook', level: 2, part: 1, kind: 'textbook', status: 'blocked', reason: blockedReason },
  { id: 'l2p2-textbook', title: 'Integrated Chinese · Level 2 Part 2 · Textbook', level: 2, part: 2, kind: 'textbook', status: 'blocked', reason: blockedReason },
  { id: 'l2p1-workbook', title: 'Integrated Chinese · Level 2 Part 1 · Workbook', level: 2, part: 1, kind: 'workbook', status: 'blocked', reason: blockedReason },
  { id: 'l2p2-workbook', title: 'Integrated Chinese · Level 2 Part 2 · Workbook', level: 2, part: 2, kind: 'workbook', status: 'blocked', reason: blockedReason },
];
export function grammarBook(id: string) { return grammarBooks.find(book => book.id === id); }
