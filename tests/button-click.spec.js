import { test, expect } from '@playwright/test';

//grouping related tests
test.describe('Button Interactin Tests', () => {

    //this test will run only in edge browsers
    test.skip(({ browserName }) => browserName !== 'Edge', 'edge only!');

    //runs before all tests in thsi describe block
    test.beforeAll(async () => {
        console.log('Setting up tests for Edge...');
    });

    //test.1 button is clicbkle
    test('Button should e clickable', {
        annotations: [
            {type: 'issue', description: 'https://github.com/example/repo/issues/123'},
        ],
    }, async ({ page }) => {
        await page.goto('https://example.com');
        const button = page.locator('#test-button');
        await expect(button).toBeVisible();
        await expect(button).toBeEnabled();
        await button.click();
        await expect(page.locator('#result')).toHaveText('Button Clicked!');
    });

    
  // Test 2: Performance check for a slow-loading page
  test('Slow page load performance test', {
    annotations: [
      { type: 'performance', description: 'This page is slow to load!' },
    ],
    timeout: 20000, // Override global timeout for this slow test
  }, async ({ page }) => {
    const start = Date.now();
    await page.goto('https://example.com/slow-page'); // Replace with the slow page
    const loadTime = Date.now() - start;

    console.log(`Page loaded in ${loadTime} ms`);
    expect(loadTime).toBeLessThan(15000); // Ensure load time is under 15 seconds
  });

  // Test 3: Skipped Test (Example of FIXME)
  test.fixme('Unstable feature test', 'Test is flaky due to API instability.', async ({ page }) => {
    await page.goto('https://example.com');
    const unstableElement = page.locator('#unstable-element');
    await expect(unstableElement).toBeVisible();
  });
});