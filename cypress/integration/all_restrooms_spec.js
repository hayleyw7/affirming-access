describe('Restrooms Page - All', () => {

  beforeEach(() => {
    cy.loadAllRestrooms()
  })

  it('should keep original url', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should display restroom cards', () => {
    cy.get('div[alt="card"]')
      .should('be.visible')
  })  

  // delete this once stub works

  it('should display restroom info on cards', () => {
    cy.get('p[alt="city and state"]')
      .contains('Toledo, OH')
    .get('p[alt="miles away"]')
      .contains('1.07 mi')
  })    

  // uncomment this once stub works

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
    cy.get('p[alt="city and state"]')
      .should('not.contain', 'Ohio')
    .get('p[alt="miles away"]')
      .should('not.contain', 'miles')
  })    

  it('should stay on this page if random elements are clicked', () => {
    cy.get('div[class="header-bar"]')
      .click()
    .get('div[class="App"]')
      .click()    
  });      

})