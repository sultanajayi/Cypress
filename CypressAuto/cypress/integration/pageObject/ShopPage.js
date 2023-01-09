class ShopPage
{

checkOutButton()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}
cartCheckout()
{
    return cy.get(':nth-child(4) > :nth-child(5) > .btn')
}
getCountry()
{
    return cy.get('#country')
}
countryDropDown()
{
    return cy.get('.suggestions > ul > li > a')
}
checkBox()
{
    return  cy.get('#checkbox2')
}
submitButton()
{
    return  cy.get('input[type="submit"]')
}
}
export default ShopPage;


