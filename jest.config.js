module.exports = {
  cacheDirectory: '.jest-cache',
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
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/']
};
