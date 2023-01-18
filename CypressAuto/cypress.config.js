const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
}
module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  projectId: "t6nto9",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      setupNodeEvents
    },
    specPattern: 'cypress/integration/projects/BDD/*.feature'
  },
});
