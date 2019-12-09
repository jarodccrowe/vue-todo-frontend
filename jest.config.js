module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(bootstrap-vue)|(bootstrap)/)"
  ],
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ]
}
