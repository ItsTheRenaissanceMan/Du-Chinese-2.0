const { parentPort, workerData } = require('node:worker_threads');
const { createRecognizer } = require('./speech-engine.cjs');

let recognizer;
let stream;
let segment = 0;
let lastText = '';
let sessionId = 0;

function decode() {
  while (recognizer.isReady(stream)) recognizer.decode(stream);
  const text = recognizer.getResult(stream).text || '';
  const endpoint = recognizer.isEndpoint(stream);
  if (text !== lastText || endpoint) {
    parentPort.postMessage({ type: 'transcript', text, segment, final: endpoint, sessionId });
    lastText = text;
  }
  if (endpoint) {
    recognizer.reset(stream);
    segment += 1;
    lastText = '';
  }
}

try {
  recognizer = createRecognizer(workerData.modelDirectory, workerData.nativeDirectory);
  parentPort.postMessage({ type: 'ready' });
} catch (error) {
  parentPort.postMessage({ type: 'error', message: error.message });
}

parentPort.on('message', (message) => {
  if (!recognizer) return;
  try {
    if (message.type === 'start') {
      sessionId = message.sessionId;
      stream = recognizer.createStream();
      segment = 0;
      lastText = '';
    } else if (message.type === 'pcm' && stream) {
      stream.acceptWaveform({ samples: message.samples, sampleRate: message.sampleRate });
      decode();
    } else if (message.type === 'stop') {
      stream = undefined;
    }
  } catch (error) {
    stream = undefined;
    parentPort.postMessage({ type: 'error', message: error.message, sessionId });
  }
});
