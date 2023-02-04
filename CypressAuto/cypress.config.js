const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 80000,
  env: {
    url: "https://rahulshettyacademy.com",
    url2: "https://topset-dev.vercel.app/login"
  },
  projectId: "t6nto9",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/projects/*.js'
  },
});
