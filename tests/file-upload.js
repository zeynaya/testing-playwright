import { test, expect } from '@playwright/test';

test('Single file upload test', async ({ page })=> {
    //go to the sample upload page
    await page.goto('https://the-internet.herokuapp.com/upload');
    //locate the file input and upload a sample file
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('tests/test-files/sample.txt');

    await page.click('#file-submit');

    await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');
});