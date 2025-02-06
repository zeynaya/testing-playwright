const {test, expect, chromium} = require('@playwright/test');
const path = require('path');

test('Button Click Test', async () => {
  const browser = await chromium.launch({headless: false});
  const context = await browser.newContext();
  const page =  await context.newPage();

  const filePath = path.join(__dirname, 'test-page.html');
  const fuleUrl = `file://${filePath}`;

  await page.goto(fileUrl);

  const button = await page.locator('button#myButton');
  await expect(button).toBeVisible();
  await button.click();
  await expect(button).toHaveText('Clicked');

  await browser.close();
})