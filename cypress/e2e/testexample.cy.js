describe('example spec', () => {
  it('Fill out the test registration form', () => {
    //Set screen resolution
    cy.viewport(1366, 768)
    //Open the test page
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.contains('Practice Form').should('exist')

    //Input Name
    cy.contains('Name').should('exist')
    cy.get('#firstName').type('Firstname')
    cy.get('#lastName').type('Lastname')

    //Input Email
    cy.contains('Email').should('exist')
    cy.get('#userEmail').type('flname@email.test')

    //Choose Gender
    cy.contains('Gender').should('exist')
    cy.get('label[for="gender-radio-1"]').click()

    //Input Phone number
    cy.contains('Mobile').should('exist')
    cy.get('#userNumber').type('0123456789')

    //Select DOB
    cy.contains('Date of Birth').should('exist')
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select('January').should('have.value', '0')
    cy.get('.react-datepicker__year-select').select('2000').should('have.value', '2000')
    cy.get('[aria-label="Choose Saturday, January 1st, 2000"]').click()

    //Select Subjects
    cy.contains('Subjects').should('exist')
    cy.get('#subjectsContainer').click().type('English{enter}')
    cy.get('#subjectsContainer').click().type('History{enter}')
    cy.get('#subjectsContainer').click().type('Arts{enter}')
    cy.get('#subjectsContainer').click().type('Social Studies{enter}')

    //Check Hobbies
    cy.contains('Hobbies').should('exist')
    cy.get('label[for="hobbies-checkbox-2"]').click()
    cy.get('label[for="hobbies-checkbox-3"]').click()

    //Upload the Picture
    cy.get('#uploadPicture').selectFile('testpicture.jpeg')

    //Input Address
    cy.contains('Current Address').should('exist')
    cy.get('#currentAddress').type('123 Street, 45 Apartment')

    //Select State and City
    cy.contains('State and City').should('exist')
    cy.get('#state').click()
    cy.contains('Haryana').click()
    cy.get('#city').click()
    cy.contains('Panipat').click()

    //Send form
    cy.contains('Submit').should('exist')
    cy.get('#submit').click()
    cy.contains('Thanks for submitting the form').should('exist')

    //Take a screenshot of the form
    cy.screenshot('send-form')

    //Exit form modal window
    cy.get('.modal-header').type('{esc}');
  })
})
