import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://duckduckgo.com/
  await page.goto('https://duckduckgo.com/');
  // Click [placeholder="Search without being tracked"]
  await page.locator('[placeholder="Search without being tracked"]').click();
  // Fill [placeholder="Search without being tracked"]
  await page.locator('[placeholder="Search without being tracked"]').fill('duckduckgo');
  // Press Enter
  await page.locator('[placeholder="Search without being tracked"]').press('Enter');
  await expect(page).toHaveURL('https://duckduckgo.com/?va=j&t=hc&q=duckduckgo&ia=web');
  // Click h3:has-text("HTML")
  await page.locator('h3:has-text("HTML")').click();
  await expect(page).toHaveURL('https://html.duckduckgo.com/html');
});