// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  projects: [
    {
      name: 'Edge', // Project name for CLI
      use: {
        channel: 'msedge', // Use Microsoft Edge
        headless: false,    // Run with UI (set to true if headless mode is needed)
      },
    },
  ],
});
