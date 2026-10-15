# Hanlin · Chinese, one story at a time

An independent Windows desktop Chinese reader with an offline dictionary, original graded parallel texts, and microphone-guided reading practice. Built with React, TypeScript, Electron, OpenCC, CC-CEDICT, and sherpa-onnx.

## Use the desktop app

Download the [Windows portable app](release/Hanlin-2.1.0-windows-x64-portable.exe) or [editable source ZIP](release/Hanlin-2.1.0-source.zip) from the checked-in [release folder](release/README.md). The executable uses Git LFS because it exceeds GitHub's normal file limit. On its GitHub file page, choose **Download raw file**. For a Git clone, install Git LFS and run `git lfs pull` to retrieve the executable. The [SHA-256 checksums](release/SHA256SUMS.txt) verify both downloads.

Open `release/Hanlin-2.1.0-windows-x64-portable.exe` on Windows 10 or later (64 bit). The portable launcher extracts its application to a temporary directory when opened. It needs no Node installation or development server. Progress is stored in Electron's persistent per-user application data, not in the temporary extraction directory. Export progress from Settings before moving to another computer or reinstalling your operating system.

The reader lets you:

- Switch Simplified/Traditional Chinese and per-character pinyin directly above the story.
- Hover or focus words to see meanings, pronunciation, difficulty, and original grammar explanations.
- Click a sentence to highlight it and reveal its English translation.
- Save vocabulary or grammar patterns for spaced review, with real due dates.
- Listen to Mandarin and practice reading aloud. The highlighted target remains until recognition finds that word; silence or unrelated speech never advances it. Whole-story practice continues across sentences.
- Search 124,188 dictionary entries by Simplified Chinese, Traditional Chinese, English, or pinyin (including tone numbers).
- Use dark mode, adjust reading size/speech speed, and export/restore progress backups.

No sign-in, API key, or server is needed for the desktop reader or Mandarin recognition. Recognition runs locally. Narration uses a local system Mandarin voice when available, or the bundled MIT-licensed MeloTTS Mandarin voice. No system voice pack is required for desktop listening. Browser development mode uses Web Speech when available and clearly states that its provider may process audio remotely.

## What the library contains

There are **1,200 complete bilingual readings, 200 at each of six estimated difficulty levels**. These comprise **30 individually written original stories** and **1,170 clearly labeled practice variations**. The variations use 195 original topic and plot seeds, with one guided reading per topic at each of six graded levels. Topic facts and sentence structures recur; this is not a claim of 1,200 independent editorial stories. Themes include everyday life, culture, history, education, and fiction. The featured Peach Garden story is an original retelling of the public-domain legend, with an original English translation.

Word colors and reading levels are study estimates, not validated or official HSK classifications. Automatic segmentation and pinyin can be ambiguous in names and literary phrasing. Recognition checks transcribed words, not tone quality, fluency, or a pronunciation score. A recognized word is not proof of perfect pronunciation.

## Integrated Chinese grammar

The grammar guide includes 303 original course notes and 611 bilingual examples, with book, lesson, and PDF page references. These cover all 129 numbered grammar topics in the two accessible Level 1 textbooks (lessons 1–20), supplementary teaching points, and 83 mapped practice targets from the supplied Level 1 Part 1 workbook excerpt. Open **My vocabulary → Grammar guide** to filter by book and lesson, search explanations and examples, or save different uses of the same pattern separately. Related course notes are available while reading.

Five of the eight uploaded PDFs exceeded the 32 MiB transfer limit and have not been read or incorporated. The app marks those books as unavailable; smaller or split copies are needed to complete their coverage. See the [source coverage and limitations](docs/GRAMMAR_COVERAGE.md). The app retains verified teaching notes in its source code, rather than bundling the books or training an AI model on them.

## Develop and build

Use a current Node.js 24 LTS installation, npm, and `curl`/`tar` for the verified speech-model installers. On Windows, these utilities are included in current Windows releases. Source preparation downloads public, pinned artifacts through HTTPS and verifies their integrity. The dictionary's JSON package declares Node 22, but the data-only exporter was verified under Node 24.

```sh
npm ci
npm run install:electron
npm run prepare:data
npm run prepare:speech
npm run prepare:tts
npm run build
npm run desktop
```

For live editing, use `npm run desktop:dev`. `npm run dev` starts the browser version separately. Linux Electron needs a display and standard GTK/NSS dependencies. See [testing instructions](docs/TESTING.md) and [dictionary attribution](docs/DICTIONARY.md).

Build the Windows portable executable from Windows or Linux:

```sh
npm run package:win
```

The Windows speech engine is staged explicitly, so a build on Linux still includes the Windows N-API module and its DLLs. Production rendering uses a sandboxed, isolated Electron window with a limited IPC bridge and Content Security Policy. Microphone permissions are limited to active practice in the app; camera access is denied. Generated models and dictionaries stay outside source control and are recreated by the preparation scripts.

The story corpus is already checked in. `node scripts/generate-stories.mjs` reproducibly regenerates its practice variations; this is content development, not a step needed during ordinary environment installation.

## Source recovery and project status

This is a **new implementation**, not recovered source from the uploaded `Hanlin-1.0.0-windows-x64-portable.exe`. That upload exceeded the attached-file tool's 32 MiB transfer limit, so its contents could not be inspected. The selected GitHub repository had no commits or source files. The Du Chinese reference URLs were blocked by the cloud network policy; implementation follows the requested interaction requirements, with original design and content. It does not copy Du Chinese's proprietary lessons, audio, visual assets, or code.

If the original executable is Electron-based, its extracted application might contain `resources/app.asar`; extracting that archive can recover bundled JavaScript and packaged assets. Original TypeScript/component sources are recoverable only if included or exposed by source maps. Native executables need a different process. There is no evidence yet establishing the uploaded executable's framework. An extracted archive or smaller set of resources would allow that separate recovery to be investigated.

The complete editable replacement source is saved in this repository and provided as a source ZIP. Keep a copy outside the portable application. The source is published at [ItsTheRenaissanceMan/Du-Chinese-2.0](https://github.com/ItsTheRenaissanceMan/Du-Chinese-2.0).

To create an editable source backup on a machine with Python installed, run `python scripts/package-source.py`. The ZIP includes the app source, dictionary, tests, licenses, and pinned preparation scripts. Installed dependencies and speech-model binaries are excluded; the released executable already includes them, and the scripts recreate them from integrity-checked public releases.
