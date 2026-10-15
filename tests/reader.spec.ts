import { expect, test, type Page } from '@playwright/test';

// The browser engines are mocked here to exercise reader integration and cleanup.
// Actual offline Mandarin model decoding is covered by speech-native.test.cjs.
async function openReader(page: Page, chineseVoice = true) {
  await page.addInitScript(({ chineseVoice }) => {
    localStorage.removeItem('hanlin.user.v1');
    const state = {
      recognition: null as any,
      aborts: 0,
      speakCalls: 0,
      cancelCalls: 0,
      pauseCalls: 0,
      resumeCalls: 0,
      utterance: null as any,
    };
    (window as any).__readerSpeechTest = state;
    class Recognition {
      lang = ''; continuous = false; interimResults = false;
      onstart: (() => void) | null = null;
      onresult: ((event: any) => void) | null = null;
      onend: (() => void) | null = null;
      onerror: ((event: any) => void) | null = null;
      start() { state.recognition = this; this.onstart?.(); }
      abort() { state.aborts += 1; state.recognition = null; }
      transcript(text: string) {
        this.onresult?.({ resultIndex: 0, results: [{ isFinal: false, 0: { transcript: text } }] });
      }
    }
    Object.defineProperty(window, 'SpeechRecognition', { configurable: true, value: Recognition });
    Object.defineProperty(window, 'webkitSpeechRecognition', { configurable: true, value: undefined });
    class Utterance {
      constructor(public text: string) {}
      lang = ''; rate = 1; voice: any;
      onboundary: ((event: { charIndex: number }) => void) | null = null;
      onend: (() => void) | null = null;
      onerror: ((event: any) => void) | null = null;
    }
    Object.defineProperty(window, 'SpeechSynthesisUtterance', { configurable: true, value: Utterance });
    Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: {
      getVoices: () => chineseVoice ? [{ lang: 'zh-CN', localService: true, name: 'Test Mandarin' }] : [],
      addEventListener() {}, removeEventListener() {},
      speak(utterance: any) { state.speakCalls += 1; state.utterance = utterance; },
      cancel() { state.cancelCalls += 1; state.utterance = null; },
      pause() { state.pauseCalls += 1; },
      resume() { state.resumeCalls += 1; },
    } });
  }, { chineseVoice });
  await page.goto('/');
  await page.getByRole('button', { name: 'Read the story', exact: true }).click();
  await expect(page.locator('.reader-page')).toBeVisible();
}

async function targetIndex(page: Page) {
  return page.evaluate(() => Array.from(document.querySelectorAll('.reader-word')).indexOf(document.querySelector('.is-practice-target')!));
}
async function recognize(page: Page, transcript: string) {
  await page.evaluate(text => (window as any).__readerSpeechTest.recognition.transcript(text), transcript);
}

test('read aloud waits for recognized words, handles traditional Chinese, and stops on script change', async ({ page }) => {
  await openReader(page);
  await expect(page.locator('.reader-recognition-note')).toContainText('may send audio');
  await page.getByLabel('Listening and practice scope').selectOption('sentence');
  await page.getByRole('button', { name: 'Read aloud', exact: true }).click();
  await expect(page.locator('.is-practice-target')).toHaveCount(1);
  const firstPosition = await targetIndex(page);
  const firstWord = (await page.locator('.is-practice-target').textContent())!.replace(/[^\p{Script=Han}]/gu, '');

  await recognize(page, 'silence and incorrect pronunciation');
  await expect.poll(() => targetIndex(page)).toBe(firstPosition);
  await page.getByLabel('Narration speed').selectOption('1');
  await recognize(page, firstWord);
  await expect.poll(() => targetIndex(page)).toBeGreaterThan(firstPosition);
  await expect(page.getByRole('button', { name: 'Stop practice', exact: true })).toBeVisible();

  await page.getByRole('button', { name: /Traditional/, exact: false }).click();
  await expect(page.locator('.is-practice-target')).toHaveCount(0);
  expect(await page.evaluate(() => (window as any).__readerSpeechTest.aborts)).toBeGreaterThan(0);
  await page.getByRole('button', { name: 'Read aloud', exact: true }).click();
  const traditionalPosition = await targetIndex(page);
  const traditionalWord = (await page.locator('.is-practice-target').textContent())!.replace(/[^\p{Script=Han}]/gu, '');
  await recognize(page, traditionalWord);
  await expect.poll(() => targetIndex(page)).toBeGreaterThan(traditionalPosition);

  await page.getByRole('button', { name: 'Back to library', exact: true }).click();
  await expect(page.locator('.reader-page')).toHaveCount(0);
  expect(await page.evaluate(() => (window as any).__readerSpeechTest.recognition)).toBeNull();
});

test('whole story practice continues across sentences and finishes only after every word is recognized', async ({ page }) => {
  await openReader(page);
  const sentences = await page.locator('.reader-sentence-line p').allTextContents();
  const chinese = sentences.map(sentence => sentence.replace(/[^\p{Script=Han}]/gu, ''));
  expect(chinese.length).toBeGreaterThan(2);
  await page.getByRole('button', { name: 'Read aloud', exact: true }).click();
  await expect(page.locator('.reader-sentence').nth(0).locator('.is-practice-target')).toHaveCount(1);
  await recognize(page, chinese[0]);
  await expect(page.locator('.reader-sentence').nth(1)).toHaveClass(/is-selected/);
  await expect(page.locator('.reader-sentence').nth(1).locator('.is-practice-target')).toHaveCount(1);
  await recognize(page, chinese[0] + chinese[1]);
  await expect(page.locator('.reader-sentence').nth(2).locator('.is-practice-target')).toHaveCount(1);
  await recognize(page, chinese.join(''));
  await expect(page.locator('.reader-practice-status')).toContainText('Story practice complete. Every word was recognized.');
  await expect(page.locator('.is-practice-target')).toHaveCount(0);
  expect(await page.evaluate(() => (window as any).__readerSpeechTest.recognition)).toBeNull();
});

test('Mandarin narration highlights speech boundaries, pauses, resumes, and cleans up', async ({ page }) => {
  await openReader(page);
  await page.getByRole('button', { name: 'Play Chinese narration', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Pause Chinese narration', exact: true })).toBeVisible();
  await page.evaluate(() => (window as any).__readerSpeechTest.utterance.onboundary({ charIndex: 0 }));
  await expect(page.locator('.is-spoken')).toHaveCount(1);
  await page.getByRole('button', { name: 'Pause Chinese narration', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Resume Chinese narration', exact: true })).toBeVisible();
  expect(await page.evaluate(() => (window as any).__readerSpeechTest.pauseCalls)).toBe(1);
  await page.getByRole('button', { name: 'Resume Chinese narration', exact: true }).click();
  expect(await page.evaluate(() => (window as any).__readerSpeechTest.resumeCalls)).toBe(1);
  await page.getByRole('button', { name: 'Stop narration', exact: true }).click();
  await expect(page.locator('.is-spoken')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Play Chinese narration', exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Play Chinese narration', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Pause Chinese narration', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Back to library', exact: true }).click();
  expect(await page.evaluate(() => (window as any).__readerSpeechTest.utterance)).toBeNull();
});

test('missing Mandarin voice shows a real prerequisite and never pretends to play', async ({ page }) => {
  await openReader(page, false);
  await page.getByRole('button', { name: 'Play Chinese narration', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('No Mandarin voice is installed', { timeout: 7000 });
  await expect(page.getByRole('button', { name: 'Play Chinese narration', exact: true })).toBeVisible();
  await expect(page.locator('.is-spoken')).toHaveCount(0);
  expect(await page.evaluate(() => (window as any).__readerSpeechTest.speakCalls)).toBe(0);
});

test('stopping a voice lookup prevents delayed playback after navigation', async ({ page }) => {
  await openReader(page, false);
  await page.getByRole('button', { name: 'Play Chinese narration', exact: true }).click();
  await page.getByRole('button', { name: 'Back to library', exact: true }).click();
  await expect(page.locator('.reader-page')).toHaveCount(0);
  // Voice discovery resolves after two seconds; canceled work must stay canceled.
  await page.waitForTimeout(2200);
  expect(await page.evaluate(() => (window as any).__readerSpeechTest.speakCalls)).toBe(0);
  await expect(page.getByRole('alert')).toHaveCount(0);
});
