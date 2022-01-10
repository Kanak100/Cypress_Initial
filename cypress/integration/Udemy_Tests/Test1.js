describe('My_first_Test_Suite',() => {
    it('TC_01, My first test case', () =>
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product').should('have.length',5);
        cy.get('.product:visible').should('have.length',4);
        //parent child chaining
        cy.get('.products').find('.product').should('have.length',4);
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

        // cy.get('.products').find('.product').each(($el,index,$list) =>{
        //     const vegName= $el.find('h4.product-name').text()
        //     if(vegName.includes('Cashwes'))
        //     {
        //         cy.wrap($el).find('button').click()
        //     }
        // })
        cy.get('.brand').invoke('text').then((logoelement) =>{
            cy.log(logoelement);
        })

        cy.get('.brand').then((logoelement) =>{
            cy.log(logoelement.text());
        })

    //    cy.log(cy.get('.brand').text()); //this command will not work bcoz promise is not resolved here 
    //    and text is jquery method
        
    cy.get('.product').should('have.length',5);
    cy.get('.product:visible').should('have.length',4);
    //parent child chaining
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',4);
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();

    cy.get('.brand').should('have.text','GREENKART');

    })

  
})