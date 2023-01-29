Feature: End to End Ecommerce Validation

Application Regression
   
    Scenario: Ecommerce products delivery
    Given I open eCommerce Page
    When I add items to Cart
    And Validate the total prices
    Then Select the country submit and verify Thankyou