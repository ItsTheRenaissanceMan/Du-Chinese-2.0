import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { access, copyFile, mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const directory = fileURLToPath(new URL('../resources/native/win-x64/', import.meta.url));
const source = 'https://registry.npmjs.org/sherpa-onnx-win-x64/-/sherpa-onnx-win-x64-1.13.8.tgz';
// npm's published strong integrity value, pinned for reproducible packaging.
const integrity = 'oZF1c9VPOKtMwn83Bboc5XSWL+76BRoyB3eUuVnCknBKxwSULZU2Foia9VHWzU+n4I12rPsP6z6H9Rp1hD9o8g==';
const files = {
  'onnxruntime.dll': '7f66f939a881baf4f46a2216496798edf4a1429878b646d12674aa62f27d8a25',
  'onnxruntime_providers_shared.dll': '551d0e1fe4c227d8542314ba718d52f4379e0c7bfe729a37c59833a884e27b4d',
  'sherpa-onnx-c-api.dll': 'b0801cd8eeead83213c60b92cc004de6f3ac4cd4a9ac7c388c16b97c590f1e99',
  'sherpa-onnx-cxx-api.dll': 'e709c46a63e4b84f3862aa0c843a804040b42ea054a398b420142f6c8e58ec77',
  'sherpa-onnx.node': 'f5fd562bdc4bea167eee8ac981c6acd88c05cc8d2792b67d8951566818e293ca',
};
async function digest(file, algorithm = 'sha256', format = 'hex') {
  const hash = createHash(algorithm);
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest(format);
}
async function verified(folder) {
  for (const [file, expected] of Object.entries(files)) {
    try { if (await digest(path.join(folder, file)) !== expected) return false; } catch { return false; }
  }
  return true;
}
if (await verified(directory)) {
  console.log('Bundled Windows speech engine verified.');
  process.exit(0);
}
const temp = await mkdtemp(path.join(tmpdir(), 'hanlin-win-speech-'));
try {
  const archive = process.env.HANLIN_WINDOWS_SPEECH_ARCHIVE || path.join(temp, 'native.tgz');
  if (process.env.HANLIN_WINDOWS_SPEECH_ARCHIVE) await access(archive);
  else await run('curl', ['--fail', '--location', '--show-error', '--silent', '--retry', '2', '--proto', '=https', '--proto-redir', '=https', source, '--output', archive]);
  if (await digest(archive, 'sha512', 'base64') !== integrity) throw new Error('Windows native package integrity mismatch. No files have been installed.');
  const selected = [...Object.keys(files), 'package.json', 'README.md'];
  await run('tar', ['-xzf', archive, '-C', temp, '--strip-components=1', ...selected.map((file) => `package/${file}`)]);
  if (!await verified(temp)) throw new Error('Windows native binary checksums do not match. No files have been installed.');
  await mkdir(directory, { recursive: true });
  for (const file of selected) await copyFile(path.join(temp, file), path.join(directory, file));
  await writeFile(path.join(directory, 'source.json'), JSON.stringify({ source, integrity: `sha512-${integrity}`, files }, null, 2) + '\n');
  console.log('Windows x64 speech native libraries installed and verified.');
} finally {
  await rm(temp, { recursive: true, force: true });
}
