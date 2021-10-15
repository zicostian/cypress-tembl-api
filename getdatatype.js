/// <reference types = "Cypress" />

describe('Get Data Type', function(){

    const url = 'https://jsonplaceholder.cypress.io/posts'
    const method = 'GET'



    it('URL', function(){
        cy.request({
            url: url
        }).then(resp=>{
            expect(resp.status).to.eq(200)
            expect(resp.headers.connection).to.eq('keep-alive')
        })

    })

}) 