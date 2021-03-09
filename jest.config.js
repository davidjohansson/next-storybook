module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  // setupFiles: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/.storybook",
  ],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
};
