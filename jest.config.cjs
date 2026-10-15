module.exports = {
  transform: {
    "^.+\\.(tsx?|jsx?)$": "babel-jest", // Use Babel to transform TSX/JSX files
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jest-environment-jsdom", // Required for testing React components
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"], // Recognize these file extensions
  transformIgnorePatterns: [
    // pnpm stores the real files under .pnpm and then links nested node_modules.
    '/node_modules/.pnpm/(?!(?:@tanstack\\+[^@/]+|react-resizable-panels|nanoid)@)',
    '/node_modules/(?!\\.pnpm/|@tanstack/|react-resizable-panels/|nanoid/)',
  ],
};
