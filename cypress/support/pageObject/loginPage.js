

class loginPage{
    elements ={
        usernameField : () => cy.get("[data-test=username]"),
        passwordField : () => cy.get("[data-test=password]"),
        loginButton : () => cy.get("[data-test=login-button]"),
        errorMessage : () => cy.get("[data-test=error]")
    }

    confirmUserNotLoggedIn(){
      cy.url().should('include', 'www.saucedemo.com').and('not.include', 'inventory.html')
    }

    getErrorUser(){
      return cy.fixture('users/errorUser.json');
    }

    getLockedOutUser(){
      return cy.fixture('users/lockedOutUser.json');
    }

    getProblemUser(){
      return cy.fixture('users/problemUser.json');
    }

    getStandardUser(){
      return cy.fixture('users/standardUser.json');
    }


    logInWithData(user){
        this.elements.usernameField().type(user.username)
        this.elements.passwordField().type(user.password)
        this.elements.loginButton().click()

    }

    

    

    
}

module.exports = new loginPage();