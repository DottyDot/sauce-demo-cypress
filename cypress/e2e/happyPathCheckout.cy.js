// /// <reference types="Cypress" />
import loginPage, { elements } from "../support/pageObject/loginPage"
import inventoryPage from "../support/pageObject/inventoryPage"
import cartPage from "../support/pageObject/cartPage"
import checkoutPage from "../support/pageObject/checkoutPage"
import orderOverviewPage from "../support/pageObject/orderOverviewPage"
import thankYouPage from "../support/pageObject/thankYouPage"

describe('User can add items to cart and successfully check out', () => {
    it('User logs in, adds an item to the cart and can checkout', () =>{
        cy.visit('/')
        loginPage.getStandardUser().then((user) => {
            loginPage.logInWithData(user)
        })
        cy.url().should('include', '/inventory')
        inventoryPage.elements.inventoryItem().should('be.visible').and('have.length', 6)
        inventoryPage.addBackpackToCart()
        inventoryPage.elements.cartItemCountBadge().should('contain', '1')
        inventoryPage.goToCart()
        cy.url().should('include', '/cart')
        cy.checkIfContainsAndIsVisible(cartPage.elements.pageTitle(), 'Your Cart')
        cartPage.checkItemInCart('Sauce Labs Backpack', '29.99')
        cartPage.proceedToCheckout()
        cy.url().should('include', '/checkout-step-one')
        cy.checkIfContainsAndIsVisible(checkoutPage.elements.pageTitle(), 'Checkout: Your Information')
        checkoutPage.fillInCorrectData().continueCheckout()
        cy.url().should('include', '/checkout-step-two')
        cy.checkIfContainsAndIsVisible(orderOverviewPage.elements.pageTitle(), 'Checkout: Overview')
        orderOverviewPage.confirmItemInOrder('Sauce Labs Backpack', '29.99')
        orderOverviewPage.confirmTotalAndTax('29.99', '2.40', '32.39')
        orderOverviewPage.finishOrder()
        cy.url().should('include', '/checkout-complete')
        cy.checkIfContainsAndIsVisible(thankYouPage.elements.pageTitle(), 'Checkout: Complete!')
        thankYouPage.confirmThankYouMessageIsShown()
        thankYouPage.goBackToInventory()
        cy.url().should('include', '/inventory')

    })
})