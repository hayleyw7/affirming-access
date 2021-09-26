// load search page (aka home page)

Cypress.Commands.add('loadSearchPage', () => {
  cy.visit('http://localhost:3000')
})

// load faq page

Cypress.Commands.add('loadFAQPage', () => {
  cy.loadSearchPage()
  .get('button[alt="FAQ"]')
  .click()
})

// restrooms pages

Cypress.Commands.add('loadAllRestrooms', (lat, long) => {

  cy.visit('http://localhost:3000')

  cy.get('input[alt="Enter Zip Code"]')
    .type('43606')

  cy.get('button[alt="Show List Button"]')
    .click()

    

  cy.intercept('https://api.zippopotam.us/us/43606', {
    fixture: 'zip_test_data.json',
  })

  cy.intercept(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${long}`, {
    fixture: 'restrooms_test_data.json',
  })  
})

Cypress.Commands.add('loadGenderFreeRestrooms', () => {

  cy.visit('http://localhost:3000')

  cy.get('input[alt="Enter Zip Code"]')
  .type('43606')

  cy.get('input[alt="Gender Free Only"]')
    .check()  

  cy.get('button[alt="Show List Button"]')
  .click()

  cy.intercept('https://api.zippopotam.us/us/43606', {
    fixture: 'zip_test_data.json',
  })

  cy.intercept('https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${long}', {
    fixture: 'restrooms_test_data.json',
  })  
})



// dynamic function drafts to use stubs working

// api helper:
// dynamic interception for both apis (only used inside respective functions)

// Cypress.Commands.add('interceptAPI', (fixturePage, url) => {
//   cy.intercept(`${url}`, {
//     // statusCode: statusCode,
//     fixture: `${fixturePage}_test_data.json`,
//     // delay: 1000
//   })
// })





// click helpers:
// button & checkbox clicks on search page

// Cypress.Commands.add('clickShowListBtn', () => {
//   cy.get('button[alt="Show List Button"]')
//   .click()
// })

// Cypress.Commands.add('clickButtonAndCheckbox', () => {
//   cy.get('input[alt="Gender Free Only"]')
//     .check()
//   .clickShowListBtn()
// })