class cartPage{

    elements = {
        pageTitle: () => cy.getByDataTestId('title'),
        cartItems: () => cy.getByDataTestId('inventory-item-name'),
        cartItemsPrice: () => cy.getByDataTestId('inventory-item-price'),
        checkoutButton: () => cy.getByDataTestId('checkout')
    }

    checkItemInCart(itemName, itemPrice){
        cy.checkIfContainsAndIsVisible(this.elements.cartItems(), itemName)
        cy.checkIfContainsAndIsVisible(this.elements.cartItemsPrice(), itemPrice)
    }

    proceedToCheckout(){
        this.elements.checkoutButton().click()
        return this
    }

}

module.exports = new cartPage()