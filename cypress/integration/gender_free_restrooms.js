describe('Restrooms Page - Gender Free', () => {

  beforeEach(() => {
    cy.loadGenderFreeRestrooms()
  })

  // delete this once stub works

  it('should not display gendered restrooms', () => {
    cy.wait(1000)
    .get('h3[alt="business"]')
      .should('not.contain', 'Center For Performing Arts')
  }) 

  // uncomment this once stub works

  // it('should not display gendered restrooms', () => {
  //   cy.wait(1000)
  //   .get('h3[alt="business"]')
  //     .should('not.contain', 'Donald Duck Den')
  // })  

  // delete this once stub works

  it('should display gendered restrooms', () => {
    cy.wait(1000)
    .get('h3[alt="business"]')
      .contains('UT Student Union')
  }) 

  // uncomment this once stub works

  // it('should display gendered restrooms', () => {
  //   cy.wait(1000)
  //   .get('h3[alt="business"]')
  //     .contains('Gender Free Gala Space')
  // }) 

})