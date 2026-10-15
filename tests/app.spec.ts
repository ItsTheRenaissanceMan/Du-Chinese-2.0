import { expect, test, type Page } from '@playwright/test';

async function openLibrary(page: Page) {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Explore the library' })).toBeVisible();
}
async function openReader(page: Page) {
  await openLibrary(page);
  await page.getByRole('button', { name: 'Read the story', exact: true }).click();
  await expect(page.getByRole('article', { name: 'Chinese story' })).toBeVisible();
}
async function openStudy(page: Page) {
  await page.locator('.sidebar nav').getByRole('button', { name: /My vocabulary/ }).click();
  await expect(page.getByRole('heading', { name: 'Make it stick.' })).toBeVisible();
}

test('browse every graded library and find a story by its title', async ({ page }) => {
  await openLibrary(page);
  await expect(page.locator('.result-count')).toContainText('1,200 readings');
  const levels = ['Newcomer', 'Elementary', 'Intermediate', 'Upper intermediate', 'Advanced', 'Master'];
  for (const [index, level] of levels.entries()) {
    await page.getByRole('group', { name: 'Filter by reading level' }).getByRole('button', { name: level, exact: true }).click();
    await expect(page.locator('.result-count')).toContainText('200 readings');
    await expect(page.locator('.story-grid .story-card')).toHaveCount(18);
    await expect(page.locator(`.story-grid .card-level-${index + 1}`)).toHaveCount(18);
  }
  await page.getByRole('button', { name: 'All levels', exact: true }).click();
  await page.getByRole('textbox', { name: 'Search stories' }).fill('Peach Garden');
  await expect(page.locator('.result-count')).toContainText('1 readings');
  await page.getByRole('button', { name: 'Read The Peach Garden Promise', exact: true }).click();
  await expect(page.locator('.reader-english-title')).toHaveText('The Peach Garden Promise');
});

test('click a sentence for translation and change scripts and pinyin while reading', async ({ page }) => {
  await openReader(page);
  const sentence = page.locator('.reader-sentence').nth(1);
  await sentence.locator('.reader-word').first().click();
  await expect(sentence).toHaveClass(/is-selected/);
  await expect(sentence.locator('.reader-translation')).toContainText('One spring day, Liu Bei, Guan Yu, and Zhang Fei meet in a peach garden.');
  await expect(page.locator('.reader-sentence').first().locator('.reader-translation')).toHaveCount(0);
  await page.getByRole('button', { name: /繁體 Traditional/ }).click();
  await expect(page.locator('.reader-heading h1')).toHaveText('桃園結義');
  await expect(page.getByRole('article', { name: 'Chinese story' })).toHaveAttribute('lang', 'zh-Hant');
  await expect(sentence.locator('.reader-sentence-line')).toContainText('劉');
  await page.getByRole('checkbox', { name: 'Pinyin', exact: true }).uncheck();
  await expect(page.locator('.reader-prose rt')).toHaveCount(0);
  await page.getByRole('checkbox', { name: 'Pinyin', exact: true }).check();
  expect(await page.locator('.reader-prose rt').count()).toBeGreaterThan(0);
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Explore the library' })).toBeVisible();
  await page.getByRole('button', { name: 'Read the story', exact: true }).click();
  await expect(page.locator('.reader-heading h1')).toHaveText('桃園結義');
  await expect(page.locator('.reader-sentence.is-selected')).toHaveAttribute('aria-label', 'Sentence 2');
});

test('hover, save, reload, and review a word with a real future schedule', async ({ page }) => {
  await openReader(page);
  await page.locator('.reader-prose .reader-word').first().hover();
  const tooltip = page.getByRole('dialog', { name: /^Meaning of/ });
  await expect(tooltip).toBeVisible();
  await expect(tooltip.locator('> p').first()).not.toHaveText('Definition not available in this dictionary.');
  await tooltip.hover();
  await page.mouse.wheel(0, 160);
  await tooltip.getByRole('button', { name: 'Save word', exact: true }).click();
  await expect(tooltip.getByRole('button', { name: 'Saved', exact: true })).toBeDisabled();
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Explore the library' })).toBeVisible();
  await expect(page.locator('.nav-count')).toHaveText('1');
  await openStudy(page);
  await expect(page.locator('.study-word-row')).toHaveCount(1);
  await page.getByRole('button', { name: 'Start review', exact: true }).click();
  await expect(page.locator('.review-answer')).toHaveCount(0);
  await page.getByRole('button', { name: 'Reveal answer' }).click();
  await expect(page.locator('.review-definition')).toBeVisible();
  await page.getByRole('button', { name: /^Good/ }).click();
  await expect(page.getByRole('heading', { name: 'Good work. Let it settle.' })).toBeVisible();
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('hanlin.user.v1') || '{}').words[0]);
  expect(saved.reviews).toBe(1);
  expect(saved.due).toBeGreaterThan(Date.now() + 23 * 60 * 60 * 1000);
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Explore the library' })).toBeVisible();
  await openStudy(page);
  await expect(page.locator('.study-summary h2')).toHaveText('All caught up, for now.');
  await expect(page.locator('.study-word-due')).toContainText('Due');
});

test('search English, Traditional Chinese, and tone-number pinyin in the dictionary', async ({ page }) => {
  await openLibrary(page);
  await page.locator('.sidebar nav').getByRole('button', { name: 'Dictionary', exact: true }).click();
  const search = page.getByRole('searchbox', { name: 'Search dictionary' });
  await search.fill('friend');
  await page.locator('.dictionary-result').filter({ hasText: '朋友' }).first().click();
  await expect(page.locator('.dictionary-detail h2')).toHaveText('朋友');
  await expect(page.locator('.dictionary-definitions')).toContainText('friend');
  await search.fill('學習');
  await expect(page.locator('.dictionary-detail h2')).toHaveText('学习');
  await expect(page.locator('.dictionary-definitions')).toContainText('study');
  await search.fill('xue2 xi2');
  await expect(page.locator('.dictionary-detail h2')).toHaveText('学习');
  await page.getByRole('button', { name: 'Save to vocabulary', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Saved to your vocabulary', exact: true })).toBeDisabled();
  await expect(page.locator('.nav-count')).toHaveText('1');
  await search.fill('因为');
  await expect(page.locator('.dictionary-grammar')).toBeVisible();
  await expect(page.locator('.dictionary-grammar')).toContainText('How it works');
});

test('grammar patterns keep their explanations and examples after reload', async ({ page }) => {
  await openLibrary(page);
  await openStudy(page);
  await page.getByRole('tab', { name: /Grammar guide/ }).click();
  await page.getByRole('searchbox', { name: 'Search grammar guide' }).fill('because');
  await page.locator('.grammar-card-heading').first().click();
  await expect(page.locator('.grammar-card-body .learning-example').first()).toBeVisible();
  await page.getByRole('button', { name: 'Save pattern for review' }).click();
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Explore the library' })).toBeVisible();
  await openStudy(page);
  await page.getByRole('button', { name: 'Start review', exact: true }).click();
  await expect(page.locator('.review-prompt')).toHaveText('How does this pattern work?');
  await page.getByRole('button', { name: 'Reveal answer' }).click();
  await expect(page.locator('.review-answer .learning-example').first()).toBeVisible();
});

test('dark mode survives reload and the dictionary fits a narrow window', async ({ page }) => {
  await openLibrary(page);
  await page.getByRole('button', { name: 'Switch to dark mode', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Explore the library' })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('.sidebar nav').getByRole('button', { name: 'Dictionary', exact: true }).click();
  await expect(page.getByRole('searchbox', { name: 'Search dictionary' })).toBeVisible();
  await page.getByRole('searchbox', { name: 'Search dictionary' }).fill('朋友');
  await expect(page.locator('.dictionary-detail h2')).toHaveText('朋友');
  const fits = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
  expect(fits).toBe(true);
});
