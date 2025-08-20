class thankYouPage {

    elements = {
        pageTitle: () => cy.getByDataTestId('title'),
        thankYouHeader: () => cy.getByDataTestId('complete-header'),
        dispatchInfo: () => cy.getByDataTestId('complete-text'),
        backToInventoryButton: () => cy.getByDataTestId('back-to-products')

    }

    confirmThankYouMessageIsShown() {
        cy.checkIfContainsAndIsVisible(this.elements.thankYouHeader(), 'Thank you for your order!')
        cy.checkIfContainsAndIsVisible(this.elements.dispatchInfo(), 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    }

    goBackToInventory() {
        this.elements.backToInventoryButton().click()
    }

    verifyThankYouPageUrl(){
        cy.verifyUrl('/checkout-complete')
    }
}

module.exports = new thankYouPage()