import { test, expect } from '@playwright/test';

test('should display the correct bet type on selection', async ({ page }) => {
  await page.goto('/');
  await page.selectOption('select', 'V75');
  expect(await page.$eval('select', el => el.value)).toBe('V75');
});

test('should load race details on selecting a bet type', async ({ page }) => {
  await page.goto('/');
  await page.selectOption('select', 'V75');
  await expect(page.locator('h2')).toContainText('Race Details');
});
