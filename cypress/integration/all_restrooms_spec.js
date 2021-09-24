describe('Restrooms Page - All', () => {

  beforeEach(() => {
    cy.loadAllRestrooms()
  })

  it('should keep original url', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should display restrooms page', () => {
    // cy.wait(5000)
    cy.get('h2')
      .contains('Safe Restrooms Near You')
    .get('button[alt="Start Over"]')
      .should('be.visible')
  })  

  it('should display restroom cards', () => {
    cy.wait(1000)
    cy.get('div[alt="card"]')
      .should('be.visible')
  })  

  // this needs updated once stub works

  it('should display restroom info on cards', () => {
    cy.wait(1000)
    .get('h3[alt="business"]')
      .contains('UT Student Union')
    .get('p[alt="address"]')
      .contains('3154 N Towerview Blvd')
    .get('p[alt="city and state"]')
      .contains('Toledo, OH')
    .get('p[alt="miles away"]')
      .contains('0.86 mi')
  })    

  // uncomment this version once stub works

  // it('should display restroom info on cards', () => {
  //   cy.wait(1000)
  //   .get('h3[alt="business"]')
  //     .contains('Donald Duck Den')
  //   .get('p[alt="address"]')
  //     .contains('2109 Ducky Dr')
  //   .get('p[alt="city and state"]')
  //     .contains('Toledo, OH')
  //   .get('p[alt="miles away"]')
  //     .contains('0.61 mi')
  // })  

  it('should make card values consistent and abbreviated', () => {
    cy.wait(1000)
    .get('p[alt="address"]')
      .contains('Blvd')
    .get('p[alt="city and state"]')
      .should('not.contain', 'Ohio')
    .get('p[alt="miles away"]')
      .should('not.contain', 'miles')
  })        

})