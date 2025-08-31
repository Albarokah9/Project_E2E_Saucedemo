const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "y7e58v",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    baseUrl: 'https://www.saucedemo.com/',
    video: true,
    screenshotOnRunFailure: true,
  },
});