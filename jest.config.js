module.exports = {
    testRegex: ".*\\.test.js$",
    collectCoverageFrom: [
        "src/**/*.jsx"
    ],
    coveragePathIgnorePatterns: [
        "cypress/"
    ],
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ["./setupTests.js"]
};
