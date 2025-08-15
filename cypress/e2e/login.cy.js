import loginPage from "../support/pageObject/loginPage"

describe('login', () => {
  it('User logs in with standard user data', () => {
    cy.visit('https://www.saucedemo.com')
    loginPage.getStandardUser().then((user) => {
      loginPage.logInWithData(user)
    })
    cy.url().should('include', 'saucedemo.com/inventory.html')
  }),

  it('User tries to log in with locked out user data and gets an error', () => {
    cy.visit('https://www.saucedemo.com')
    loginPage.getLockedOutUser().then((user) => {
      loginPage.logInWithData(user)
    })
    loginPage.elements.errorMessage().should('contain', 'Sorry, this user has been locked out.').and('be.visible')
  })
})

