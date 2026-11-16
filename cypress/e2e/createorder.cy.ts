interface LoginData {
    baseURL: string;
    standardUser: string;
    password: string;
    requiredFieldsEmpty:string;
    requiredUsernameErrorMessage:string;
    firstName:string;
    lastName:string;
    postalCode:string;

}

import { LoginPage } from "../pages/LoginPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPageStepOne } from "../pages/CheckoutPageStepOne";
import { InventoryPage } from "../pages/InventoryPage";


describe ('create order tests', function(){
        const loginPage = new LoginPage();
        const inventoryPage = new InventoryPage();
        const cartPage =new CartPage ();
        const checkoutPageStepOne = new CheckoutPageStepOne();

    it('create order',function(){
                cy.fixture('dataInputs',).then((data :LoginData) =>{
                cy.visit(data.baseURL);
                cy.login(data.standardUser,data.password);
                cy.url().should('include','inventory.html');
        inventoryPage.productNames.first().scrollIntoView();
        inventoryPage.addToCartButtons.first().click();
        inventoryPage.addToCartButtons.first().should('have.text','Add to cart');

        inventoryPage.removeProductButton.first().should('be.visible').and('have.text','Remove');

         inventoryPage.shoppingCartquantity.invoke('text').then((quantity)=>{
            cy.log("The quantity in the cart is: " +quantity);
        })

         inventoryPage.cartButton.click();
        cy.url().should('include','cart.html');
        cartPage.checkoutButton.should('have.text','Checkout').click();
        cy.url().should('include','checkout-step-one');
        cy.fillStepOneCheckout(data.firstName,data.lastName,data.postalCode);
        checkoutPageStepOne.continueButton.should('have.value','Continue').click();
        cy.url().should('include','checkout-step-two');
     
    });




})

});