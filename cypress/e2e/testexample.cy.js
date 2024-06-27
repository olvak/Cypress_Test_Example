describe('example spec', () => {
  it('Open test page', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.contains('Practice Form').should('be.visible')
  })
})