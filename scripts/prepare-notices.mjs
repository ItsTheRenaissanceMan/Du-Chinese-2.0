import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const sources = [
  ['React', 'node_modules/react/LICENSE'],
  ['React DOM', 'node_modules/react-dom/LICENSE'],
  ['Lucide icons, including Feather derivatives', 'node_modules/lucide-react/LICENSE'],
  ['pinyin-pro', 'node_modules/pinyin-pro/LICENSE'],
  ['OpenCC JavaScript', 'node_modules/opencc-js/LICENSE'],
  ['OpenCC dictionaries and other dependencies', 'node_modules/opencc-js/THIRD_PARTY_LICENSES.md'],
  ['CC-CEDICT: modified dictionary data retains CC BY-SA 4.0', 'public/data/CEDICT-LICENSE.txt'],
  ['Bundled MyShell MeloTTS voice', 'resources/models/mandarin-tts/LICENSE'],
  ['CppJieba', 'docs/licenses/CPPJIEBA-MIT.txt'],
  ['Jieba', 'docs/licenses/JIEBA-MIT.txt'],
  ['sherpa-onnx native recognition and synthesis engine', 'docs/licenses/SHERPA-APACHE-2.0.txt'],
];
const sections = await Promise.all(sources.map(async ([label, file]) => `${label}\n${'='.repeat(label.length)}\n${await readFile(new URL(file, new URL('../', import.meta.url)), 'utf8')}`));
await writeFile(`${root}public/THIRD_PARTY_LICENSES.txt`, `Hanlin third-party notices\n\nElectron and Chromium licenses are distributed alongside the desktop executable.\nThe sherpa-onnx recognition engine and original Zipformer model retain Apache-2.0 licenses; model provenance is bundled in models/mandarin/source.json and README.md.\nMeloTTS voice provenance and the upstream MIT license are bundled in models/mandarin-tts.\n\n${sections.join('\n\n')}`);
console.log('Prepared bundled third-party notices.');
