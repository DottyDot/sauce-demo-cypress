class cartPage {

    elements = {
        pageTitle: () => cy.getByDataTestId('title'),
        cartItems: () => cy.getByDataTestId('inventory-item-name'),
        cartItemsPrice: () => cy.getByDataTestId('inventory-item-price'),
        checkoutButton: () => cy.getByDataTestId('checkout'),
        removeBackpackButton: () => cy.getByDataTestId('remove-sauce-labs-backpack')
    }

    checkItemInCart(itemName, itemPrice) {
        cy.checkIfContainsAndIsVisible(this.elements.cartItems(), itemName)
        cy.checkIfContainsAndIsVisible(this.elements.cartItemsPrice(), itemPrice)
    }

    removeBackpackFromCart() {
        this.elements.removeBackpackButton().click()
        return this
    }

    proceedToCheckout() {
        this.elements.checkoutButton().click()
        return this
    }

}

module.exports = new cartPage()