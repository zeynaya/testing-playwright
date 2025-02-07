const {test, expect, devices, chromium} = require('@playwright/test');
const path = require('path');
const fs = require('fs');

const iPhone13 = devices['iPhone 13'];

test.use({ ...iPhone13 });

test('Button Click Test', async () => {
  const browser = await chromium.launch({headless: false});
  const context = await browser.newContext();
  const page =  await context.newPage();

  const filePath = path.resolve(__dirname, 'test-page.html');

  if(!fs.existsSync(filePath)) {
    throw new Error(`File not found at path: ${filePath}`);
  }

  const fileUrl = `file://${filePath}`;

  await page.goto(fileUrl);

  const button = await page.locator('button#myButton');
  await expect(button).toBeVisible();
  await button.click();
  await expect(button).toHaveText('Clicked');

  await browser.close();
})