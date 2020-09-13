module.exports = {
  projects: ['<rootDir>/__tests__'],
  collectCoverageFrom: ['__tests__/**'],
  testPathIgnorePatterns: ['node_modules', 'dist', '__tests__/utils'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleNameMapper: {
    'src/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
};
