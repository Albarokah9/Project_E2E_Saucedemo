const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    projectId: 'y7e58v',
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config); // tulis allure-results per spec
            return config;
        },
        experimentalStudio: true,
        baseUrl: 'https://www.saucedemo.com/',
        video: true,
        screenshotOnRunFailure: true,
        env: { allureReuseAfterSpec: true },
    },
});
