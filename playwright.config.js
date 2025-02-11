import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },  // Default for desktop
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { browserName: 'chromium' },
    },
    {
      name: 'iPhone 13',
      use: devices['iPhone 13'],  // Responsive mobile testing
    },
  ],
});
