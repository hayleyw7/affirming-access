describe('Restrooms Page - Gender Free', () => {

  beforeEach(() => {
    cy.loadGenderFreeRestrooms(41.6712, -83.606)
  })

  it('should not display gendered restrooms', () => {
    // cy.wait(1000)
    cy.get('h3[alt="business"]')
      .should('not.contain', 'Donald Duck Den')
  })  

  it('should display gendered restrooms', () => {
    // cy.wait(1000)
    cy.get('h3[alt="business"]')
      .contains('Gender Free Gala Space')
  }) 
})