import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    headless: false, // Run with browser UI
    viewport: { width: 1280, height: 720 }, // Adjust viewport size if needed
  },
});
