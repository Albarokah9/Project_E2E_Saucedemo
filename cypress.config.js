const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "sb9y5o",
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