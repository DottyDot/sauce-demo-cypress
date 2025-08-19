
Cypress.Commands.add("getByDataTestId", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add("checkIfContainsAndIsVisible", (DOMobject, searchedFor) => {
    return DOMobject.should('contain', searchedFor).and('be.visible')
})

Cypress.Commands.add("verifyUrl", (expectedUrl) => {
    return cy.url().should('include', expectedUrl)
})