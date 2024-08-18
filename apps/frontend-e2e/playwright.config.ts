import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { workspaceRoot } from '@nx/devkit';

const baseURL = 'http://localhost:4300';

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }), // This points to the correct e2e test directory

  use: {
    baseURL,
    trace: 'on-first-retry',
  },

  webServer: {
    command: 'npx nx serve frontend',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    cwd: workspaceRoot,
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