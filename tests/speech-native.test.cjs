const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');
const { test } = require('node:test');
const { createRecognizer } = require('../electron/speech-engine.cjs');
const { createTts } = require('../electron/tts-engine.cjs');

test('offline Mandarin model recognizes real Chinese speech', { timeout: 30000 }, () => {
  const directory = path.join(__dirname, '..', 'resources', 'models', 'mandarin');
  assert.ok(fs.existsSync(path.join(directory, 'tokens.txt')), 'Run npm run prepare:speech before this test.');
  const sherpa = require('sherpa-onnx-node');
  const audio = sherpa.readWave(path.join(directory, 'test_wavs', '0.wav'));
  const recognizer = createRecognizer(directory);
  const stream = recognizer.createStream();
  stream.acceptWaveform({ samples: audio.samples, sampleRate: audio.sampleRate });
  stream.acceptWaveform({ samples: new Float32Array(Math.floor(audio.sampleRate * 0.5)), sampleRate: audio.sampleRate });
  stream.inputFinished();
  while (recognizer.isReady(stream)) recognizer.decode(stream);
  const text = recognizer.getResult(stream).text;
  // The upstream real audio fixture discusses an introduction and research interests.
  assert.match(text, /做了介绍/, `Unexpected Mandarin transcription: ${text}`);
  assert.match(text, /研究感兴趣/, `Unexpected Mandarin transcription: ${text}`);
  console.log(`Verified real Mandarin audio: ${text}`);
});

test('missing models produce actionable configuration errors', () => {
  assert.throws(() => createRecognizer(path.join(__dirname, 'missing-model')), /npm run prepare:speech/);
});

test('explicit bundled N-API loading uses the same verified recognition interface', { timeout: 30000 }, () => {
  const directory = path.join(__dirname, '..', 'resources', 'models', 'mandarin');
  const platform = process.platform === 'win32' ? 'win' : process.platform;
  const nativeDirectory = path.dirname(require.resolve(`sherpa-onnx-${platform}-${process.arch}/sherpa-onnx.node`));
  const recognizer = createRecognizer(directory, nativeDirectory);
  const sherpa = require('sherpa-onnx-node');
  const audio = sherpa.readWave(path.join(directory, 'test_wavs', '0.wav'));
  const stream = recognizer.createStream();
  stream.acceptWaveform({ samples: audio.samples, sampleRate: audio.sampleRate });
  stream.acceptWaveform({ samples: new Float32Array(Math.floor(audio.sampleRate * 0.5)), sampleRate: audio.sampleRate });
  stream.inputFinished();
  while (recognizer.isReady(stream)) recognizer.decode(stream);
  assert.match(recognizer.getResult(stream).text, /研究感兴趣/);
});

test('bundled Mandarin narration produces speech recognizable as the requested Chinese', { timeout: 30000 }, () => {
  const directory = path.join(__dirname, '..', 'resources', 'models', 'mandarin-tts');
  const platform = process.platform === 'win32' ? 'win' : process.platform;
  const nativeDirectory = path.dirname(require.resolve(`sherpa-onnx-${platform}-${process.arch}/sherpa-onnx.node`));
  const voice = createTts(directory, nativeDirectory);
  const audio = voice.generate({ text: '你好，我喜欢学习中文。', sid: 0, speed: 0.85, enableExternalBuffer: false });
  assert.equal(audio.sampleRate, 44100);
  assert.ok(audio.samples.length > audio.sampleRate, 'Narration must contain audible audio, not an empty placeholder.');
  assert.ok(audio.samples.some((sample) => Math.abs(sample) > 0.1), 'Narration must not be silence.');
  const recognizer = createRecognizer(path.join(__dirname, '..', 'resources', 'models', 'mandarin'));
  const stream = recognizer.createStream();
  stream.acceptWaveform(audio);
  stream.acceptWaveform({ samples: new Float32Array(audio.sampleRate), sampleRate: audio.sampleRate });
  stream.inputFinished();
  while (recognizer.isReady(stream)) recognizer.decode(stream);
  assert.equal(recognizer.getResult(stream).text, '你好我喜欢学习中文');
});
