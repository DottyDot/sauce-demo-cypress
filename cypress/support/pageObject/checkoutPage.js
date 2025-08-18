class checkoutPage{

    elements = {
        pageTitle: () => cy.getByDataTestId('title'),
        nameField: () => cy.getByDataTestId('firstName'),
        surnameField: () => cy.getByDataTestId('lastName'),
        postalCode: () => cy.getByDataTestId('postalCode'),
        continueButton: () => cy.getByDataTestId('continue')
    }

    fillInCorrectData(){
        this.elements.nameField().type('Test')
        this.elements.surnameField().type('Test-Surname')
        this.elements.postalCode().type('12345')
        return this
    }

    continueCheckout(){
        this.elements.continueButton().click()
    }

}

module.exports = new checkoutPage()