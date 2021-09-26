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
    cy.get('input[alt="Enter Zip Code"]')
      .should('be.visible')
    .get('input[alt="Gender Free Only"]')
      .should('be.visible')
    .get('button[alt="Show List Button"]')
      .should('be.visible')
  })

  it('should render footer', () => {
    cy.get('button[alt="FAQ"]')
      .contains('FAQ')
    .get('p')
      .contains('You deserve gender euphoria.')
  })

  it('should go to faq page when faq button clicked', () => {
    cy.get('button[alt="FAQ"]')
      .click()
    .get('p')
      .contains('What is this app')
  })  

  it('should not allow letters or symbols in form', () => {
    cy.get('input[alt="Enter Zip Code"]')
      .type('hhh')
        .should('have.value', '')
      .type('!?D')
        .should('have.value', '')    
  });

  it('should allow numbers in form', () => {
    cy.get('input[alt="Enter Zip Code"]')
      .type('43606')
        .should('have.value', '43606') 
  });  

  it('should allow spaces between numbers in form', () => {
    cy.get('input[alt="Enter Zip Code"]')
      .type('43 606')
        .should('have.value', '43606')    
  }); 

  it('should show error if bad zip is entered', () => {        
    cy.get('input[alt="Enter Zip Code"]')
      .type('432534534')
    .get('button[alt="Show List Button"]')
      .click()  
    .get('h3[class="bad-zip"]') 
      .contains('Please enter a valid US zip code.')
  });

  it('should go to restrooms page when search button clicked', () => {
    cy.get('input[alt="Enter Zip Code"]')
      .type('43606')
    .get('button[alt="Show List Button"]')
      .click()
  })

  it('should clear form when search button clicked', () => {
    cy.get('input[alt="Enter Zip Code"]')
      .type('43606')
    .get('button[alt="Show List Button"]')
      .click()
    .get('input[alt="Enter Zip Code"]')
      .should('have.value', '') 
  })

  it('should uncheck box when search button clicked', () => {
    cy.get('input[alt="Enter Zip Code"]')
      .type('43606')
    .get('input[alt="Gender Free Only"]')
      .check()  
    .get('button[alt="Show List Button"]')
      .click()
    .get('input[alt="Gender Free Only"]')
      .should('not.be.checked') 
  })

  it('should stay on this page if random elements are clicked', () => {
    cy.get('div[class="header-bar"]')
      .click()
    .get('div[class="footer-bar"]')
      .click()  
    .get('div[class="App"]')
      .click()    
  });
})