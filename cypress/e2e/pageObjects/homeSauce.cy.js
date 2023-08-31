

import homeSaucePage from "./homeSaucePage";


describe('PageObject Implementation', function () {

      it('should login to inventory page', () => {

        const homeSauce= new homeSaucePage ();
        homeSauce.navigate();
        homeSauce.enterUsername('standard_user');
        homeSauce.enterPassword('secret_sauce');
        homeSauce.loginBtn();

       // inventoryPage.elements.pageTitle().should('have.text', 'products');
    });

});