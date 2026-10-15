import { describe, expect, it } from 'vitest';
import { normalizeRecognizedText, ReadingMatcher, splitSpeechChunks } from '../src/lib/speech';

describe('word by word reading recognition', () => {
  it('leaves the highlighted word unchanged after silence or a wrong word', () => {
    const matcher = new ReadingMatcher([{ simplified: '你好' }, { simplified: '朋友' }]);
    expect(matcher.feed('', 0).currentIndex).toBe(0);
    expect(matcher.feed('朋友', 0).accepted).toEqual([]);
    expect(matcher.currentIndex).toBe(0);
  });
  it('uses each recognized occurrence only once, including repeated words', () => {
    const matcher = new ReadingMatcher([{ simplified: '我' }, { simplified: '，' }, { simplified: '我' }, { simplified: '来' }]);
    expect(matcher.feed('我', 0)).toEqual({ accepted: [0], currentIndex: 2, complete: false });
    expect(matcher.feed('我', 0).accepted).toEqual([]);
    expect(matcher.feed('我我来', 0)).toEqual({ accepted: [2, 3], currentIndex: undefined, complete: true });
  });
  it('handles new utterances and ignores stale segments', () => {
    const matcher = new ReadingMatcher([{ simplified: '你好' }, { simplified: '你好' }]);
    matcher.feed('你好', 3);
    expect(matcher.feed('你好', 2).accepted).toEqual([]);
    expect(matcher.feed('你好', 4).complete).toBe(true);
  });
  it('uses simplified token identities even when display text is traditional', () => {
    const matcher = new ReadingMatcher([{ simplified: '学习' }]);
    expect(matcher.feed('學 習。').complete).toBe(true);
  });
  it('normalizes punctuation without treating pinyin or English as recognized Chinese', () => {
    expect(normalizeRecognizedText('你好，世界！ni hao 123')).toBe('你好世界');
  });
});

describe('offline narration chunks', () => {
  it('preserves real sentence offsets across Chinese punctuation and line breaks', () => {
    expect(splitSpeechChunks('你好。\n我喜欢中文！')).toEqual([{ text: '你好。', offset: 0 }, { text: '我喜欢中文！', offset: 4 }]);
  });
  it('bounds long paragraphs for worker memory without losing characters', () => {
    const text = '你好'.repeat(200);
    const chunks = splitSpeechChunks(text);
    expect(chunks.every((chunk) => chunk.text.length <= 180)).toBe(true);
    expect(chunks.map((chunk) => chunk.text).join('')).toBe(text);
    expect(chunks.map((chunk) => chunk.offset)).toEqual([0, 180, 360]);
  });
  it('keeps closing dialog quotes with their sentence and skips punctuation-only input', () => {
    expect(splitSpeechChunks('我问：“你也要水吗？”')).toEqual([{ text: '我问：“你也要水吗？”', offset: 0 }]);
    expect(splitSpeechChunks('“！？”\n…')).toEqual([]);
    expect(splitSpeechChunks('Hello!')).toEqual([{ text: 'Hello!', offset: 0 }]);
  });
});
