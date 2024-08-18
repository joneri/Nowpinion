export default {
  displayName: 'frontend',
  testMatch: ["**/*.jest.tsx", "**/*.test.tsx"],  // Match both .jest.tsx and .test.tsx files
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/frontend',
};