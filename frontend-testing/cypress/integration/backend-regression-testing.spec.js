const URL_login = 'http://localhost:3000/api/login'

describe('init', function(){
    Cypress.Commands.add('loginAuth', () => {
        const userInfo = {
            "username":"tester02",
            "password":"sppm7qncqmVft5uECkwjLcLdEJGzM3Cw"
        }
        cy.request({
            method: "POST",
            url: URL_login,
            Headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }).then((response => {
            cy.log(response.body)
        }))
    })

    it('Connection test', function () {
        cy.request('http://localhost:3000/').its('status').should('eq', 200)
    })

    it('Login', function (){
        cy.loginAuth()
    })

     it('open main', function(){

        cy.request('http://api.icndb.com/jokes/random').then((response => {
            cy.log(JSON.stringify(response.body.value))
            cy.log(JSON.stringify(response.body.value.id))
            cy.log(JSON.stringify(response.body.value.joke))
            cy.log(JSON.stringify(response.body.value.categories))
        }))

    })

})


    //-X POST 
    //-H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:94.0) Gecko/20100101 Firefox/94.0' 
    //-H 'Accept: application/json' 
    //-H 'Accept-Language: en-US,en;q=0.5' 
    //--compressed -H 'Referer: http://localhost:3000/login' 
    //-H 'Content-Type: application/json;charset=UTF-8' 
    //-H 'Origin: http://localhost:3000' 
    //-H 'Connection: keep-alive' 
    //-H 'Sec-Fetch-Dest: empty' 
    //-H 'Sec-Fetch-Mode: cors' 
    //-H 'Sec-Fetch-Site: same-origin' 
    //--data-raw '{"username":"tester02","password":"sppm7qncqmVft5uECkwjLcLdEJGzM3Cw"}'
