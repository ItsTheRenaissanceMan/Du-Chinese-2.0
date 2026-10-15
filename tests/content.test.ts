import { describe, expect, it } from 'vitest';
import { stories, catalogInfo, featuredStoryId } from '../src/data/stories';
import { anchorStories } from '../src/data/anchors';

const categories = ['Everyday', 'Culture', 'Education', 'Fiction', 'History'];

describe('original reading library', () => {
  it('provides 200 complete bilingual readings at every difficulty level', () => {
    expect(stories).toHaveLength(catalogInfo.total);
    expect(new Set(stories.map(story => story.id)).size).toBe(stories.length);
    expect(new Set(stories.map(story => story.sentences.map(sentence => sentence.zh).join(''))).size).toBe(stories.length);
    for (let level = 1; level <= 6; level++) {
      const levelStories = stories.filter(story => story.level === level);
      expect(levelStories).toHaveLength(200);
      expect(new Set(levelStories.map(story => story.category))).toEqual(new Set(categories));
      const practiceStories = levelStories.filter(story => story.series === 'Practice variations');
      expect(practiceStories).toHaveLength(195);
      // The exercise suffix must not inflate the number of underlying plots.
      expect(new Set(practiceStories.map(story => story.title.split('：')[0])).size).toBe(195);
      expect(new Set(levelStories.map(story => story.title.split('：')[0])).size).toBe(200);
      for (const category of categories) {
        expect(practiceStories.filter(story => story.category === category)).toHaveLength(39);
      }
    }
    for (const story of stories) {
      expect(story.sentences.length, story.id).toBeGreaterThanOrEqual(8);
      expect(story.title.trim(), story.id).not.toBe('');
      expect(story.titleEn.trim(), story.id).not.toBe('');
      for (const sentence of story.sentences) {
        expect(sentence.zh, story.id).toMatch(/[\u3400-\u9fff]/);
        expect(sentence.en, story.id).toMatch(/[a-z]/i);
        expect(sentence.zh, story.id).not.toMatch(/undefined|null|\[object Object\]/);
        expect(sentence.en, story.id).not.toMatch(/undefined|null|\[object Object\]/);
      }
    }
  });

  it('clearly distinguishes individually written stories from practice variations', () => {
    expect(anchorStories).toHaveLength(30);
    expect(stories.filter(story => story.series === 'Original stories')).toHaveLength(30);
    expect(stories.filter(story => story.series === 'Practice variations')).toHaveLength(1170);
    for (let level = 1; level <= 6; level++) {
      expect(anchorStories.filter(story => story.level === level)).toHaveLength(5);
    }
  });

  it('uses an original intermediate Peach Garden retelling as the featured story', () => {
    const featured = stories.find(story => story.id === featuredStoryId);
    expect(featured).toBeDefined();
    expect(featured?.level).toBe(3);
    expect(featured?.series).toBe('Original stories');
    expect(featured?.sentences.map(sentence => sentence.zh).join('')).toContain('刘备');
    expect(featured?.sentences.map(sentence => sentence.zh).join('')).toContain('关羽');
    expect(featured?.sentences.map(sentence => sentence.zh).join('')).toContain('张飞');
  });

  it('progressively expands the grammatical reading frame instead of merely changing level labels', () => {
    const lengthAt = (level: number) => stories.filter(story => story.level === level && story.series === 'Practice variations')
      .reduce((total, story) => total + story.sentences.reduce((sum, sentence) => sum + sentence.zh.length, 0), 0);
    for (let level = 2; level <= 6; level++) expect(lengthAt(level)).toBeGreaterThan(lengthAt(level - 1));
  });
});
