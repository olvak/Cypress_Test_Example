describe('example spec', () => {
  it('Fill out the test registration form', () => {
    //Set screen resolution
    cy.viewport(1366, 768)
    //Open the test page
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.contains('Practice Form').should('exist')

    //Input Name
    cy.contains('Name').should('exist')
    cy.get('[id="firstName"]').type('Firstname')
    cy.get('[id="lastName"]').type('Lastname')

    //Input Email
    cy.contains('Email').should('exist')
    cy.get('[id="userEmail"]').type('flname@email.test')

    //Choose Gender
    cy.contains('Gender').should('exist')
    cy.get('label[for="gender-radio-1"]').click()

    //Input Phone number
    cy.contains('Mobile').should('exist')
    cy.get('[id="userNumber"]').type('0123456789')

    //Select DOB
    cy.contains('Date of Birth').should('exist')
    cy.get('input[id="dateOfBirthInput"]').click()
    cy.get('select[class="react-datepicker__month-select"]').select('January').should('have.value', '0')
    cy.get('select[class="react-datepicker__year-select"]').select('2000').should('have.value', '2000')
    cy.get('[aria-label="Choose Saturday, January 1st, 2000"]').click()

    //Select Subjects
    cy.contains('Subjects').should('exist')
    cy.get('[id="subjectsContainer"]').click().type('English{enter}')
    cy.get('[id="subjectsContainer"]').click().type('History{enter}')
    cy.get('[id="subjectsContainer"]').click().type('Arts{enter}')
    cy.get('[id="subjectsContainer"]').click().type('Social Studies{enter}')

    //Check Hobbies
    cy.contains('Hobbies').should('exist')
    cy.get('label[for="hobbies-checkbox-2"]').click()
    cy.get('label[for="hobbies-checkbox-3"]').click()

    //Upload the Picture
    cy.get('input[id="uploadPicture"]').selectFile('testpicture.jpeg')

    //Input Address
    cy.contains('Current Address').should('exist')
    cy.get('[id="currentAddress"]').type('123 Street, 45 Apartment')

    //Select State and City
    cy.contains('State and City').should('exist')
    cy.get('div[id="state"]').click()
    cy.contains('Haryana').click()
    cy.get('div[id="city"]').click()
    cy.contains('Panipat').click()

    //Send form
    cy.contains('Submit').should('exist')
    cy.get('button[id="submit"]').click()
    cy.contains('Thanks for submitting the form').should('exist')

    //Take a screenshot of the form
    cy.screenshot('send-form')

    //Exit form modal window
    cy.get('div[class="modal-header"]').type('{esc}');
  })
})
