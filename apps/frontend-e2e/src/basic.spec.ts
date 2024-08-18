import { test, expect } from '@playwright/test';

test('basic homepage test', async ({ page }) => {
  test.setTimeout(120000); // Set timeout for this test (2 minutes)

  console.log("Starting the test...");
  await page.goto('http://localhost:4200');
  console.log("Navigated to localhost:4200");

  await expect(page).toHaveTitle(/frontend/i);
  console.log("Title check passed");

  await expect(page.locator('text=Redux Counter')).toBeVisible();
  console.log("Redux Counter is visible");

  console.log("Test completed successfully");
});