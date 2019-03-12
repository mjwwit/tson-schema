module.exports = () => ({
  files: [
    'src/**/*.ts'
  ],
  tests: [
    'test/**/*.spec.ts'
  ],
  testFramework: 'tape',
  env: {
    type: 'node',
  },
})
