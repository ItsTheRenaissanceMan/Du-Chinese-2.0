const { parentPort, workerData } = require('node:worker_threads');
const { createTts } = require('./tts-engine.cjs');
let voice;
parentPort.on('message', (message) => {
  try {
    voice ||= createTts(workerData.modelDirectory, workerData.nativeDirectory);
    // Electron's V8 memory cage disallows native external ArrayBuffers. Ask the
    // addon to allocate a normal JS buffer, preserving the renderer sandbox.
    const result = voice.generate({ text: message.text, sid: 0, speed: message.rate, enableExternalBuffer: false });
    // Copy once into a transferable buffer to cross the worker boundary.
    const samples = new Float32Array(result.samples);
    parentPort.postMessage({ id: message.id, ok: true, samples, sampleRate: result.sampleRate }, [samples.buffer]);
  } catch (error) {
    parentPort.postMessage({ id: message.id, ok: false, error: error.message });
  }
});
