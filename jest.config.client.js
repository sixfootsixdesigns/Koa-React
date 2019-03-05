module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.(css|scss|sass)$": "<rootDir>/config/jest/styleMock.js"
  },
  testMatch: [
    "<rootDir>/src/client/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ]
}
