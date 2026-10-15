import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { access, copyFile, mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const run = promisify(execFile);
const directory = fileURLToPath(new URL('../resources/models/mandarin-tts/', import.meta.url));
const name = 'vits-melo-tts-zh_en';
const source = `https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/${name}.tar.bz2`;
const archiveSha256 = 'e58351ed7149f290a54534538badd4077cdbe6fddc964b24d0bee870415d1514';
const files = {
  'date.fst': 'eb8aa079ae3cb81d8f4404992f39d61a0cb990947512b5b8d1e54d1f6980e718',
  'lexicon.txt': '7236884b02435ac5d10cf69b4be40a61b45aa676b5300f0e412f185748fee528',
  'model.onnx': 'bf30582eb1b012250a35b1a4a80e7dfbcf8485e7bb9de0d95efbbeef0e4ad86d',
  'new_heteronym.fst': 'ca14b2127e27baa571664e4bb791e143e7425f56a6bc29db08d74f97e6aa4e29',
  'number.fst': '743f402181fcfebf76cc2f0546b71fa26476e626fbe4e460fb7b4c3a7a8bd5bd',
  'phone.fst': '1ac2b6fa56b1442320c4de7db08353bab8963a2b57f365eebcdd3a2d3562f8d7',
  'tokens.txt': 'd18664a7e12bd7ea1022ddaf951e534e136815016c5a809d6b64156bffb4369d',
  'README.md': 'ae6e44dead53dfdbd5b4a77106226f3118eb910222b46cb5533a3860773fc6c7',
  'LICENSE': '88a50e5a02bbc2a5c2f084dc19da751aa97b1690f5fda76cd8005c8634d1ca70',
  'dict/stop_words.utf8': 'b788b8a939d2e2fe079abd579ea98f12f9fb84370bfd0dddd81bb9381f7ab42c',
  'dict/hmm_model.utf8': 'f17790586ac86dd048c8adffed052c4bd2b28ed0682972c1275e59040c0589a7',
  'dict/idf.utf8': 'dbd1e03d72b2263cc8d84a4304ed77677eed9e7deaf43a1a5133bbba9733b535',
  'dict/README.md': '8bcc7c2ed7dff082d9a99c09de0bfd72249bf3b5c4298a3af328da40cbd8cfd1',
  'dict/jieba.dict.utf8': '3043b77068e09c9904f27cad82f12b6ebe9dbdb5aeff3b25e45ab7f9c1122b55',
  'dict/user.dict.utf8': '495bbf49270408a1234690e1e6a97328f30a482a7a72aa769e8a12e8714b0c62',
  'dict/pos_dict/prob_start.utf8': '13623ea0e9300bdb597cb2da28770b7b385d6c0098d66e516083fb01b6bd5d96',
  'dict/pos_dict/prob_trans.utf8': 'f22363e2307408293d180c6f9f6b5cb75879d52f722f7764fa2d3d0ae2400236',
  'dict/pos_dict/prob_emit.utf8': 'c33c4cb7edf3b3a5947df7209b6e9f267eae1f21335d9e2bd2521ea07105457a',
  'dict/pos_dict/char_state_tab.utf8': '28b7be1dd7369766a51445af4d42e9a2ba4bf374c13be5bc1ca7721e27271dbb',
};
async function digest(file) {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest('hex');
}
async function verified(folder) {
  for (const [file, expected] of Object.entries(files)) {
    try { if (await digest(path.join(folder, file)) !== expected) return false; } catch { return false; }
  }
  return true;
}
if (await verified(directory)) { console.log('Bundled Mandarin TTS voice checksums match.'); process.exit(0); }
const temp = await mkdtemp(path.join(tmpdir(), 'hanlin-tts-'));
try {
  const archive = process.env.HANLIN_TTS_ARCHIVE || path.join(temp, 'voice.tar.bz2');
  if (process.env.HANLIN_TTS_ARCHIVE) await access(archive);
  else await run('curl', ['--fail', '--location', '--silent', '--show-error', '--retry', '2', '--proto', '=https', '--proto-redir', '=https', source, '--output', archive]);
  if (await digest(archive) !== archiveSha256) throw new Error('Mandarin TTS archive checksum mismatch. No files have been installed.');
  await run('tar', ['-xjf', archive, '-C', temp, '--strip-components=1', ...Object.keys(files).map((file) => `${name}/${file}`)]);
  if (!await verified(temp)) throw new Error('Mandarin TTS file checksums do not match.');
  await mkdir(directory, { recursive: true });
  for (const file of Object.keys(files)) {
    await mkdir(path.dirname(path.join(directory, file)), { recursive: true });
    await copyFile(path.join(temp, file), path.join(directory, file));
  }
  for (const license of ['CPPJIEBA-MIT.txt', 'JIEBA-MIT.txt']) {
    await copyFile(fileURLToPath(new URL(`../docs/licenses/${license}`, import.meta.url)), path.join(directory, license));
  }
  for (const previous of ['rule.far', 'speakers.txt']) await rm(path.join(directory, previous), { force: true });
  await writeFile(path.join(directory, 'source.json'), JSON.stringify({ source, archiveSha256, publisher: 'MyShell.ai / MeloTTS; ONNX conversion by k2-fsa sherpa-onnx',
    license: 'MIT (Copyright 2024 MyShell.ai; included upstream LICENSE)',
    documentation: 'https://k2-fsa.github.io/sherpa/onnx/tts/pretrained_models/vits.html#vits-melo-tts-zh-en-chinese-english-1-speaker', files }, null, 2) + '\n');
  console.log('Licensed MyShell MeloTTS Mandarin voice installed and verified.');
} finally { await rm(temp, { recursive: true, force: true }); }
