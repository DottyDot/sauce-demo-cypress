

class loginPage {
  elements = {
    usernameField: () => cy.getByDataTestId('username'),
    passwordField: () => cy.getByDataTestId('password'),
    loginButton: () => cy.getByDataTestId('login-button'),
    errorMessage: () => cy.getByDataTestId('error')
  }

  confirmUserNotLoggedIn() {
    cy.url().should('include', 'www.saucedemo.com').and('not.include', 'inventory.html')
  }

  getErrorUser() {
    return cy.fixture('users/errorUser.json')
  }

  getLockedOutUser() {
    return cy.fixture('users/lockedOutUser.json')
  }

  getProblemUser() {
    return cy.fixture('users/problemUser.json')
  }

  getStandardUser() {
    return cy.fixture('users/standardUser.json')
  }


  logInWithData(user) {
    this.elements.usernameField().type(user.username)
    this.elements.passwordField().type(user.password)
    this.elements.loginButton().click()

  }

  loginwithStandardUser() {
    this.getStandardUser().then((user) => {
      this.logInWithData(user)
    })
  }
}

module.exports = new loginPage()