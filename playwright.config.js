// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    browserName: 'chromium', // Change to 'firefox' or 'webkit' if needed
    headless: false, // Set to true if you want tests to run in the background
  },
});
