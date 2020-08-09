module.exports = {
  projects: ['<rootDir>/__tests__'],
  collectCoverageFrom: ['__tests__/**'],
  testPathIgnorePatterns: ['node_modules', 'dist'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
};
