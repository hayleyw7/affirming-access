describe('FAQ Page', () => {

  beforeEach(() => {
    cy.loadFAQPage()
  })

  it('should have faq url when displaying faq page', () => {
    cy.url().should('eq', 'http://localhost:3000/faq')
  })

  

})