const {defaults} = require('jest-config');

module.exports = {
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'ts',
  ],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.server.json',
    },
  },
  testMatch: [
    "<rootDir>/src/server/**/?(*.)(spec|test).{ts,tsx}"
  ],
  preset: 'ts-jest',
}