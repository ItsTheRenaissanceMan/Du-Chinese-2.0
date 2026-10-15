import { expect, test, type Page } from '@playwright/test';
import { grammarFor, grammarNotes, grammarsFor } from '../src/data/grammar';
import { grammarBooks } from '../src/data/grammarCourses';
import type { GrammarNote } from '../src/types';

async function openGrammar(page: Page) {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Explore the library' })).toBeVisible();
  await page.locator('.sidebar nav').getByRole('button', { name: /My vocabulary/ }).click();
  await page.getByRole('tab', { name: /Grammar guide/ }).click();
  await expect(page.getByRole('combobox', { name: 'Filter grammar by book' })).toBeVisible();
}

function card(page: Page, note: GrammarNote) {
  return page.locator(`[data-grammar-id="${note.id}"]`);
}

test('unavailable uploads show their actual coverage and do not offer invented lessons', async ({ page }) => {
  await openGrammar(page);
  await expect(page.locator('.grammar-course-coverage')).toContainText('of 8 books checked');
  const missing = grammarBooks.filter(book => book.status === 'blocked');
  expect(missing).toHaveLength(5);
  for (const book of missing) {
    await page.getByRole('combobox', { name: 'Filter grammar by book' }).selectOption(book.id);
    await expect(page.getByRole('heading', { name: 'This book is not available yet' })).toBeVisible();
    await expect(page.locator('.grammar-card')).toHaveCount(0);
    await expect(page.getByRole('combobox', { name: 'Filter grammar by lesson' })).toBeDisabled();
  }
});

test('a textbook lesson filters to cited explanations with bilingual examples', async ({ page }) => {
  const note = grammarNotes.find(item => item.sources?.some(source => source.bookId === 'l1p2-textbook' && source.lesson === 12));
  expect(note).toBeDefined();
  await openGrammar(page);
  await page.getByRole('combobox', { name: 'Filter grammar by book' }).selectOption('l1p2-textbook');
  await page.getByRole('combobox', { name: 'Filter grammar by lesson' }).selectOption('12');
  await card(page, note!).locator('.grammar-card-heading').click();
  await expect(card(page, note!).locator('.grammar-card-body > p')).toHaveText(note!.explanation);
  await expect(card(page, note!).locator('.grammar-source-list')).toContainText('Lesson 12');
  await expect(card(page, note!).locator('.grammar-source-list')).toContainText('PDF p.');
  const example = note!.examples[0];
  await expect(card(page, note!).locator('.learning-example').first()).toContainText(example.zh);
  await expect(card(page, note!).locator('.learning-example').first()).toContainText(example.en);
  await expect(page.getByRole('combobox', { name: 'Filter grammar by lesson' }).locator('option[value="1"]')).toHaveCount(0);
  await page.getByRole('combobox', { name: 'Filter grammar by book' }).selectOption('l1p1-textbook');
  await expect(page.getByRole('combobox', { name: 'Filter grammar by lesson' })).toHaveValue('all');
});

test('course search finds an original example and keeps its source lesson', async ({ page }) => {
  const note = grammarNotes.find(item => item.sources?.some(source => source.bookId === 'l1p1-textbook' && source.lesson === 2));
  expect(note).toBeDefined();
  await openGrammar(page);
  await page.getByRole('combobox', { name: 'Filter grammar by book' }).selectOption('l1p1-textbook');
  await page.getByRole('searchbox', { name: 'Search grammar guide' }).fill(note!.examples[0].en);
  await expect(card(page, note!)).toBeVisible();
  await card(page, note!).locator('.grammar-card-heading').click();
  await expect(card(page, note!).locator('.learning-example').first()).toContainText(note!.examples[0].en);
  await expect(card(page, note!).locator('.grammar-source-list')).toContainText('Lesson 2');
  await page.getByRole('combobox', { name: 'Filter grammar by lesson' }).selectOption('10');
  await expect(card(page, note!)).toHaveCount(0);
});

test('saving course notes with identical patterns retains both explanations after reload', async ({ page }) => {
  const courseNotes = grammarNotes.filter(note => note.sources?.length);
  const first = courseNotes.find(note => courseNotes.some(other => other.id !== note.id && other.pattern === note.pattern));
  const second = courseNotes.find(note => note.id !== first?.id && note.pattern === first?.pattern);
  expect(first).toBeDefined();
  expect(second).toBeDefined();
  await openGrammar(page);
  for (const note of [first!, second!]) {
    await card(page, note).locator('.grammar-card-heading').click();
    await card(page, note).getByRole('button', { name: 'Save pattern for review', exact: true }).click();
    await expect(card(page, note).getByRole('button', { name: 'Pattern saved', exact: true })).toBeDisabled();
  }
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Explore the library' })).toBeVisible();
  await page.locator('.sidebar nav').getByRole('button', { name: /My vocabulary/ }).click();
  await expect(page.locator('.study-word-row')).toHaveCount(2);
  await page.getByRole('button', { name: 'Start review', exact: true }).click();
  const seen: string[] = [];
  for (let index = 0; index < 2; index++) {
    await expect(page.locator('.review-prompt')).toHaveText('How does this pattern work?');
    await page.getByRole('button', { name: 'Reveal answer', exact: true }).click();
    const explanation = await page.locator('.review-definition').innerText();
    expect([first!.explanation, second!.explanation]).toContain(explanation);
    seen.push(explanation);
    await expect(page.locator('.review-answer .grammar-source-list')).toBeVisible();
    await page.getByRole('button', { name: /^Good/ }).click();
  }
  expect(new Set(seen).size).toBe(2);
  await expect(page.getByRole('heading', { name: 'Good work. Let it settle.' })).toBeVisible();
});

test('reader word details let the learner open a cited textbook construction', async ({ page }) => {
  const note = grammarsFor('的', 'de').find(item => item.id !== grammarFor('的', 'de')?.id && item.sources?.length);
  expect(note).toBeDefined();
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Explore the library' })).toBeVisible();
  await page.getByRole('button', { name: 'Read the story', exact: true }).click();
  await page.locator('.reader-prose').getByRole('button', { name: /^的:/ }).first().hover();
  await expect(page.getByRole('dialog', { name: 'Meaning of 的' })).toContainText('Textbook explanations');
  const details = page.getByRole('region', { name: 'Related textbook grammar' });
  await expect(details).toBeVisible();
  // Move into Word Explorer before scrolling its longer list of constructions;
  // otherwise scrolling prose under the pointer legitimately inspects another word.
  await page.locator('.reader-sidebar-label').hover();
  const construction = details.locator(`[data-grammar-id="${note!.id}"]`);
  await construction.locator('summary').click();
  await expect(construction.locator('> p')).toHaveText(note!.explanation);
  await expect(construction.locator('.grammar-source-list')).toContainText('PDF p.');
  await expect(construction.locator('.reader-grammar-example').first()).toContainText(note!.examples[0].en);
  await construction.getByRole('button', { name: 'Save grammar pattern', exact: true }).click();
  await expect(construction.getByRole('button', { name: 'Pattern saved', exact: true })).toBeDisabled();
});
