import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { 
        browserName: 'chromium',
        proxy: {
          server: 'http://123.45.67.89:8080',  // Replace with actual proxy URL
          username: 'your-username',  // If authentication is required
          password: 'your-password',
        },
      },
    },
    {
      name: 'iPhone 13',
      use: { 
        ...devices['iPhone 13'],
        proxy: {
          server: 'http://123.45.67.89:8080',
        },
      },
    },
  ],
  reporters: [
    'list',               // Simple list in terminal
    ['github'],           // GitHub Actions reporter for CI annotations
    ['html', { open: 'never' }],  // HTML report, but does not auto-open
  ],
});
