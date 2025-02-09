const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

test('Button Click Test', async ({ page }) => {
  const filePath = path.resolve(__dirname, 'test-page.html');

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found at path: ${filePath}`);
  }

  const fileUrl = `file://${filePath}`;

  await page.goto(fileUrl);

  const button = page.locator('button#myButton');
  await expect(button).toBeVisible();
  await button.click();
  await expect(button).toHaveText('Clicked');
});
