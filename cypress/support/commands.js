// HELPER FUNCTIONS

// dynamic stubbing

Cypress.Commands.add('interceptAPI', (fixturePage, url) => {
  cy.intercept(`${url}`, {
    fixture: `${fixturePage}_test_data.json`,
  })
})

// Cypress.Commands.add('stubAll', () => {
//   cy.interceptAPI('zip', 'https://api.zippopotam.us/us/43606')
//   cy.interceptAPI('restrooms', `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${long}`)
// })

// actions on search page

Cypress.Commands.add('enterZipOnLoad', () => {
  cy.loadSearchPage()
  cy.get('input[alt="Enter Zip Code"]').type('43606')
})

Cypress.Commands.add('stubAtSearch', () => {
  cy.get('button[alt="Show List Button"]').click()
    
  cy.interceptAPI('zip', 'https://api.zippopotam.us/us/43606')
  cy.interceptAPI('restrooms', `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${long}`)
})

// PAGE LOAD FUNCTIONS

// load search page

Cypress.Commands.add('loadSearchPage', () => {
  cy.loadSearchPage()
  cy.visit('http://localhost:3000')
})

// load faq page

Cypress.Commands.add('loadFAQPage', () => {
  cy.loadSearchPage()
  .get('button[alt="FAQ"]').click()
})

// load restrooms pages

Cypress.Commands.add('loadAllRestrooms', (lat, long) => {
  cy.enterZipOnLoad()
  cy.stubAtSearch()
})

Cypress.Commands.add('loadGenderFreeRestrooms', (lat, long) => {
  cy.enterZipOnLoad()
  cy.get('input[alt="Gender Free Only"]').check()  
  cy.stubAtSearch()
})