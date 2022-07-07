const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'r8ardy',
  e2e: {
   baseUrl: 'https://www.saucedemo.com/'
  }
})