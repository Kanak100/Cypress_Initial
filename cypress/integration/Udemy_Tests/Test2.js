describe('My_Second_Test_Suite',() => {
    it('TC_01, My Second test case', () =>
    {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
       
    cy.get('.products').as('productLocator');
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();
    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();
    cy.get('select').select('Afghanistan');
    cy.get('.chkAgree').check();
    cy.contains('Proceed').click();



    })

  
})