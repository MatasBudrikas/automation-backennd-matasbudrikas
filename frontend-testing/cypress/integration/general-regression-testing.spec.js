/// <reference types="cypress"/>

describe('common', function(){
    it('open main', function(){

        cy.visit('http://localhost:3000')
        cy.title() .should('include','Hotel')
        cy.contains('Tester Hotel')
        cy.get(':nth-child(1) > input') .type('tester2')
        cy.get(':nth-child(2) > input') .type('sppm7qncqmVft5uECkwjLcLdEJGzM3Cw')
        cy.get('.btn') .click()

    })
})
