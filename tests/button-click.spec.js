const { test, expect, chromium } = require('@playwright/test');

test('Button Click Test', async () => {
  const browser = await chromium.launch({ headless: true }); // ✅ Set headless mode
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://amazon.com');
  const button = await page.locator('button#myButton');
  await expect(button).toBeVisible();
  await button.click();
  await expect(button).toHaveText('Clicked');

  await browser.close();
});
