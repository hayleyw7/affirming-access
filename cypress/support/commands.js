// api helper:
// dynamic interception for both apis (only used inside respective functions)

Cypress.Commands.add('interceptAPI', (fixturePage, url) => {
  cy.intercept(`${url}`, {
    // statusCode: statusCode,
    fixture: `${fixturePage}_test_data.json`,
    // delay: 1000
  })
})

// load search page (aka home page)

Cypress.Commands.add('loadSearchPage', () => {
  cy.visit('http://localhost:3000')
})

// load faq page

Cypress.Commands.add('loadFAQPage', (allOrGenderFree) => {
  cy.loadSearchPage()
  .get('button[alt="FAQ"]')
  .click()
})

// restrooms helper:
// dynamic function to load one of the two restrooms pages (only used inside respective functions)

Cypress.Commands.add('loadRestroomsPage', (allOrGenderFree) => {
  cy.loadSearchPage()

  .interceptAPI(
    'zip',
    'https://api.zippopotam.us/us/80206'
  )  
  .interceptAPI(
    `${allOrGenderFree}_restrooms`,
    'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${long}'
  )
})

// load respective restrooms page based on whether or not checkbox is checked

Cypress.Commands.add('loadAllRestrooms', () => {
  cy.loadRestroomsPage('all')
  cy.clickShowListBtn()
})

Cypress.Commands.add('loadGenderFreeRestrooms', () => {
  cy.loadRestroomsPage('gender_free')
    .clickButtonAndCheckbox()
})

// click helpers:
// button & checkbox clicks on search page

Cypress.Commands.add('clickShowListBtn', () => {
  cy.get('button[alt="Show List Button"]')
  .click()
})

Cypress.Commands.add('clickButtonAndCheckbox', () => {
  cy.get('input[alt="Gender Free Only"]')
    .check()
  .clickShowListBtn()
})