module.exports = {
  name: "app",
  displayName: "app",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  cacheDirectory: '.jest-cache',
  clearMocks: true,
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  },
  rootDir: '../..',
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
};
