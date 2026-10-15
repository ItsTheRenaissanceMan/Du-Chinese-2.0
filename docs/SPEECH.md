# Speech in Hanlin

The desktop app includes both Mandarin recognition and a Mandarin speaking voice. It needs no speech API key, account, or audio upload. Reading practice and bundled narration run on this computer. The first narration or recognition request loads its model, so preparation may take a few seconds.

## Narration

An installed **local** Mandarin operating-system voice is preferred when available. If the operating system has no local Mandarin voice, Hanlin uses its bundled MyShell MeloTTS voice. The bundled model produces real 44.1 kHz audio and supports pause, resume, cancellation, reading speed, and both Chinese scripts. It synthesizes and preloads bounded sentence chunks. Its boundary events identify actual sentence starts; this model does not provide word timestamps. A device voice may provide word boundaries.

In the browser development version, narration uses browser speech synthesis. A Mandarin voice must be available there; some browser voices require an Internet connection. If no Mandarin voice is available, the interface displays an actionable error. The bundled native voice is a desktop capability.

## Read aloud practice

Mandarin recognition uses a small sherpa-onnx streaming Zipformer model. Microphone audio is captured as mono float PCM by a local AudioWorklet and sent through a narrow Electron bridge. The native model runs in a worker thread, separate from the window. Only the application's own main frame can access speech IPC. The desktop grants microphone access while practice is active and denies camera access.

The highlighted word advances only when the recognizer transcribes that expected word in sequence. Incorrect words and silence leave it highlighted. Punctuation is skipped, repeated words require distinct recognized occurrences, and Simplified/Traditional Chinese is normalized through OpenCC. Session identifiers prevent late transcripts from an earlier practice session from advancing a new one. Stopping practice releases microphone tracks and audio resources.

This is transcription practice, not a pronunciation or tone score. Speech recognition may confuse homophones or miss isolated words. Pronounce the current word again if it remains highlighted. In a browser that supports Web Speech recognition, Hanlin can instead use the browser's recognition service and shows that audio may be sent to its provider. Unsupported browsers display the desktop requirement explicitly.

## Sources, licenses, and integrity

- **Recognition:** `sherpa-onnx-streaming-zipformer-zh-14M-2023-02-23`, from the official [k2-fsa release](https://github.com/k2-fsa/sherpa-onnx/releases/tag/asr-models). Its upstream model README declares Apache-2.0. The int8 encoder, decoder, joiner, tokens, and a small real-speech test fixture are preserved.
- **Narration:** `vits-melo-tts-zh_en`, from the official [k2-fsa release](https://github.com/k2-fsa/sherpa-onnx/releases/tag/tts-models), converted from [MyShell MeloTTS](https://github.com/myshell-ai/MeloTTS). The actual release archive contains its MIT license, copyright 2024 MyShell.ai. The original README and LICENSE are bundled with the model, along with MIT notices for the Jieba/CppJieba dictionaries. Hanlin uses the real `model.onnx`; the archive's `model.int8.onnx` is a Git LFS pointer and is deliberately excluded.
- **Native runtime:** sherpa-onnx 1.13.8, Apache-2.0. Windows x64 binaries are staged from its official npm platform package and included with their DLL dependencies.

Setup scripts keep TLS verification enabled, pin release-archive SHA-256 or npm SHA-512 integrity, and verify each runtime file's checksum before installation and on reuse. Models live in ignored `resources/models/` folders and are copied into desktop resources, rather than into the web application's public assets. Windows native modules live in ignored `resources/native/win-x64` and are loaded explicitly to support Linux-to-Windows packaging.

## Preparing and validating

Run `npm run prepare:speech`, `npm run prepare:tts`, and, for Windows packages, `npm run prepare:windows-speech`. These scripts need HTTPS access to GitHub's release download hosts and npm's registry, plus `curl` and `tar`. Released desktop packages already include the models and need no first-run download.

`npm run test:speech` loads the real native models, transcribes upstream recorded Mandarin, checks the explicit native-module loading path, and synthesizes Chinese narration that the recognition model transcribes back to the requested words. Unit tests cover ordered matching, repeated words, silence, incorrect words, script normalization, and bounded sentence offsets.

After building, `node tests/speech-desktop-smoke.cjs` runs actual Electron, checks the bundled dictionary and sandbox bridge, captures microphone PCM through the bundled AudioWorklet using a fake test device, sends real recorded speech through IPC, verifies microphone/camera restrictions and cleanup, and validates native narration through IPC. Linux needs an X display or Xvfb; `HANLIN_ELECTRON_APP` can select a packaged executable. No sandbox-disabling flags are needed for this check.
