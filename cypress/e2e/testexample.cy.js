describe('example spec', () => {
  it('Fill out the test registration form', () => {
    //Set screen resolution
    cy.viewport(1366, 768)
    //Open the test page
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.contains('Practice Form').should('exist')

    //Input name
    cy.contains('Name').should('exist')
    cy.get('[id="firstName"]').type('John')
    cy.get('[id="lastName"]').type('Doe')

    //Input email
    cy.contains('Email').should('exist')
    cy.get('[id="userEmail"]').type('johndoe@test.email')

    //Choose gender
    cy.contains('Gender').should('exist')
    cy.get('label[for="gender-radio-1"]').click()

    //Input mobile phone number
    cy.contains('Mobile').should('exist')
    cy.get('[id="userNumber"').type('0123456789')
  })
})
