/// <reference types = "cypress"/>


describe('Random test', () => {
    it('GreenKart - veg and fruits kart', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    cy.get('.search-keyword').type('cucumber');
  cy.get('button[type="submit"]').click();
  cy.get('.product-action > button').click();
  cy.get('html').click();
  cy.get(':nth-child(1) > .product-action > button').click();
  cy.get(':nth-child(1) > .product-action > button').click();
  cy.get('html').click();
  cy.get(':nth-child(1) > .product-action > button').click();
  cy.get('html').click();
  cy.get(':nth-child(1) > .product-action > button').click();
  cy.get(':nth-child(1) > .stepper-input > .quantity').type('7');
  cy.get(':nth-child(1) > .product-action > button').click();
  cy.get('html').click();
  cy.get('.cart-icon > img').click();
  cy.get('div.cart-preview > div.action-block > button[type="button"]').click();
  cy.get('html').click();
  cy.get(':nth-child(14)').click();
  cy.get('select').select('Nigeria');
  cy.get('.chkAgree').click();
  cy.get('button').click();
    })
  })
  
