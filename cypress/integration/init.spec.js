/// <reference types="cypress" />

context('Init page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('search input', () => {
        cy.get('#test_search_input')
            .type('match string')
            .should('have.value', 'match string')
    })
})
