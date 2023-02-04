/// <reference types = "cypress"/>

describe('Login', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('url2'))
    })
  
    it('allows a user to log in with valid credentials', () => {
      cy.get('input[name="email"]').type('engineertestautomation@gmail.com')
      cy.get('input[name="password"]').type('Qatestar12$')
      cy.get('button[type="submit"]').click()
    })
  
    it('displays an error message for invalid credentials', () => {
      cy.get('input[name="email"]').type('engineertestautomation@gmail.com')
      cy.get('input[name="password"]').type('Password123%')
      cy.get('button[type="submit"]').click()
  
      cy.contains('Invalid login details')
    })
  
    it('displays an error message when required fields are left blank', () => {
      cy.get('button[type="submit"]').click()
  
      cy.contains('Email is required')
      cy.contains('Password is required')
    })
  
    it('displays an error message for password length requirement', () => {
      cy.get('input[name="email"]').type('engineertestautomation@gmail.com')
      cy.get('input[name="password"]').type('hello')
      cy.get('button[type="submit"]').click()
  
      cy.contains('password must be at least 8 characters')
    })
  })
  