import type { Token } from '../types';
import { Converter } from 'opencc-js';

type Availability = { available: boolean; offline: boolean; message: string };
type SpeechCallbacks = {
  signal?: AbortSignal;
  onBoundary?: (charIndex: number, unit?: 'word' | 'sentence') => void;
  onEnd?: () => void;
  onError?: (message: string) => void;
};
type PracticeCallbacks = {
  signal?: AbortSignal;
  onWord?: (index: number) => void;
  onTranscript?: (text: string) => void;
  onStatus?: (message: string) => void;
  onComplete?: () => void;
  onError?: (message: string) => void;
};
type DesktopResult = { type: 'transcript' | 'error'; text?: string; segment?: number; final?: boolean; message?: string };
type DesktopSpeech = {
  start(): Promise<{ ok: boolean; error?: string; offline?: boolean }>;
  stop(): void;
  sendAudio(samples: Float32Array, sampleRate: number): void;
  subscribe(callback: (message: DesktopResult) => void): () => void;
  synthesize(text: string, rate: number): Promise<{ ok: boolean; samples?: Float32Array; sampleRate?: number; error?: string }>;
  stopSynthesis(): void;
};
interface BrowserRecognition {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: { resultIndex: number; results: ArrayLike<{ isFinal: boolean; 0: { transcript: string } }> }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
  start(): void;
  abort(): void;
}
declare global {
  interface Window {
    hanlinSpeech?: DesktopSpeech;
    SpeechRecognition?: new () => BrowserRecognition;
    webkitSpeechRecognition?: new () => BrowserRecognition;
  }
}

let currentUtterance: SpeechSynthesisUtterance | undefined;
let speechRequest = 0;
const toSimplified = Converter({ from: 'tw', to: 'cn' });
let nativePlayback: { context: AudioContext; stop(): void } | undefined;

function mandarinVoices() {
  return window.speechSynthesis?.getVoices().filter((voice) => /^(?:zh(?:$|-(?:CN|TW|SG|Hans|Hant)(?:-|$))|cmn(?:-|$))/i.test(voice.lang)) || [];
}

export function speechAvailability(): Availability {
  if (window.hanlinSpeech) return { available: true, offline: true, message: 'Bundled offline Mandarin voice. Installed Mandarin device voices are preferred when available.' };
  if (!('speechSynthesis' in window)) return { available: false, offline: false, message: 'Text to speech is unavailable on this device.' };
  const voices = mandarinVoices();
  if (!voices.length && window.speechSynthesis.getVoices().length) {
    return { available: false, offline: false, message: 'Install a Mandarin Chinese voice in your operating system’s speech settings, then restart Hanlin.' };
  }
  return { available: true, offline: voices.some((voice) => voice.localService), message: 'Uses your device’s Mandarin Chinese voice. Voice availability is checked before playback.' };
}

async function waitForVoices(): Promise<SpeechSynthesisVoice[]> {
  const existing = mandarinVoices();
  if (existing.length) return existing;
  return new Promise((resolve) => {
    const synth = window.speechSynthesis;
    const done = () => {
      synth.removeEventListener('voiceschanged', changed);
      clearTimeout(timeout);
      resolve(mandarinVoices());
    };
    const changed = () => { if (mandarinVoices().length) done(); };
    const timeout = window.setTimeout(done, 2000);
    synth.addEventListener('voiceschanged', changed);
  });
}

export async function speakChinese(text: string, rate = 0.85, callbacks: SpeechCallbacks = {}): Promise<() => void> {
  if (typeof window.speechSynthesis === 'undefined' && !window.hanlinSpeech) throw new Error('Text to speech is unavailable on this device.');
  if (callbacks.signal?.aborted) throw new DOMException('Speech playback was canceled.', 'AbortError');
  stopSpeaking();
  const request = speechRequest;
  if (window.hanlinSpeech && !mandarinVoices().some((voice) => voice.localService)) {
    return speakBundledChinese(text, rate, callbacks, request);
  }
  const voices = await waitForVoices();
  if (callbacks.signal?.aborted || request !== speechRequest) throw new DOMException('Speech playback was canceled.', 'AbortError');
  if (!voices.length) throw new Error('No Mandarin voice is installed. Add Mandarin Chinese in your operating system’s speech settings, then restart Hanlin.');
  const utterance = new SpeechSynthesisUtterance(text);
  const cancel = () => { if (currentUtterance === utterance) stopSpeaking(); };
  const removeAbort = () => callbacks.signal?.removeEventListener('abort', cancel);
  utterance.voice = voices.find((voice) => voice.localService && /^zh-CN/i.test(voice.lang))
    || voices.find((voice) => voice.localService) || voices[0];
  utterance.lang = utterance.voice.lang;
  utterance.rate = Math.max(0.5, Math.min(1.5, rate));
  utterance.onboundary = (event) => callbacks.onBoundary?.(event.charIndex, event.name === 'sentence' ? 'sentence' : 'word');
  utterance.onend = () => { removeAbort(); if (currentUtterance === utterance) currentUtterance = undefined; callbacks.onEnd?.(); };
  utterance.onerror = (event) => {
    removeAbort();
    if (currentUtterance === utterance) currentUtterance = undefined;
    if (event.error !== 'canceled' && event.error !== 'interrupted') callbacks.onError?.(`Chinese speech playback failed (${event.error}).`);
  };
  currentUtterance = utterance;
  callbacks.signal?.addEventListener('abort', cancel, { once: true });
  window.speechSynthesis.speak(utterance);
  return () => { removeAbort(); cancel(); };
}

export function stopSpeaking() {
  speechRequest += 1;
  currentUtterance = undefined;
  window.speechSynthesis?.cancel();
  nativePlayback?.stop();
  nativePlayback = undefined;
  window.hanlinSpeech?.stopSynthesis();
}
export const stopChineseSpeech = stopSpeaking;
export function pauseChineseSpeech() { window.speechSynthesis?.pause(); void nativePlayback?.context.suspend(); }
export function resumeChineseSpeech() { window.speechSynthesis?.resume(); void nativePlayback?.context.resume(); }

export function splitSpeechChunks(text: string): { text: string; offset: number }[] {
  const chunks: { text: string; offset: number }[] = [];
  for (const match of text.matchAll(/[^。！？.!?\n]+[。！？.!?\n]*[”’"）】」』]*/g)) {
    // Bound native synthesis latency and IPC memory for long paragraphs.
    for (let start = 0; start < match[0].length; start += 180) {
      const part = match[0].slice(start, start + 180);
      const trimmed = part.trim();
      if (/[\p{L}\p{N}]/u.test(trimmed)) chunks.push({ text: trimmed, offset: match.index! + start + part.indexOf(trimmed) });
    }
  }
  return chunks;
}

async function speakBundledChinese(text: string, rate: number, callbacks: SpeechCallbacks, request: number): Promise<() => void> {
  const bridge = window.hanlinSpeech!;
  const chunks = splitSpeechChunks(text);
  if (!chunks.length) throw new Error('Choose Chinese text to listen to.');
  const context = new AudioContext();
  let source: AudioBufferSourceNode | undefined;
  let settlePlayback: (() => void) | undefined;
  let canceled = false;
  const stillActive = () => !canceled && !callbacks.signal?.aborted && speechRequest === request;
  const cleanup = () => {
    if (canceled) return;
    canceled = true;
    callbacks.signal?.removeEventListener('abort', abort);
    try { source?.stop(); } catch { /* Already ended. */ }
    source?.disconnect();
    settlePlayback?.();
    if (context.state !== 'closed') void context.close().catch(() => {});
    if (nativePlayback?.context === context) nativePlayback = undefined;
  };
  const abort = () => { cleanup(); bridge.stopSynthesis(); };
  callbacks.signal?.addEventListener('abort', abort, { once: true });
  nativePlayback = { context, stop: cleanup };
  try { await context.resume(); } catch (error) { cleanup(); throw error; }
  if (!stillActive()) { cleanup(); throw new DOMException('Speech playback was canceled.', 'AbortError'); }
  const prepare = (chunk: { text: string }) => bridge.synthesize(toSimplified(chunk.text), Math.max(0.5, Math.min(1.5, rate)))
    .catch((error: unknown) => ({ ok: false, error: error instanceof Error ? error.message : 'Bundled Mandarin speech failed.' }));
  type Prepared = Awaited<ReturnType<DesktopSpeech['synthesize']>>;
  function validate(audio: Prepared) {
    if (!audio.ok || !audio.samples?.length || !audio.sampleRate) throw new Error(audio.error || 'The bundled Mandarin voice returned no audio.');
  }
  let first: Prepared;
  try {
    first = await prepare(chunks[0]);
    if (!stillActive()) throw new DOMException('Speech playback was canceled.', 'AbortError');
    validate(first);
  } catch (error) { cleanup(); throw error; }
  const play = (audio: Prepared, offset: number): Promise<void> => new Promise((resolve) => {
    const buffer = context.createBuffer(1, audio.samples!.length, audio.sampleRate!);
    buffer.copyToChannel(new Float32Array(audio.samples!), 0);
    source = context.createBufferSource(); source.buffer = buffer; source.connect(context.destination);
    settlePlayback = resolve;
    source.onended = () => { source?.disconnect(); settlePlayback = undefined; resolve(); };
    // Model has no word timestamps. This is the real start of each sentence,
    // never a fabricated per-word timing estimate.
    callbacks.onBoundary?.(offset, 'sentence');
    source.start();
  });
  void (async () => {
    let audio = first;
    try {
      for (let index = 0; index < chunks.length && stillActive(); index += 1) {
        const next = index + 1 < chunks.length ? prepare(chunks[index + 1]) : undefined;
        await play(audio, chunks[index].offset);
        if (!stillActive()) return;
        if (next) { audio = await next; if (!stillActive()) return; validate(audio); }
      }
      if (stillActive()) { cleanup(); callbacks.onEnd?.(); }
    } catch (error) {
      if (stillActive()) { cleanup(); callbacks.onError?.(error instanceof Error ? error.message : 'Bundled Mandarin speech failed.'); }
    } finally { if (!stillActive()) cleanup(); }
  })();
  return abort;
}

export function recognitionAvailability(): Availability {
  if (window.hanlinSpeech) return { available: true, offline: true, message: 'Offline Mandarin recognition · audio stays on this computer.' };
  if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    return { available: true, offline: false, message: 'Browser speech recognition may send audio to its provider. Use the desktop app for offline recognition.' };
  }
  return { available: false, offline: false, message: 'Read aloud practice needs the Hanlin desktop app or a browser with Chinese speech recognition.' };
}

export function normalizeRecognizedText(text: string): string {
  return toSimplified(text.normalize('NFKC')).replace(/[^\p{Script=Han}]/gu, '');
}

/** Consume each recognized occurrence once, in reading order. Silence and incorrect words never advance. */
export class ReadingMatcher {
  readonly words: { index: number; text: string }[];
  private next = 0;
  private segment = -1;
  private consumed = 0;
  constructor(tokens: Pick<Token, 'simplified'>[]) {
    this.words = tokens.map((token, index) => ({ index, text: normalizeRecognizedText(token.simplified) }))
      .filter((word) => word.text.length > 0);
  }
  get currentIndex(): number | undefined { return this.words[this.next]?.index; }
  get complete(): boolean { return this.next >= this.words.length; }
  feed(transcript: string, segment = 0): { accepted: number[]; currentIndex?: number; complete: boolean } {
    // An old segment arriving after a new one cannot reuse previous utterances.
    if (segment < this.segment) return { accepted: [], currentIndex: this.currentIndex, complete: this.complete };
    if (segment !== this.segment) { this.segment = segment; this.consumed = 0; }
    const text = normalizeRecognizedText(transcript);
    const accepted: number[] = [];
    while (!this.complete) {
      const word = this.words[this.next];
      const at = text.indexOf(word.text, this.consumed);
      if (at === -1) break;
      this.consumed = at + word.text.length;
      accepted.push(word.index);
      this.next += 1;
    }
    return { accepted, currentIndex: this.currentIndex, complete: this.complete };
  }
}

export async function startReadingPractice(tokens: Token[], callbacks: PracticeCallbacks): Promise<{ stop(): void }> {
  if (callbacks.signal?.aborted) throw new DOMException('Reading practice was canceled.', 'AbortError');
  const availability = recognitionAvailability();
  if (!availability.available) throw new Error(availability.message);
  stopSpeaking();
  const matcher = new ReadingMatcher(tokens);
  let stopped = false;
  let teardown: () => void = () => {};
  const stop = () => {
    callbacks.signal?.removeEventListener('abort', stop);
    if (!stopped) { stopped = true; teardown(); }
  };
  callbacks.signal?.addEventListener('abort', stop, { once: true });
  const fail = (message: string) => { stop(); callbacks.onError?.(message); };
  const receive = (text: string, segment: number) => {
    if (stopped) return;
    callbacks.onTranscript?.(text);
    const result = matcher.feed(text, segment);
    if (result.complete) { stop(); callbacks.onComplete?.(); }
    else if (result.accepted.length && result.currentIndex !== undefined) callbacks.onWord?.(result.currentIndex);
  };
  if (matcher.complete) { stop(); callbacks.onComplete?.(); return { stop }; }
  callbacks.onWord?.(matcher.currentIndex!);

  if (window.hanlinSpeech) {
    const bridge = window.hanlinSpeech;
    let media: MediaStream | undefined;
    let context: AudioContext | undefined;
    let source: MediaStreamAudioSourceNode | undefined;
    let recorder: AudioWorkletNode | ScriptProcessorNode | undefined;
    let mute: GainNode | undefined;
    const unsubscribe = bridge.subscribe((result) => {
      if (result.type === 'error') fail(result.message || 'Offline speech recognition failed.');
      else receive(result.text || '', result.segment || 0);
    });
    teardown = () => {
      unsubscribe();
      bridge.stop();
      recorder?.disconnect(); source?.disconnect(); mute?.disconnect();
      if (typeof AudioWorkletNode !== 'undefined' && recorder instanceof AudioWorkletNode) recorder.port.close();
      media?.getTracks().forEach((track) => track.stop());
      if (context && context.state !== 'closed') void context.close().catch(() => {});
    };
    try {
      callbacks.onStatus?.('Preparing the offline Mandarin model…');
      const start = await bridge.start();
      if (!start.ok) throw new Error(start.error || 'The offline recognition model could not be loaded.');
      if (stopped) { bridge.stop(); return { stop }; }
      callbacks.onStatus?.('Requesting microphone access…');
      media = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true }, video: false });
      if (stopped) { media.getTracks().forEach((track) => track.stop()); bridge.stop(); return { stop }; }
      media.getAudioTracks().forEach((track) => {
        track.addEventListener('ended', () => { if (!stopped) fail('The microphone was disconnected. Reconnect it and start practice again.'); }, { once: true });
      });
      context = new AudioContext({ sampleRate: 16000 });
      await context.resume();
      if (stopped) { teardown(); return { stop }; }
      source = context.createMediaStreamSource(media);
      mute = context.createGain(); mute.gain.value = 0; mute.connect(context.destination);
      if (context.audioWorklet) {
        await context.audioWorklet.addModule(new URL('pcm-worklet.js', document.baseURI).href);
        recorder = new AudioWorkletNode(context, 'hanlin-microphone');
        recorder.port.onmessage = (event: MessageEvent<Float32Array>) => { if (!stopped) bridge.sendAudio(event.data, context!.sampleRate); };
      } else {
        recorder = context.createScriptProcessor(2048, 1, 1);
        recorder.onaudioprocess = (event) => { if (!stopped) bridge.sendAudio(new Float32Array(event.inputBuffer.getChannelData(0)), context!.sampleRate); };
      }
      if (stopped) { teardown(); return { stop }; }
      source.connect(recorder); recorder.connect(mute);
      callbacks.onStatus?.('Listening offline · pronounce the highlighted word.');
      return { stop };
    } catch (error) {
      stop();
      if (error instanceof DOMException && error.name === 'NotAllowedError') throw new Error('Microphone access was denied. Allow microphone access in your system’s privacy settings, then try again.');
      throw error;
    }
  }

  const Constructor = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new Constructor!();
  recognition.lang = 'zh-CN'; recognition.continuous = true; recognition.interimResults = true;
  let restartTimer: number | undefined;
  let baseSegment = 0;
  let highestSegment = 0;
  teardown = () => { window.clearTimeout(restartTimer); recognition.onend = null; recognition.abort(); };
  recognition.onstart = () => callbacks.onStatus?.('Listening with browser recognition · pronounce the highlighted word.');
  recognition.onresult = (event) => {
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      highestSegment = Math.max(highestSegment, baseSegment + index);
      receive(event.results[index][0].transcript, baseSegment + index);
    }
  };
  recognition.onerror = (event) => {
    if (event.error === 'no-speech') callbacks.onStatus?.('Still listening · pronounce the highlighted word.');
    else if (event.error !== 'aborted') fail(`Browser speech recognition failed (${event.error}). Try the desktop app for offline recognition.`);
  };
  recognition.onend = () => {
    if (!stopped) {
      baseSegment = highestSegment + 1;
      restartTimer = window.setTimeout(() => { if (!stopped) try { recognition.start(); } catch { fail('Could not restart browser recognition. Start practice again.'); } }, 250);
    }
  };
  callbacks.onStatus?.(availability.message);
  try { recognition.start(); } catch (error) { stop(); throw error; }
  return { stop };
}
