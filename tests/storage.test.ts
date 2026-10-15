import { describe, it, expect } from 'vitest';
import { validateUserData, scheduleReview } from '../src/lib/storage';
import type { SavedWord } from '../src/types';
const word: SavedWord = { simplified:'学习',traditional:'學習',pinyin:'xué xí',definitions:['to study'],level:1,addedAt:1,due:1,interval:0,reviews:0 };
describe('progress and vocabulary storage',()=>{
  it('keeps valid progress and rejects malformed imported values',()=>{
    const result=validateUserData({words:[word,{simplified:4}],settings:{fontSize:900,speechRate:-1},progress:{'story-1':{sentence:3,complete:true,updatedAt:1},'bad':{sentence:-4},'__proto__':{polluted:true}}});
    expect(result.words).toHaveLength(1); expect(result.settings.fontSize).toBe(40);expect(result.settings.speechRate).toBe(0.5);
    expect(result.progress['story-1'].sentence).toBe(3);expect(result.progress.bad).toBeUndefined();
  });
  it('schedules genuine spaced reviews',()=>{
    expect(scheduleReview(word,'again',100).due).toBe(600100);
    const good=scheduleReview(word,'good',100);expect(good.interval).toBe(1);expect(good.due).toBe(86400100);
    expect(scheduleReview({...word,interval:3},'easy',100).interval).toBe(9);
    expect(good.reviews).toBe(1);
  });
});
