///<reference types="cypress" />
import HomePage from "../pageObject/HomePage"


describe('My First Test Suite', function(){
    before(() => {
        // runs once before all tests in the block
        cy.fixture('example').then((data) => {
            // "this" is still the test context object
            this.data = data
          })
      })

    it('My First Test Case', () => {
    const homePage =  new HomePage()
    cy.visit("https://www.rahulshettyacademy.com/angularpractice/")    
    
   homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
   homePage.getTwoWayDataBinding().should('have.value', this.data.name )
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
    homePage.getShopTab().click()
   
   
    this.data.productName.forEach(function (element) {

      cy.selectProduct(element)
    });






});
    
    
 })

