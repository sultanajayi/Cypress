///<reference types="cypress" />


describe('My First Test Suite', function(){

    it('My First Test Case', () => {
        
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
    cy.get('.products').find('.product').each(($el, index, $list) =>{
    const veg = $el.find('h4.product-name').text()
    if (veg.includes('Cucumber')) {
       cy.wrap ($el).find('button').click()
    }

    })
    cy.get('.cart-icon > img').click()
   cy.contains('PROCEED TO CHECKOUT').click()
   cy.contains('Place Order').click()

    








    });
    
    
    
    
    })

