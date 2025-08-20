class inventoryPage {

    elements = {
        inventoryItem: () => cy.getByDataTestId('inventory-item'),
        addBackpackToCartButton: () => cy.getByDataTestId('add-to-cart-sauce-labs-backpack'),
        addOnesieToCartButton: () => cy.getByDataTestId('add-to-cart-sauce-labs-onesie'),
        cartButton: () => cy.getByDataTestId('shopping-cart-link'),
        cartItemCountBadge: () => cy.getByDataTestId('shopping-cart-badge')
    }

    goToCart() {
        this.elements.cartButton().click()
        return this
    }

    addBackpackToCart() {
        this.elements.addBackpackToCartButton().click()
        return this
    }

    addOnesieToCart() {
        this.elements.addOnesieToCartButton().click()
        return this
    }

    verifyInventoryUrl(){
        cy.verifyUrl('/inventory')
    }
}

module.exports = new inventoryPage()