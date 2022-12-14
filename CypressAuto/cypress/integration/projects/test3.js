///<reference types="cypress" />


describe('My First Test Suite', function(){

    it('My First Test Case', () => {
        
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
   //windows alert
   cy.get('#alertbtn').click()
   cy.get('#confirmbtn').click()
   cy.on('window:alert', (str)=>{

    expect(str).to.equal('Hello , share this practice page and share your knowledge')

   })

   cy.on('window:confirm', (str)=>{

    expect(str).to.equal('Hello , Are you sure you want to confirm?')

   })
//invoking jquery function/navigating browser control.switching tab

   cy.get('#opentab').invoke('removeAttr','target').click()
  
   cy.url().should('include','rahulshettyacademy')

   cy.go('back')


    
});
    
    
    
    
    })

