import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { browserName: 'chromium' },
    },
    {
      name: 'iPhone 13',
      use: devices['iPhone 13'],
    },
  ],
  reporters: [
    'list',               // Shows a simple list in the terminal
    ['github'],           // GitHub Actions reporter for CI annotations
    ['html', { open: 'never' }],  // Generate an HTML report without auto-opening
  ],
});
