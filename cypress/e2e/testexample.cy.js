describe('example spec', () => {
  it('Open test page', () => {
    cy.viewport(1366, 768)
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.contains('Practice Form')
  })
})
