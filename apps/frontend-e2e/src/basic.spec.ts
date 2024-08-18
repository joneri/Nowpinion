import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://localhost:4200'); // Adjust the URL to your dev server's URL

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/frontend/i);

  // Expect an element with the text "Redux Counter"
  await expect(page.locator('text=Redux Counter')).toBeVisible();

  // Click the About link
  await page.click('text=About');

  // Expect the URL to be correct after clicking
  await expect(page).toHaveURL('http://localhost:4200/about');
});
