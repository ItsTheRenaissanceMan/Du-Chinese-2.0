import { grammarBooks } from '../data/grammarCourses';
import type { GrammarNote } from '../types';

/** Only bibliographic metadata is shown; uploaded files are not bundled with the app. */
export default function GrammarSourceLabel({ note }: { note: GrammarNote }) {
  if (!note.sources?.length) return null;

  return <div className="grammar-source-list" aria-label="Book references">
    <p>Course references</p>
    <ul>{note.sources.map(source => {
      const book = grammarBooks.find(item => item.id === source.bookId);
      return <li key={`${source.bookId}-${source.lesson}-${source.pdfPage}-${source.topic}`}>
        <span className="grammar-source-book">{book?.title ?? 'Integrated Chinese'}</span>
        <span>{source.lesson === 0 ? 'Introduction' : `Lesson ${source.lesson}`} · PDF p. {source.pdfPage}{source.section ? ` · ${source.section}` : ''}</span>
        <span className="grammar-source-topic">{source.topic}</span>
      </li>;
    })}</ul>
  </div>;
}
