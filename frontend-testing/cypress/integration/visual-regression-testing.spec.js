/// <reference types="cypress" />

describe('common', function(){
    it('open main', function(){

        // Login cycle
        
        cy.visit('http://localhost:3000')
        cy.title() .should('include','Hotel')
        cy.contains('Tester Hotel')
        cy.log('---LOGIN PAGE---')
        cy.wait(5000)
        cy.percySnapshot('page-login')
        cy.get(':nth-child(1) > input') .type('tester01')
        cy.get(':nth-child(2) > input') .type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn') .click()

        //Overview cycle

        cy.log('---OVERVIEW PAGE---')
        cy.contains('Overview')
        cy.wait(5000)
        cy.percySnapshot('page-overview')
    })
    it('open secondary', function(){
        cy.percySnapshot('page-login')
    })
})