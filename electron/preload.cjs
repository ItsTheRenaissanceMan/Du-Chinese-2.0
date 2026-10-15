const { contextBridge, ipcRenderer } = require('electron');

// Expose only speech methods. Never expose ipcRenderer or arbitrary channels.
contextBridge.exposeInMainWorld('hanlinSpeech', {
  start: () => ipcRenderer.invoke('hanlin:speech:start'),
  stop: () => ipcRenderer.send('hanlin:speech:stop'),
  synthesize: (text, rate) => ipcRenderer.invoke('hanlin:tts:synthesize', text, rate),
  stopSynthesis: () => ipcRenderer.send('hanlin:tts:stop'),
  sendAudio: (samples, sampleRate) => {
    if (!(samples instanceof Float32Array) || samples.length > 16384) return;
    ipcRenderer.send('hanlin:speech:pcm', samples, sampleRate);
  },
  subscribe: (callback) => {
    const listener = (_event, result) => callback(result);
    ipcRenderer.on('hanlin:speech:result', listener);
    return () => ipcRenderer.removeListener('hanlin:speech:result', listener);
  },
});
