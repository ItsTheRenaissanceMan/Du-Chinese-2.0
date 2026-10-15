const fs = require('node:fs');
const path = require('node:path');

const MODEL_FILES = {
  encoder: 'encoder-epoch-99-avg-1.int8.onnx',
  decoder: 'decoder-epoch-99-avg-1.int8.onnx',
  joiner: 'joiner-epoch-99-avg-1.int8.onnx',
  tokens: 'tokens.txt',
};

function createRecognizer(modelDirectory, nativeDirectory) {
  for (const file of Object.values(MODEL_FILES)) {
    if (!fs.existsSync(path.join(modelDirectory, file))) {
      throw new Error('The offline Mandarin model is missing. Run npm run prepare:speech, then rebuild the desktop app.');
    }
  }
  const config = {
    featConfig: { sampleRate: 16000, featureDim: 80 },
    modelConfig: {
      transducer: {
        encoder: path.join(modelDirectory, MODEL_FILES.encoder),
        decoder: path.join(modelDirectory, MODEL_FILES.decoder),
        joiner: path.join(modelDirectory, MODEL_FILES.joiner),
      },
      tokens: path.join(modelDirectory, MODEL_FILES.tokens),
      numThreads: 2,
      provider: 'cpu',
      debug: 0,
      modelType: 'zipformer',
    },
    decodingMethod: 'greedy_search',
    enableEndpoint: true,
    rule1MinTrailingSilence: 1.5,
    rule2MinTrailingSilence: 0.65,
    rule3MinUtteranceLength: 20,
  };
  if (!nativeDirectory) {
    const sherpa = require('sherpa-onnx-node');
    return new sherpa.OnlineRecognizer(config);
  }
  // Load a deliberately bundled Windows N-API module. Cross-platform builds do
  // not reliably preserve another platform's optional npm dependency.
  const addonPath = path.join(nativeDirectory, 'sherpa-onnx.node');
  if (!fs.existsSync(addonPath)) throw new Error('The Windows speech engine is missing. Run npm run prepare:windows-speech and rebuild the desktop app.');
  const addon = require(addonPath);
  const recognizer = addon.createOnlineRecognizer(config);
  return {
    createStream() {
      const handle = addon.createOnlineStream(recognizer);
      return {
        handle,
        acceptWaveform(waveform) { addon.acceptWaveformOnline(handle, waveform); },
        inputFinished() { addon.inputFinished(handle); },
      };
    },
    isReady(stream) { return addon.isOnlineStreamReady(recognizer, stream.handle); },
    decode(stream) { addon.decodeOnlineStream(recognizer, stream.handle); },
    getResult(stream) { return JSON.parse(addon.getOnlineStreamResultAsJson(recognizer, stream.handle)); },
    isEndpoint(stream) { return addon.isEndpoint(recognizer, stream.handle); },
    reset(stream) { addon.reset(recognizer, stream.handle); },
  };
}

module.exports = { createRecognizer, MODEL_FILES };
