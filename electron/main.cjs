const { app, BrowserWindow, ipcMain, session } = require('electron');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { Worker } = require('node:worker_threads');

let mainWindow;
let speechWorker;
let workerReady;
let speechActive = false;
let speechSession = 0;
let activeFrame;
let ttsWorker;
let nextTtsRequest = 0;
const ttsRequests = new Map();

const entryUrl = () => app.isPackaged
  ? pathToFileURL(path.join(__dirname, '..', 'dist', 'index.html')).href
  : (process.env.HANLIN_DEV_URL ? new URL(process.env.HANLIN_DEV_URL).href : pathToFileURL(path.join(__dirname, '..', 'dist', 'index.html')).href);

function isOwnFrame(event) {
  return mainWindow && !mainWindow.isDestroyed()
    && event.sender === mainWindow.webContents
    && event.senderFrame === mainWindow.webContents.mainFrame
    && event.senderFrame.url.split('#')[0] === entryUrl().split('#')[0];
}

function stopRecognition() {
  speechActive = false;
  activeFrame = undefined;
  speechWorker?.postMessage({ type: 'stop' });
}

function stopSynthesis() {
  if (!ttsRequests.size) return;
  for (const resolve of ttsRequests.values()) resolve({ ok: false, error: 'Speech playback was canceled.' });
  ttsRequests.clear();
  const worker = ttsWorker;
  ttsWorker = undefined;
  void worker?.terminate();
}

function getTtsWorker() {
  if (ttsWorker) return ttsWorker;
  const modelDirectory = app.isPackaged
    ? path.join(process.resourcesPath, 'models', 'mandarin-tts')
    : path.join(__dirname, '..', 'resources', 'models', 'mandarin-tts');
  const nativeDirectory = process.platform === 'win32'
    ? (app.isPackaged ? path.join(process.resourcesPath, 'native', 'win-x64') : path.join(__dirname, '..', 'resources', 'native', 'win-x64'))
    : undefined;
  const worker = new Worker(path.join(__dirname, 'tts-worker.cjs'), { workerData: { modelDirectory, nativeDirectory } });
  ttsWorker = worker;
  worker.on('message', (message) => {
    const resolve = ttsRequests.get(message.id);
    if (resolve) { ttsRequests.delete(message.id); resolve(message); }
  });
  worker.on('error', () => {
    if (ttsWorker !== worker) return;
    for (const resolve of ttsRequests.values()) resolve({ ok: false, error: 'The bundled Mandarin voice stopped. Restart Hanlin to try again.' });
    ttsRequests.clear(); ttsWorker = undefined;
  });
  worker.on('exit', () => {
    if (ttsWorker !== worker) return;
    ttsWorker = undefined;
    for (const resolve of ttsRequests.values()) resolve({ ok: false, error: 'The bundled Mandarin voice stopped. Start playback again.' });
    ttsRequests.clear();
  });
  return worker;
}

ipcMain.handle('hanlin:tts:synthesize', (event, text, rate) => {
  if (!isOwnFrame(event)) throw new Error('Speech access is restricted to the reader.');
  if (typeof text !== 'string' || !text.trim() || text.length > 300
    || typeof rate !== 'number' || !Number.isFinite(rate) || rate < 0.5 || rate > 1.5) {
    return { ok: false, error: 'Invalid Mandarin speech request.' };
  }
  if (ttsRequests.size > 1) return { ok: false, error: 'Wait for the current sentence to finish preparing.' };
  return new Promise((resolve) => {
    const id = ++nextTtsRequest;
    try {
      const worker = getTtsWorker();
      ttsRequests.set(id, resolve);
      worker.postMessage({ id, text, rate });
    } catch (error) { ttsRequests.delete(id); resolve({ ok: false, error: error.message }); }
  });
});
ipcMain.on('hanlin:tts:stop', (event) => { if (isOwnFrame(event)) stopSynthesis(); });

function prepareRecognizer() {
  if (workerReady) return workerReady;
  workerReady = new Promise((resolve, reject) => {
    const modelDirectory = app.isPackaged
      ? path.join(process.resourcesPath, 'models', 'mandarin')
      : path.join(__dirname, '..', 'resources', 'models', 'mandarin');
    const nativeDirectory = process.platform === 'win32'
      ? (app.isPackaged ? path.join(process.resourcesPath, 'native', 'win-x64') : path.join(__dirname, '..', 'resources', 'native', 'win-x64'))
      : undefined;
    speechWorker = new Worker(path.join(__dirname, 'asr-worker.cjs'), { workerData: { modelDirectory, nativeDirectory } });
    speechWorker.on('message', (message) => {
      if (message.type === 'ready') resolve();
      else if (message.type === 'error') {
        reject(new Error(message.message));
        if (speechActive && (message.sessionId === undefined || message.sessionId === speechSession) && mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('hanlin:speech:result', message);
        }
        if (message.sessionId === undefined || message.sessionId === speechSession) stopRecognition();
      } else if (message.type === 'transcript' && speechActive && message.sessionId === speechSession && mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('hanlin:speech:result', message);
      }
    });
    speechWorker.on('error', (error) => {
      reject(error);
      if (speechActive && mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('hanlin:speech:result', { type: 'error', message: 'The offline speech engine stopped. Restart Hanlin to try again.' });
      }
      stopRecognition();
    });
    speechWorker.on('exit', () => {
      speechWorker = undefined;
      workerReady = undefined;
      stopRecognition();
    });
  });
  return workerReady;
}

ipcMain.handle('hanlin:speech:start', async (event) => {
  if (!isOwnFrame(event)) throw new Error('Speech access is restricted to the reader.');
  try {
    await prepareRecognizer();
    if (!isOwnFrame(event)) throw new Error('The reader was closed.');
    activeFrame = event.senderFrame;
    speechActive = true;
    speechSession += 1;
    speechWorker.postMessage({ type: 'start', sessionId: speechSession });
    return { ok: true, offline: true };
  } catch (error) {
    return { ok: false, error: error.message };
  }
});

ipcMain.on('hanlin:speech:stop', (event) => {
  if (isOwnFrame(event)) stopRecognition();
});
ipcMain.on('hanlin:speech:pcm', (event, samples, sampleRate) => {
  if (!speechActive || !isOwnFrame(event) || event.senderFrame !== activeFrame) return;
  if (!(samples instanceof Float32Array) || samples.length < 1 || samples.length > 16384) return;
  if (!Number.isInteger(sampleRate) || sampleRate < 8000 || sampleRate > 96000) return;
  for (const sample of samples) if (!Number.isFinite(sample) || Math.abs(sample) > 1.01) return;
  speechWorker?.postMessage({ type: 'pcm', samples, sampleRate }, [samples.buffer]);
});

function createWindow() {
  mainWindow = new BrowserWindow({
    title: 'Hanlin · Chinese Reader',
    icon: app.isPackaged ? path.join(process.resourcesPath, 'icon.png') : path.join(__dirname, '..', 'resources', 'icon.png'),
    width: 1440,
    height: 960,
    minWidth: 860,
    minHeight: 640,
    backgroundColor: '#f8f7f3',
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true,
    },
  });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (url.split('#')[0] !== entryUrl().split('#')[0]) event.preventDefault();
  });
  mainWindow.webContents.on('did-start-navigation', () => { stopRecognition(); stopSynthesis(); });
  mainWindow.on('closed', () => { stopRecognition(); stopSynthesis(); mainWindow = undefined; });
  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.loadURL(entryUrl());
}

app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback, details) => {
    const ownWindow = mainWindow && webContents === mainWindow.webContents;
    const ownUrl = webContents.getURL().split('#')[0] === entryUrl().split('#')[0];
    const audioOnly = details.mediaTypes?.length && details.mediaTypes.every((type) => type === 'audio');
    callback(Boolean(ownWindow && ownUrl && speechActive && permission === 'media' && audioOnly && details.isMainFrame !== false));
  });
  session.defaultSession.setPermissionCheckHandler((webContents, permission, _origin, details) => {
    return Boolean(mainWindow && webContents === mainWindow.webContents
      && webContents.getURL().split('#')[0] === entryUrl().split('#')[0]
      && speechActive && permission === 'media' && details.mediaType === 'audio' && details.isMainFrame !== false);
  });
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('before-quit', () => { stopRecognition(); stopSynthesis(); speechWorker?.terminate(); ttsWorker?.terminate(); });
