const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { _electron } = require('@playwright/test');
const sherpa = require('sherpa-onnx-node');

// Run after npm run build. Linux needs a display (e.g. DISPLAY=:98 with Xorg
// dummy or xvfb-run). HANLIN_ELECTRON_APP may select a packaged Linux executable.
(async () => {
  let desktop;
  try {
    desktop = await _electron.launch({
      executablePath: process.env.HANLIN_ELECTRON_APP || undefined,
      args: [ ...(process.env.HANLIN_ELECTRON_APP ? [] : ['.']), '--use-fake-device-for-media-stream' ],
      timeout: 30000,
    });
    const page = await desktop.firstWindow();
    await page.getByRole('heading', { name: /Chinese, one story/ }).waitFor({ timeout: 20000 });
    assert.ok(page.url().startsWith('file://'), 'Desktop must load bundled files.');
    assert.match(await page.locator('meta[http-equiv="Content-Security-Policy"]').getAttribute('content'), /default-src 'self'/, 'Built desktop must enforce its content security policy.');
    assert.deepEqual(await page.evaluate(() => Object.keys(window.hanlinSpeech).sort()), ['sendAudio', 'start', 'stop', 'stopSynthesis', 'subscribe', 'synthesize']);
    assert.equal(await page.evaluate(() => typeof window.require), 'undefined', 'Renderer must not have Node.js access.');
    const start = await page.evaluate(() => window.hanlinSpeech.start());
    assert.equal(start.ok, true, start.error);
    assert.equal(start.offline, true);
    console.log('Electron sandbox bridge and offline ASR initialization verified.');

    const permissions = await page.evaluate(async () => {
      const outcomes = {};
      try {
        const audio = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        outcomes.audio = audio.getAudioTracks().length > 0;
        audio.getTracks().forEach((track) => track.stop());
      } catch (error) { outcomes.audio = error.name; }
      try {
        const video = await navigator.mediaDevices.getUserMedia({ video: true });
        outcomes.video = 'allowed';
        video.getTracks().forEach((track) => track.stop());
      } catch (error) { outcomes.video = error.name; }
      return outcomes;
    });
    assert.equal(permissions.audio, true, `Microphone permission failed: ${JSON.stringify(permissions)}`);
    assert.equal(permissions.video, 'NotAllowedError', 'Camera permission must be denied.');
    console.log('Microphone permission allowed only for speech; camera permission denied.');

    const captured = await page.evaluate(async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      const context = new AudioContext({ sampleRate: 16000 });
      await context.audioWorklet.addModule(new URL('pcm-worklet.js', document.baseURI).href);
      const source = context.createMediaStreamSource(stream);
      const recorder = new AudioWorkletNode(context, 'hanlin-microphone');
      const mute = context.createGain(); mute.gain.value = 0;
      try {
        const capture = new Promise((resolve, reject) => {
          let blocks = 0;
          const timer = setTimeout(() => reject(new Error('Microphone worklet produced no PCM.')), 5000);
          recorder.port.onmessage = (event) => {
            if (!(event.data instanceof Float32Array)) { clearTimeout(timer); reject(new Error('Microphone data is not float PCM.')); }
            window.hanlinSpeech.sendAudio(event.data, context.sampleRate);
            if (++blocks === 2) { clearTimeout(timer); resolve({ samples: event.data.length, sampleRate: context.sampleRate }); }
          };
        });
        source.connect(recorder); recorder.connect(mute); mute.connect(context.destination);
        await context.resume();
        return await capture;
      } finally {
        recorder.port.close(); source.disconnect(); recorder.disconnect(); mute.disconnect();
        stream.getTracks().forEach((track) => track.stop());
        await context.close();
      }
    });
    assert.deepEqual(captured, { samples: 2048, sampleRate: 16000 });
    await page.evaluate(async () => { window.hanlinSpeech.stop(); await window.hanlinSpeech.start(); });
    console.log('Bundled microphone AudioWorklet captures 16 kHz PCM through the desktop bridge.');

    const fixture = path.join(__dirname, '..', 'resources', 'models', 'mandarin', 'test_wavs', '0.wav');
    assert.ok(fs.existsSync(fixture), 'Run npm run prepare:speech first.');
    const audio = sherpa.readWave(fixture);
    const samples = Buffer.from(audio.samples.buffer, audio.samples.byteOffset, audio.samples.byteLength).toString('base64');
    const transcript = await page.evaluate(({ samples, sampleRate }) => new Promise((resolve, reject) => {
      let text = '';
      const segments = new Map();
      const timer = setTimeout(() => { unsubscribe(); reject(new Error(`No final transcription received: ${text}`)); }, 15000);
      const unsubscribe = window.hanlinSpeech.subscribe((message) => {
        if (message.type === 'error') { clearTimeout(timer); unsubscribe(); reject(new Error(message.message)); }
        if (message.text) segments.set(message.segment, message.text);
        text = [...segments.values()].join('');
        if (message.final && /研究感兴趣/.test(text)) { clearTimeout(timer); unsubscribe(); resolve(text); }
      });
      const bytes = Uint8Array.from(atob(samples), (character) => character.charCodeAt(0));
      const pcm = new Float32Array(bytes.buffer);
      for (let offset = 0; offset < pcm.length; offset += 2048) window.hanlinSpeech.sendAudio(new Float32Array(pcm.subarray(offset, offset + 2048)), sampleRate);
      for (let index = 0; index < 12; index += 1) window.hanlinSpeech.sendAudio(new Float32Array(2048), sampleRate);
    }), { samples, sampleRate: audio.sampleRate });
    assert.match(transcript, /研究感兴趣/);
    console.log(`Real Mandarin PCM passed through secure Electron IPC: ${transcript}`);
    await page.evaluate(() => window.hanlinSpeech.stop());
    const denied = await page.evaluate(async () => {
      try { const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); stream.getTracks().forEach((track) => track.stop()); return 'allowed'; }
      catch (error) { return error.name; }
    });
    assert.equal(denied, 'NotAllowedError', 'Microphone must not remain available after practice stops.');
    const narrated = await page.evaluate(async () => {
      const audio = await window.hanlinSpeech.synthesize('你好，我喜欢学习中文。', 0.85);
      if (!audio.ok) throw new Error(audio.error);
      return { samples: Array.from(audio.samples), sampleRate: audio.sampleRate };
    });
    assert.equal(narrated.sampleRate, 44100);
    const reader = require('../electron/speech-engine.cjs').createRecognizer(path.join(__dirname, '..', 'resources', 'models', 'mandarin'));
    const narrationStream = reader.createStream();
    narrationStream.acceptWaveform({ samples: new Float32Array(narrated.samples), sampleRate: narrated.sampleRate });
    narrationStream.acceptWaveform({ samples: new Float32Array(narrated.sampleRate), sampleRate: narrated.sampleRate });
    narrationStream.inputFinished();
    while (reader.isReady(narrationStream)) reader.decode(narrationStream);
    assert.equal(reader.getResult(narrationStream).text, '你好我喜欢学习中文');
    const invalid = await page.evaluate(() => window.hanlinSpeech.synthesize('你'.repeat(301), 1));
    assert.equal(invalid.ok, false, 'Speech IPC must reject unbounded requests.');
    console.log('Offline synthesized Mandarin passed through Electron IPC and transcribed to the requested Chinese.');
    await page.evaluate(() => { window.speechSynthesis.getVoices = () => []; });
    await page.getByRole('button', { name: 'Read the story', exact: true }).click();
    await page.getByLabel('Listening and practice scope').selectOption('sentence');
    await page.getByRole('button', { name: 'Play Chinese narration', exact: true }).click();
    await page.getByRole('button', { name: 'Pause Chinese narration', exact: true }).waitFor({ timeout: 20000 });
    assert.equal(await page.locator('.is-spoken').count(), 0, 'Bundled voice must report sentence boundaries rather than pretend to have word timestamps.');
    await page.getByRole('button', { name: 'Pause Chinese narration', exact: true }).click();
    await page.getByRole('button', { name: 'Resume Chinese narration', exact: true }).waitFor();
    await page.getByRole('button', { name: 'Resume Chinese narration', exact: true }).click();
    await page.getByRole('button', { name: 'Stop narration', exact: true }).click();
    await page.getByRole('button', { name: 'Play Chinese narration', exact: true }).waitFor();
    await page.getByRole('button', { name: 'Play Chinese narration', exact: true }).click();
    await page.getByRole('button', { name: 'Stop narration', exact: true }).click();
    await page.getByRole('button', { name: 'Play Chinese narration', exact: true }).waitFor();
    assert.equal(await page.getByRole('alert').count(), 0, 'Canceling narration must not display a spurious error.');
    console.log('Actual reader uses the bundled voice with no OS voice and supports pause, resume, and Stop while preparing.');
    console.log('Desktop dictionary, native engine, real PCM recognition, and permission cleanup passed.');
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    await desktop?.close();
  }
})();
