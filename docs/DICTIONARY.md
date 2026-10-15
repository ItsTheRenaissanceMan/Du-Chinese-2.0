# Dictionary and language data

Hanlin bundles **CC-CEDICT**, a community Chinese–English dictionary, for offline lookup and search. The pinned `cedict-json@1.3.20251213` distribution contains **124,188 entries and 120,448 distinct simplified headwords**. Different pronunciations and senses are retained.

- Dictionary author: **CC-CEDICT contributors**.
- Original project: https://www.mdbg.net/chinese/dictionary?page=cc-cedict
- JSON distribution by **Matt Tingen**: https://github.com/matt-tingen/cedict-json
- Data license: **Creative Commons Attribution–ShareAlike 4.0 International**, https://creativecommons.org/licenses/by-sa/4.0/
- Full license: `public/data/CEDICT-LICENSE.txt`; bundled with the app.
- Source hash, entry count, and modifications: `public/data/cedict-meta.json`; bundled with the app.

`npm run prepare:data` reads the integrity-checked, lockfile-pinned npm package and writes `public/data/cedict.json`. It renames `english` to `definitions`, converts numbered pinyin to tone marks, and adds approximate reading-difficulty bands. These modifications to the dictionary data are distributed under CC BY-SA 4.0. The application source and the original grammar explanations have their separate project license. No Du Chinese dictionary or lesson content is copied.

Difficulty colors are **estimates**, not official HSK classifications. A manually selected group of common vocabulary receives bands 1–4. Unmapped short words usually receive band 5; longer expressions and specialized, archaic, or variant entries usually receive band 6. These estimates help identify less familiar reading vocabulary but are not validated proficiency assessments.

Pinyin comes from **pinyin-pro** (MIT), with whole-sentence context used for common polyphonic characters and the tone changes of 一 and 不. Automatic pronunciation can still be ambiguous, especially in names and unusual literary phrases. **OpenCC / opencc-js** (MIT) performs phrase-aware simplified/traditional conversion. These tools run locally. The source story text is preserved.

Original grammar notes explain practical uses of common particles and constructions, with original Chinese examples and English translations. A note is linked to an exact grammatical word rather than to a character inside an unrelated lexical word. Some words have multiple grammatical and lexical uses; the reader should use the sentence context to choose the appropriate explanation.
