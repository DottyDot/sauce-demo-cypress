import loginPage from "../support/pageObject/loginPage"
import inventoryPage from "../support/pageObject/inventoryPage"

describe('login tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

    it('User logs in with standard user data', () => {
      loginPage.loginwithStandardUser()
      inventoryPage.verifyInventoryUrl()      
    })

    it('User tries to log in with locked out user data and gets an error', () => {
      loginPage.getLockedOutUser().then((user) => {
        loginPage.logInWithData(user)
      })
      loginPage.elements.errorMessage().should('contain', 'Sorry, this user has been locked out.').and('be.visible')
      loginPage.confirmUserNotLoggedIn()
    })

    it('User tries to log in without credentials', () => {
      loginPage.elements.loginButton().click()
      loginPage.elements.errorMessage().should('contain', 'Username is required')
      loginPage.confirmUserNotLoggedIn()
    })

    it('User tries to log in with only username', () => {
      loginPage.getStandardUser().then((user) => {
        loginPage.elements.usernameField().type(user.username)
      })
      loginPage.elements.loginButton().click()
      loginPage.elements.errorMessage().should('contain', 'Password is required')
      loginPage.confirmUserNotLoggedIn()
    })

})

