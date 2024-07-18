/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  reporters: [
    "default",
    ["jest-junit", {
      addFileAttribute: "true",
      ancestorSeparator: " › ",
      classNameTemplate: "{classname}",
      titleTemplate: "{title}",
      outputName: "test-result.xml",
      outputDirectory: "reports"
    }]
  ]
};