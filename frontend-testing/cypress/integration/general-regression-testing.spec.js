describe('common', function(){
    it('open main', function(){

        // Login cycle

        cy.visit('http://localhost:3000')
        cy.title() .should('include','Hotel')
        cy.contains('Tester Hotel')
        cy.get(':nth-child(1) > input') .type('tester01')
        cy.get(':nth-child(2) > input') .type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn') .click()
        cy.contains('Overview')

        // Rooms cycle

        cy.get(':nth-child(1) > .btn') .click()
        cy.get('a.btn:nth-child(2)') .click()
        cy.contains('New Room')
        cy.get('a.btn:nth-child(1)') .click()
        cy.get('a.btn:nth-child(1)') .click()
        cy.contains('Overview')

        // Clients cycle

        cy.get('div.block:nth-child(2) > a:nth-child(3)') .click()
        cy.get('a.btn:nth-child(2)') .click()
        cy.contains('New Client')
        cy.get('a.btn:nth-child(1)') .click()
        cy.get('a.btn:nth-child(1)') .click()
        cy.contains('Overview')

        // Bills cycle

        cy.get('div.block:nth-child(3) > a:nth-child(4)') .click()
        cy.get('a.btn:nth-child(2)') .click()
        cy.contains('New Bill')
        cy.get('a.btn:nth-child(1)') .click()
        cy.get('a.btn:nth-child(1)') .click()
        cy.contains('Overview')

        // Reservations cycle

        cy.get('div.block:nth-child(4) > a:nth-child(4)') .click()
        cy.get('a.btn:nth-child(2)') .click()
        cy.contains('New Reservation')
        cy.get('a.btn:nth-child(1)') .click()
        cy.get('a.btn:nth-child(1)') .click()
        cy.contains('Overview')

        // Exit cycle

        cy.get('button.btn') .click()
        cy.contains('Login')

    })
})