import './commands'

before(() => {
  // disable Cypress's default behavior of logging all XMLHttpRequests and fetches
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
