# Testing Hanlin

From the project folder:

```sh
npm ci
npm run prepare:data
npm run prepare:speech
npm run prepare:tts
npm run typecheck
npm test
npm run test:e2e
```

The browser tests start Vite automatically and use `/usr/bin/chromium` in the cloud environment. They do not download a browser. On another machine, set `PLAYWRIGHT_CHROMIUM_PATH` to an installed Chromium executable, or install the Playwright browser separately with `npx playwright install chromium`.

Browser tests also cover Integrated Chinese book/lesson filters, honest availability for oversized PDFs, example search, course citations, separately saved uses of the same pattern, and related textbook constructions in the reader. Popup scrolling and saved-word actions remain usable with longer grammar explanations.

Browser tests cover all six reading-level filters, story search, sentence selection and English translation, Simplified/Traditional switching during reading, pinyin switching, hover definitions, saving and restoring vocabulary, English/Chinese/pinyin dictionary queries, grammar-pattern persistence, flashcard review scheduling, dark-mode persistence, and a narrow viewport. Each test gets an isolated browser profile. Failure screenshots and traces are saved under `test-results/`; the HTML report is under `playwright-report/`.

These browser tests do not simulate a learner's pronunciation or establish microphone recognition accuracy. The native speech smoke test and matcher unit tests cover the recognition pipeline separately. A desktop hardware check still requires working speakers or headphones and a microphone: listen to a sentence, start Read aloud, say each highlighted word, confirm that a wrong or absent word does not advance it, and confirm that each recognized target advances once.

To run the desktop app against the development server:

```sh
npm run desktop:dev
```

The launcher waits for Vite's HTML before opening Electron and stops both processes when the window closes or the launcher receives Ctrl+C. Set `HANLIN_DEV_PORT` to use another local port. The launcher keeps Electron's normal sandbox settings.

Validated in the cloud environment on 2026-10-14: 25 Vitest checks, four native speech tests, and all 11 browser workflows passed. Actual sandboxed Electron also passed the dictionary, microphone, recognition, bundled narration, and cancellation smoke checks described below. The development launcher’s startup order and cleanup were verified separately.

Run browser suites together with one `npm run test:e2e` command. Concurrent Playwright commands can delete one another's default trace directories or stop a shared development server; use distinct output directories and independent server ports when intentionally running separate processes.

The actual sandboxed Electron app was also tested on a Linux Xorg display: the bundled dictionary loads from file URLs, renderer Node access is absent, real Mandarin PCM is recognized through secure IPC, the microphone AudioWorklet runs, camera access is denied, and microphone permission is withdrawn after practice stops. Bundled Mandarin narration was synthesized and transcribed by the recognition engine. This does not establish operation on physical Windows hardware.

For the actual Electron smoke after a build, run `npm run test:desktop` with a working display. In this cloud image, the existing dummy Xorg driver can supply a display; its startup is documented in the saved environment start instructions. The smoke keeps the Electron sandbox enabled.

Final delivery validation: the clean cloud installer completed successfully. The Windows 2.0.0 portable package passed NSIS payload integrity and matched its inspected ASAR; all 29 Windows model/native files matched their recorded hashes. The packaged Linux executable passed the same actual Electron smoke with sandboxing enabled. Windows hardware execution was not performed.

Grammar update validation on 2026-10-15: TypeScript and production build passed; 32 Vitest checks, four native speech tests, and all 16 browser workflows passed. This includes independent per-lesson coverage counts for all 129 numbered textbook grammar topics, all 83 workbook target mappings, grammatical versus lexical readings, and saved-pattern restoration. Common dictionary senses are selected ahead of marked variants and surnames. Five oversized uploads remain unverified as documented in [grammar coverage](GRAMMAR_COVERAGE.md). The final 2.1.0 renderer also passed the actual sandboxed Electron speech and permissions smoke.
