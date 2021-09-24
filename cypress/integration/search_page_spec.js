// describe('Search Page', () => {

//   beforeEach(() => {
//     cy.loadSearchPage()
//   })

//   it('should have homepage url when displaying search page', () => {
//     cy.url().should('eq', 'http://localhost:3000/')
//   })

//   it('should render header', () => {
//     cy.get('h1')
//       .contains('Affirming Access')
//   })


//   it('should render search component', () => {
//     cy.get('h3')
//       .contains('Find Safe Restrooms Near You')
//     .get('input[alt="Enter Zip Code"]')
//       .should('be.visible')
//     .get('input[alt="Gender Free Only"]')
//       .should('be.visible')
//     .get('button[alt="Show List Button"]')
//       .should('be.visible')
//   })

//   it('should render footer', () => {
//     cy.get('button[alt="FAQ"]')
//       .contains('FAQ')
//     .get('h4')
//       .contains('You deserve gender euphoria.')
//   })

//   it('should go to faq page when faq button clicked', () => {
//     cy.get('button[alt="FAQ"]')
//       .click()
//     .get('p')
//       .contains('What is this app')
//   })  

//   it('should go to restrooms page when search button clicked', () => {
//     .get('button[alt="Start Over"]')
//       .should('be.visible')
//   })    

// })