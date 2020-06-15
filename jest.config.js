module.exports = {
    testRegex: ".*\\.test.js$",
    collectCoverageFrom: [
        "src/**/*.jsx"
    ],
    coveragePathIgnorePatterns: [
        "cypress/",
        "src/index.jsx",
        "src/components/ErrorBoundary/ErrorBoundary.jsx"
    ],
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ["./setupTests.js"]
};
