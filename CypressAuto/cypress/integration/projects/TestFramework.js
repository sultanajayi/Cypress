///<reference types="cypress" />
import HomePage from "../pageObject/HomePage"
import ShopPage from "../pageObject/ShopPage"

describe('My  Test Suite', function(){
    before(() => {
        // runs once before all tests in the block
        cy.fixture('example').then((data) => {
            // "this" is still the test context object
            this.data = data
          })
      })

    it('My Test Case', () => {
    const homePage =  new HomePage()
    const shopPage = new ShopPage()
    cy.visit(Cypress.env('url')+"/angularpractice/")    
    
   homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
   homePage.getTwoWayDataBinding().should('have.value', this.data.name )
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
    homePage.getShopTab().click()
   
   
    this.data.productName.forEach(function (element) {

      cy.selectProduct(element)
    });
    


    shopPage.checkOutButton().click()
    var sum = 0

    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {


      const amount = $el.text()
      var res = amount.split(" ")
      res = res[1].trim()
      sum = Number(sum) + Number(res)

    }).then(function () {
      cy.log(sum)
    })
    cy.get('h3 strong').then(function (element) {
      const amount = element.text()
      var res = amount.split(" ")
      var total = res[1].trim()
      expect(Number(total)).to.equal(sum)

    })

    shopPage.cartCheckout().click()
    shopPage.getCountry().type('China')
    shopPage.countryDropDown().click()
    shopPage.checkBox().click({ force: true }).should('be.checked')
   shopPage.submitButton().click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function (element) {
      const actualText = element.text()
      expect(actualText.includes("Success")).to.be.true
    })





});
    
    
 })

