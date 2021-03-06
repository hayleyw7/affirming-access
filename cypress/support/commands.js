/////////// HELPER FUNCTIONS /////////// 

// dynamic stubbing

Cypress.Commands.add('interceptAPI', (fixturePage, url) => {
  cy.intercept(`${url}`, {
    fixture: `${fixturePage}_test_data.json`,
  })
})

Cypress.Commands.add('stubOnSearch', (lat, long) => {
  cy.get('button[alt="Show List Button"]')
    .click()
  cy.interceptAPI('zip', 'https://api.zippopotam.us/us/43606')
  cy.interceptAPI('restrooms', `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${long}`)
})

/////////// PAGE LOAD FUNCTIONS /////////// 

// load search page & enter zip

Cypress.Commands.add('loadSearchPage', () => {
  cy.visit('http://localhost:3000')
})

Cypress.Commands.add('enterZipOnLoad', () => {
  cy.loadSearchPage()
  cy.get('input[alt="Enter Zip Code"]')
    .type('43606')
})

// load faq page

Cypress.Commands.add('loadFAQPage', () => {
  cy.loadSearchPage()
  .get('button[alt="FAQ"]').click()
})

// load restrooms pages

Cypress.Commands.add('loadAllRestrooms', (lat, long) => {
  cy.enterZipOnLoad()
  cy.stubOnSearch(lat, long)
})

Cypress.Commands.add('loadGenderFreeRestrooms', (lat, long) => {
  cy.enterZipOnLoad()
  cy.get('input[alt="Gender Free Only"]').check()  
  cy.stubOnSearch(lat, long)
})