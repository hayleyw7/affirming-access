describe('Search Page', () => {

  beforeEach(() => {
    cy.loadSearchPage()
  })

  it('should have homepage url when displaying search page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

})