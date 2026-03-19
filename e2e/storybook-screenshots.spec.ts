import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

interface StorybookIndex {
  entries: Record<string, { type: string; id: string; title: string; name: string }>;
}

function getStoryIds(): string[] {
  const indexPath = path.join(process.cwd(), 'storybook-static', 'index.json');
  if (!fs.existsSync(indexPath)) {
    return [];
  }
  const index: StorybookIndex = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
  return Object.values(index.entries)
    .filter((e) => e.type === 'story')
    .map((e) => e.id);
}

const storyIds = getStoryIds();

test.describe('Storybook Screenshots', () => {
  for (const storyId of storyIds) {
    test(`${storyId} matches screenshot`, async ({ page }) => {
      await page.goto(`/iframe.html?id=${storyId}&viewMode=story`);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);

      await expect(page).toHaveScreenshot(`${storyId}.png`, {
        maxDiffPixelRatio: 0.02,
      });
    });
  }
});
