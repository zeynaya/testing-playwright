import { test as base, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';


//extend test wiht a fixture for loading the locl html file
const test = base.extend({
  fileUrl: async({}, use) => {
    const filePath = path.resolve(__dirname, 'test-page.html'); 
    if(!fs.existsSync(filePath)) {
      throw new Error(`File not found at path: ${filePath}`);
    }
    const fileUrl = `file://${filePath}`;
    await use(fileUrl);
  },
});

//test hooks for additinal setup/cleanup if needed
test.beforeEach(async ({page}) => {
  console.log('Starting a new test...');
});

test.afterEach(async () => {
  console.log('Test completed!');
});

//main test using the fixture
test('Button Click Test', async ({ page, fileUrl}) => {
  await page.goto(fileUrl);

  const button = page.locator('button#myButton');
  await expect(button).toBeVisible();
  await button.click();
  await expect(button).toHaveText('Clicked');
});
