/// <reference types = "Cypress" />

describe('Post Body Content', function(){

    const url = 'https://jsonplaceholder.cypress.io/posts'
    const method = 'POST'


    it('Add User ID', function(){
        cy.request(body: {
            userId: '1',
            id: '1',
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }

        ).then(resp=>{
            expect(resp.status).equal.to.eq('201')
            expect(resp.body.data).has.property('userID','1')
            expect(resp.body.data).has.property('id','1')
            expect(resp.body.data).has.property('title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
            expect(resp.body.data).has.property('body','quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto')
        })

    })

}) 