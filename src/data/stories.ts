import type { Story } from '../types';
import { anchorStories } from './anchors';
import catalog from './catalog.json';

/**
 * The library contains 30 individually written original stories and 1,170
 * clearly labeled guided practice variations. Variations reuse 195 original
 * topics across six graded frames, with one exercise per topic per level; they are not
 * 1,170 independent editorial stories.
 */
export const stories: Story[] = [...anchorStories, ...(catalog as Story[])];
export const featuredStoryId = 'peach-garden';
export const catalogInfo = {
  total: 1200,
  perLevel: 200,
  originalStories: 30,
  practiceVariations: 1170,
  originalTopics: 195,
  exercisesPerTopic: 1,
  description: '30 original stories + 1,170 labeled practice variations. Practice topics recur across graded readings.',
} as const;
