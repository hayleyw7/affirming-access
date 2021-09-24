describe('Search Page', () => {

  beforeEach(() => {
    cy.loadSearchPage()
  })

  it('should have homepage url when displaying search page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should render header', () => {
    cy.get('h1')
      .contains('Affirming Access')
  })


  it('should render search component', () => {
    cy.get('h3')
      .contains('Find Safe Restrooms Near You')
    .get('input[alt="Enter Zip Code"]')
      .should('be.visible')
    .get('input[alt="Gender Free Only"]')
      .should('be.visible')
    .get('button[alt="Show List Button"]')
      .should('be.visible')
  })

  it('should render footer', () => {
    cy.get('button[alt="FAQ"]')
      .contains('FAQ')
    .get('h4')
      .contains('You deserve gender euphoria.')
  })

})