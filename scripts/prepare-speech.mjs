import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { access, copyFile, mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const root = fileURLToPath(new URL('../', import.meta.url));
const directory = path.join(root, 'resources', 'models', 'mandarin');
const archiveName = 'sherpa-onnx-streaming-zipformer-zh-14M-2023-02-23';
const source = `https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/${archiveName}.tar.bz2`;
// Pinned from the upstream HTTPS release asset. Verify before extraction and on reuse.
const archiveSha256 = '2cbd71b640d9c37d3784f29367333a4577b0398b62e9deeed418170b081cba8b';
const hashes = {
  'encoder-epoch-99-avg-1.int8.onnx': '1c556ea57cec304e55ec4b72e52c1cc098bb01476ed7d90f3de939fe126487b1',
  'decoder-epoch-99-avg-1.int8.onnx': '22f123bb8cba9b38974b3df18a3f45e7081f4985ebb2e075d9f21f618c468bbf',
  'joiner-epoch-99-avg-1.int8.onnx': 'a7cf9d82757bdcf786059454495a9ca95e4bd7347f72473fc08d794475c36169',
  'tokens.txt': '8b294db9045d6e5f94647f4c1eec1af4da143a75053c399611444b378ff966ac',
  'test_wavs/0.wav': '668bf8df51a10027b84d5d8816a1ce11ae93545538dc05cfe2aa6811d399c250',
};

async function sha256(file) {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest('hex');
}
async function verified(directory) {
  for (const [file, expected] of Object.entries(hashes)) {
    try { if (await sha256(path.join(directory, file)) !== expected) return false; }
    catch { return false; }
  }
  return true;
}

if (await verified(directory)) {
  console.log('Offline Mandarin model is installed and all checksums match.');
  process.exit(0);
}
const temp = await mkdtemp(path.join(tmpdir(), 'hanlin-speech-'));
try {
  const archive = process.env.HANLIN_SPEECH_ARCHIVE || path.join(temp, 'model.tar.bz2');
  if (process.env.HANLIN_SPEECH_ARCHIVE) await access(archive);
  else {
    console.log('Downloading the Apache-2.0 Mandarin recognition model from the upstream GitHub release (71 MB)…');
    await run('curl', ['--fail', '--location', '--show-error', '--silent', '--retry', '2', '--proto', '=https', '--proto-redir', '=https', source, '--output', archive], { maxBuffer: 1024 * 1024 });
  }
  if (await sha256(archive) !== archiveSha256) throw new Error('Mandarin model archive checksum mismatch. No model files have been installed.');
  const extracted = path.join(temp, 'extracted');
  await mkdir(extracted);
  const files = [...Object.keys(hashes), 'README.md'];
  await run('tar', ['-xjf', archive, '-C', extracted, '--strip-components=1', ...files.map((file) => `${archiveName}/${file}`)], { maxBuffer: 1024 * 1024 });
  if (!await verified(extracted)) throw new Error('Extracted Mandarin model checksum mismatch. No model files have been installed.');
  await mkdir(directory, { recursive: true });
  for (const file of files) {
    await mkdir(path.dirname(path.join(directory, file)), { recursive: true });
    await copyFile(path.join(extracted, file), path.join(directory, file));
  }
  await writeFile(path.join(directory, 'source.json'), JSON.stringify({ source, archiveSha256, license: 'Apache-2.0', files: hashes }, null, 2) + '\n');
  console.log('Offline Mandarin model installed and verified in resources/models/mandarin.');
} finally {
  await rm(temp, { recursive: true, force: true });
}
