import { test, expect } from '@playwright/test';

// This ensures the browser opens in headed (visible) mode
test.use({ headless: false });

test.describe('Button Click Test', () => {
  test('should verify the button is clickable', async ({ page }) => {
    await page.goto('https://example.com'); // Replace with your actual website
    const button = page.locator('button#submit'); // Replace with your button selector

    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();
    await expect(button).toHaveText('Clicked!'); // Adjust based on your app’s behavior
  });
});
