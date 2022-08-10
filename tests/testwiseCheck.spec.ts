import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://devb.testwise.com/platform/login
  await page.goto('https://devb.testwise.com/platform/login');

  // Go to https://devb.testwise.com/platform/login?redirectUrl=https:%2F%2Fdevb.testwise.com%2Fplatform%2Flogin
  await page.goto('https://devb.testwise.com/platform/login?redirectUrl=https:%2F%2Fdevb.testwise.com%2Fplatform%2Flogin');

  // Click text=Close
  await page.locator('text=Close').click();

  // Click [placeholder="Enter email\.\.\."]
  await page.locator('[placeholder="Enter email\\.\\.\\."]').click();

  // Fill [placeholder="Enter email\.\.\."]
  await page.locator('[placeholder="Enter email\\.\\.\\."]').fill('ramalakshmi.pillai@elastacloud.com');

  // Press Tab
  await page.locator('[placeholder="Enter email\\.\\.\\."]').press('Tab');

  // Click [placeholder="Enter password\.\.\."]
  await page.locator('[placeholder="Enter password\\.\\.\\."]').click();

  // Fill [placeholder="Enter password\.\.\."]
  await page.locator('[placeholder="Enter password\\.\\.\\."]').fill('ElastaCloud02');

  // Press Enter
  await page.locator('[placeholder="Enter password\\.\\.\\."]').press('Enter');
  await expect(page).toHaveURL('https://devb.testwise.com/platform/dashboard');

  // Click gl-platform-dashboard a:has-text("Manage Schools")
  await page.locator('gl-platform-dashboard a:has-text("Manage Schools")').click();
  await expect(page).toHaveURL('https://devb.testwise.com/platform/schools/view');

  // Click text=Actions TTF Test Account 10 ttftest10 5645745 1 ne1 2al >> button
  await page.locator('text=Actions TTF Test Account 10 ttftest10 5645745 1 ne1 2al >> button').click();

  // Click text=Actions TTF Test Account 10 ttftest10 5645745 1 ne1 2al >> a >> nth=2
  await page.locator('text=Actions TTF Test Account 10 ttftest10 5645745 1 ne1 2al >> a').nth(2).click();
  await expect(page).toHaveURL('https://devb.testwise.com/platform/dashboard');

  // Click gl-platform-dashboard a:has-text("Reports")
  await page.locator('gl-platform-dashboard a:has-text("Reports")').click();
  await expect(page).toHaveURL('https://devb.testwise.com/platform/reporting/dashboard');

  // Click #GLDataDashboard-card button:has-text("View")
  await page.locator('#GLDataDashboard-card button:has-text("View")').click();
  await expect(page).toHaveURL('https://devb.testwise.com/platform/reporting/gl-data-dashboard');

  // Click tspan:has-text("7")
  await page.frameLocator('iframe').locator('tspan:has-text("7")').click();

  // Click [aria-label="\32  items"] div:has-text("2018/2019") >> nth=4
  await page.frameLocator('iframe').locator('[aria-label="\\32  items"] div:has-text("2018/2019")').nth(4).click();

  // Click tspan:has-text("101")
  await page.frameLocator('iframe').locator('tspan:has-text("101")').click();

  // Click [aria-label="Student Count \(CAT4\) 101\."]
  await page.frameLocator('iframe').locator('[aria-label="Student Count \\(CAT4\\) 101\\."]').click();

  // Click [aria-label="Student Count \(CAT4\) 101\."]
  await page.frameLocator('iframe').locator('[aria-label="Student Count \\(CAT4\\) 101\\."]').click();

});