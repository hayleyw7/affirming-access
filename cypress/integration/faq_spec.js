describe('FAQ Page', () => {

  beforeEach(() => {
    cy.loadFAQPage()
  })

  it('should have faq url when displaying faq page', () => {
    cy.url().should('eq', 'http://localhost:3000/faq')
  })

  it('should render header', () => {
    cy.get('h3')
      .contains('FAQ')
  })

  it('should render questions', () => {
    cy.get('p')
      .contains('What is this app')
  }) 

  it('should render answers', () => {
    cy.get('p')
      .contains('safe and affirming')
  })    

  it('should display return home button', () => {
    cy.get('button[alt="Find Safe Restrooms Now"]')
      .should('be.visible')
  })    

  it('should go to search page when home button clicked', () => {
    cy.get('button[alt="Find Safe Restrooms Now"]')
      .click()
    .get('input[alt="Enter Zip Code"]')
      .should('be.visible')
  })  

  it('should stay on this page if random elements are clicked', () => {
    cy.get('div[class="header-bar"]')
      .click() 
    .get('div[class="App"]')
      .click()    
    .get('h3')
      .contains('FAQ')
  });        

})