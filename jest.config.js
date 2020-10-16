module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  coverageDirectory: "coverage",
  preset: 'ts-jest',
  testEnvironment: "node",
  testRegex: "(tests/.*|(\\.|/)(test|spec))\\.tsx?$"
};
