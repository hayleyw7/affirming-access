Cypress.Commands.add('interceptAPI', (fixturePage, url) => {
  cy.intercept(`${url}`, {
    // statusCode: statusCode,
    fixture: `${fixturePage}_test_data.json`,
    // delay: 1000
  })
})

Cypress.Commands.add('loadRestroomsPage', (allOrGenderFree) => {
  cy.interceptAPI(
    'zip',
    'https://api.zippopotam.us/us/80206'
  )  
    .interceptAPI(
      `${allOrGenderFree}_restrooms`,
      'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${long}'
    )

    .visit('http://localhost:3000')
})

Cypress.Commands.add('clickShowListBtn', () => {
  .get('button[alt="Show List Button"]')
  .click()
})


Cypress.Commands.add('loadAllRestrooms', () => {
  cy.loadRestroomsPage('all')
  cy.clickShowListBtn()
});

Cypress.Commands.add('loadGenderFreeRestrooms', () => {
  cy.loadRestroomsPage('gender_free')
    .get('input[alt="Gender Free Only"]')
      .check()
    .clickShowListBtn()
});