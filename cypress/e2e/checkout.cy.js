
import loginPage, { elements } from "../support/pageObject/loginPage"
import inventoryPage from "../support/pageObject/inventoryPage"
import cartPage from "../support/pageObject/cartPage"
import checkoutPage from "../support/pageObject/checkoutPage"
import orderOverviewPage from "../support/pageObject/orderOverviewPage"
import thankYouPage from "../support/pageObject/thankYouPage"

describe('User can add items to cart and successfully check out', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('User logs in, adds an item to the cart and can checkout', () => {
        loginPage.loginwithStandardUser()
        cy.verifyUrl('/inventory')
        inventoryPage.elements.inventoryItem().should('be.visible').and('have.length', 6)
        inventoryPage.addBackpackToCart()
        inventoryPage.elements.cartItemCountBadge().should('contain', '1')
        inventoryPage.goToCart()
        cy.verifyUrl('/cart')
        cy.checkIfContainsAndIsVisible(cartPage.elements.pageTitle(), 'Your Cart')
        cartPage.checkItemInCart('Sauce Labs Backpack', '29.99')
        cartPage.proceedToCheckout()
        cy.verifyUrl('/checkout-step-one')
        cy.checkIfContainsAndIsVisible(checkoutPage.elements.pageTitle(), 'Checkout: Your Information')
        checkoutPage.fillInCorrectData().continueCheckout()
        cy.verifyUrl('/checkout-step-two')
        cy.checkIfContainsAndIsVisible(orderOverviewPage.elements.pageTitle(), 'Checkout: Overview')
        orderOverviewPage.confirmItemInOrder('Sauce Labs Backpack', '29.99')
        orderOverviewPage.confirmTotalAndTax('29.99', '2.40', '32.39')
        orderOverviewPage.finishOrder()
        cy.verifyUrl('/checkout-complete')
        cy.checkIfContainsAndIsVisible(thankYouPage.elements.pageTitle(), 'Checkout: Complete!')
        thankYouPage.confirmThankYouMessageIsShown()
        thankYouPage.goBackToInventory()
        cy.verifyUrl('/inventory')

    })

    it('User can add 2 items to cart, remove one and successfully check out', () => {
        loginPage.loginwithStandardUser()
        cy.verifyUrl('/inventory')
        inventoryPage.elements.inventoryItem().should('be.visible').and('have.length', 6)
        inventoryPage.addBackpackToCart()
        inventoryPage.addOnesieToCart()
        inventoryPage.elements.cartItemCountBadge().should('contain', '2')
        inventoryPage.goToCart()
        cy.verifyUrl('/cart')
        cartPage.checkItemInCart('Sauce Labs Backpack', '29.99')
        cartPage.checkItemInCart('Sauce Labs Onesie', '7.99')
        cartPage.removeBackpackFromCart()
        cartPage.elements.cartItems().should('not.contain', 'Sauce Labs Backpack')
        cartPage.proceedToCheckout()
        cy.verifyUrl('/checkout-step-one')
        checkoutPage.fillInCorrectData().continueCheckout()
        cy.verifyUrl('/checkout-step-two')
        orderOverviewPage.confirmItemInOrder('Sauce Labs Onesie', '7.99')
        orderOverviewPage.confirmTotalAndTax('7.99', '0.64', '8.63')
        orderOverviewPage.finishOrder()
        cy.verifyUrl('/checkout-complete')
        thankYouPage.confirmThankYouMessageIsShown()

    })
})