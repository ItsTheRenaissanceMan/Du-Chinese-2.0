# Integrated Chinese grammar coverage

The app retains the verified grammar as editable teaching notes, original Chinese/English examples, and book/lesson/page references in its source code. It does not bundle the uploaded books, page images, OCR text, or textbook exercises. Explanations and examples are newly written; this is an independent study companion, not a reproduction or an official Integrated Chinese product.

## Uploads and verification limits

| Uploaded book | Pages | Coverage |
| --- | ---: | --- |
| Level 1 Part 1 textbook, third edition | 371 | Text extraction and grammar-section review; lessons 1–10 |
| Level 1 Part 2 textbook, third edition | 433 | Text extraction and grammar-section review; lessons 11–20 |
| Level 1 Part 1 workbook excerpt | 160 | All pages rendered, OCR processed, and reviewed; lessons 1–10 and reviews |
| Level 1 Part 2 workbook | — | Transfer blocked: uploaded file exceeds the 32 MiB limit |
| Level 2 Part 1 textbook | — | Transfer blocked: uploaded file exceeds the 32 MiB limit |
| Level 2 Part 2 textbook | — | Transfer blocked: uploaded file exceeds the 32 MiB limit |
| Level 2 Part 1 workbook | — | Transfer blocked: uploaded file exceeds the 32 MiB limit |
| Level 2 Part 2 workbook | — | Transfer blocked: uploaded file exceeds the 32 MiB limit |

The five blocked uploads have no inferred lessons or claimed grammar coverage in the app. Smaller or split copies are required to verify and incorporate them. Consequently, this release does **not** claim to contain every grammar point from all eight uploaded books.

`src/data/grammarCourses.ts` records book identity, status, page counts, and checksums for the accessible originals. App citations use **PDF page numbers**, starting with the first physical PDF page; they are not the printed page numbers, which differ because of front matter. The uploaded PDFs and extraction files remain outside the repository.

The accessible workbook is a scanned excerpt without its cover or publication year. Its printed pages run from 15 to 184, with some divider pages omitted. Review recorded 83 grammar practice targets across lessons 1–10, including repeated reinforcement of the same rule; this is not a claim of 83 new rules. Eight visual page checks resolved unclear OCR targets. The workbook's listening exercises refer to accompanying audio that was not uploaded, so their audio content has not been reviewed.

The verified content comprises **303 original course notes and 611 bilingual examples**: 151 Part 1 textbook notes, 149 Part 2 textbook notes, and 3 additional workbook notes. The workbook also reinforces 93 notes through its 83 practice targets. These counts exclude the app’s 68 general grammar notes.

## Textbook topic audit

The two verified textbook tables of contents list **129 numbered grammar topics**: 72 in Part 1 and 57 in Part 2. Counts below were transcribed independently from the contents and checked against the lesson sections. A topic may be split into more than one teaching note, and a note may have more than one reference, so topic, note, and citation counts are different quantities.

| Part 1 lesson | Numbered topics | Part 2 lesson | Numbered topics |
| ---: | ---: | ---: | ---: |
| 1 | 7 | 11 | 6 |
| 2 | 7 | 12 | 7 |
| 3 | 7 | 13 | 8 |
| 4 | 7 | 14 | 6 |
| 5 | 6 | 15 | 7 |
| 6 | 6 | 16 | 4 |
| 7 | 9 | 17 | 5 |
| 8 | 10 | 18 | 6 |
| 9 | 7 | 19 | 4 |
| 10 | 6 | 20 | 4 |

Supplementary grammar from language notes and practice sections is cited using its own section label. For example, a repeated word such as 就, 还, 得, or 了 can have several separate explanations for different constructions. These meanings remain separate study items even when their displayed Chinese patterns are identical.

## Using the course notes

Open **My vocabulary → Grammar guide**, select a book and lesson, and search Chinese patterns, English explanations, or bilingual examples. Expand a note to read its explanation and references, hear an example, or save the pattern for review. Reader and dictionary grammar links offer related taught constructions alongside the existing general grammar notes.

Book lessons and the app's six reading difficulty levels are separate classifications. Difficulty labels on grammar notes are estimates for navigation, not an official textbook level or HSK alignment. Review progress is stored on the device; the grammar knowledge itself is in the versioned application source, which can be revised and extended.

## Validation

`tests/grammar-course.test.ts` checks all eight upload statuses, the independent numbered-topic totals for every verified textbook lesson, valid source lessons/pages, note identities, grammatical versus lexical pronunciations, and retention of different meanings after saving and reloading. `tests/grammar-course.spec.ts` checks source filtering, unavailable-book messages, example search, bilingual explanations and citations, and separate reviews for identical displayed patterns.

Automated checks establish structural coverage and app behavior. They do not independently certify linguistic correctness or establish coverage of unavailable files.
