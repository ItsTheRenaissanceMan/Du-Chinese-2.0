const fs = require('node:fs');
const path = require('node:path');

function createTts(modelDirectory, nativeDirectory) {
  const required = ['model.onnx', 'tokens.txt', 'lexicon.txt', 'date.fst', 'phone.fst', 'number.fst', 'new_heteronym.fst', 'dict/jieba.dict.utf8', 'LICENSE'];
  for (const file of required) if (!fs.existsSync(path.join(modelDirectory, file))) {
    throw new Error('The bundled Mandarin voice is missing. Run npm run prepare:tts and rebuild Hanlin.');
  }
  const config = {
    model: {
      vits: { model: path.join(modelDirectory, 'model.onnx'), tokens: path.join(modelDirectory, 'tokens.txt'), lexicon: path.join(modelDirectory, 'lexicon.txt'), dictDir: path.join(modelDirectory, 'dict') },
      numThreads: 2,
      provider: 'cpu',
      debug: false,
    },
    maxNumSentences: 1,
    ruleFsts: ['date.fst', 'phone.fst', 'number.fst', 'new_heteronym.fst'].map((file) => path.join(modelDirectory, file)).join(','),
  };
  if (!nativeDirectory) {
    const sherpa = require('sherpa-onnx-node');
    return new sherpa.OfflineTts(config);
  }
  const addon = require(path.join(nativeDirectory, 'sherpa-onnx.node'));
  const handle = addon.createOfflineTts(config);
  return { generate(options) { return addon.offlineTtsGenerate(handle, options); } };
}
module.exports = { createTts };
