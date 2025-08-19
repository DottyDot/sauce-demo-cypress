class orderOverviewPage {
    elements = {
        pageTitle: () => cy.getByDataTestId('title'),
        itemName: () => cy.getByDataTestId('inventory-item-name'),
        itemPrice: () => cy.getByDataTestId('inventory-item-price'),
        paymentInfoDetails: () => cy.getByDataTestId('payment-info-value'),
        subtotalDetails: () => cy.getByDataTestId('subtotal-label'),
        taxDetails: () => cy.getByDataTestId('tax-label'),
        totalPriceDetails: () => cy.getByDataTestId('total-label'),
        finishOrderButton: () => cy.getByDataTestId('finish')

    }

    confirmItemInOrder(itemName, itemPrice) {
        cy.checkIfContainsAndIsVisible(this.elements.itemName(), itemName)
        cy.checkIfContainsAndIsVisible(this.elements.itemPrice(), itemPrice)
    }

    confirmTotalAndTax(subtotal, tax, total) {
        cy.checkIfContainsAndIsVisible(this.elements.subtotalDetails(), subtotal)
        cy.checkIfContainsAndIsVisible(this.elements.taxDetails(), tax)
        cy.checkIfContainsAndIsVisible(this.elements.totalPriceDetails(), total)
    }

    finishOrder() {
        this.elements.finishOrderButton().click()
        return this
    }

}
module.exports = new orderOverviewPage()