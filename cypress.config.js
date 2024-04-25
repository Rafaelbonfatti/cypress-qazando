const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7q8wz7',
  
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: "https://www.automationpratice.com.br/",
    reporterOptions: { 
      charts: true, 
      reportTitle: 'Projeto do curso de Cypress',
      reportPageTitle: 'projeto do curso de Cypress'
     },
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
