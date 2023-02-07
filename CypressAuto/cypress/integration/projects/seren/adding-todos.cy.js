/// <reference types = "cypress"/>

describe('adding a todo item to the todo list',()=>{

    it('should add a new item to the list',()=>{
        cy.visit('https://todomvc.com/examples/angularjs/#/')

        cy.get('.new-todo').type('Feed the cats{enter}')
        cy.contains('.todo-list li','Feed the cats').should('be.visible')

    })

describe('filtering the todo list', ()=>{

it('should filter to show only the completed items',()=>{
    cy.visit('https://todomvc.com/examples/angularjs/#/')

    cy.get('.new-todo').type('Do todays task before noon{enter}').type('Chat with client{enter}')
    
    cy.get(".todo-list label").should('have.length',2)

    cy.contains('li','Chat with client').find('.toggle').click()

    cy.contains('a','Completed').click()

    cy.get(".todo-list label").should('have.length',1)


})

})


})