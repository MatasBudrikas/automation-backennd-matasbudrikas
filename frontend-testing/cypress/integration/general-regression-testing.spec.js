/// <reference types="cypress"/>

describe('common', function(){
    it('open main', function(){

        cy.visit('http://localhost:3000')
        cy.title() .should('include','Hotel')
        cy.contains('Tester Hotel')
        cy.get(':nth-child(1) > input') .type('tester01')
        cy.get(':nth-child(2) > input') .type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn') .click()
        cy.contains('Overview')
        cy.get('.user > .btn') .click()
        cy.contains('Tester Hotel')

    })
})
