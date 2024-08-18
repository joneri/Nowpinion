import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { workspaceRoot } from '@nx/devkit';

// Set the base URL for tests to http://localhost:4200
const baseURL = 'http://localhost:4200';

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),

  use: {
    baseURL,
    trace: 'on-first-retry', // Collect trace on first retry for debugging
  },

  // Automatically start the dev server before tests
  webServer: {
    command: 'npx nx serve frontend', // Start the dev server on port 4200
    url: baseURL,
    reuseExistingServer: !process.env.CI, // Reuse server if not in CI
    cwd: workspaceRoot, // Set the current working directory
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
