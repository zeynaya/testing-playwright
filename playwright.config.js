import { defineConfig, devices } from ('@playwright/test');

export default defineConfig ({
  use: {
    ...devices['iPhone 13'],
    headless: false,
    colorScheme: 'dark',
  },
});
