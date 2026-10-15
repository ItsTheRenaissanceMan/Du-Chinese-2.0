import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const project = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const port = Number(process.env.HANLIN_DEV_PORT || 5173);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('HANLIN_DEV_PORT must be a port number between 1 and 65535.');
const devUrl = `http://127.0.0.1:${port}`;
const children = new Set();
let stopping = false;

function launch(command, args, env = process.env) {
  const child = spawn(command, args, { cwd: project, env, stdio: 'inherit', detached: process.platform !== 'win32' });
  children.add(child);
  child.on('error', error => { console.error(error.message); void shutdown(1); });
  return child;
}
function signal(child, name) {
  if (!child.pid) return;
  try { process.platform === 'win32' ? child.kill(name) : process.kill(-child.pid, name); }
  catch (error) { if (error.code !== 'ESRCH') console.error(`Could not stop a desktop subprocess: ${error.message}`); }
}
async function shutdown(code = 0) {
  if (stopping) return;
  stopping = true;
  const exiting = [...children].map(child => new Promise(resolveClose => {
    if (child.exitCode !== null || child.signalCode !== null) resolveClose();
    else child.once('close', resolveClose);
  }));
  for (const child of children) signal(child, 'SIGTERM');
  let timer;
  await Promise.race([Promise.all(exiting), new Promise(resolveTimeout => { timer = setTimeout(resolveTimeout, 5000); })]);
  clearTimeout(timer);
  for (const child of children) if (child.exitCode === null && child.signalCode === null) signal(child, 'SIGKILL');
  process.exitCode = code;
}
process.once('SIGINT', () => void shutdown(130));
process.once('SIGTERM', () => void shutdown(143));

const vite = launch(process.execPath, [resolve(project, 'node_modules/vite/bin/vite.js'), '--host', '127.0.0.1', '--port', String(port), '--strictPort']);
vite.once('close', code => { if (!stopping) { console.error('The development server stopped.'); void shutdown(code || 1); } });

try {
  const deadline = Date.now() + 30_000;
  let ready = false;
  while (!stopping && Date.now() < deadline) {
    try {
      const response = await fetch(devUrl, { signal: AbortSignal.timeout(1000) });
      if (response.ok && (await response.text()).toLowerCase().includes('<!doctype html')) { ready = true; break; }
    } catch { /* Vite is still starting. */ }
    await new Promise(resolveRetry => setTimeout(resolveRetry, 150));
  }
  if (!stopping && !ready) throw new Error(`The development server did not become ready at ${devUrl}.`);
  if (ready && !stopping) {
    const electron = launch(require('electron'), [project, ...process.argv.slice(2)], { ...process.env, HANLIN_DEV_URL: devUrl });
    electron.once('close', code => void shutdown(code || 0));
  }
} catch (error) { console.error(error.message); await shutdown(1); }
