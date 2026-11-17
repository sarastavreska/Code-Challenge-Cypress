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
import { CheckoutPage } from "../pages/CheckoutPage";
import { InventoryPage } from "../pages/InventoryPage";
import { SuccessfulOrderPage } from "../pages/SuccessfulOrderPage"; 



describe ('create order tests', function(){
        const loginPage = new LoginPage();
        const inventoryPage = new InventoryPage();
        const cartPage =new CartPage ();
        const checkoutPage = new CheckoutPage();
        const successfulOrderPage = new SuccessfulOrderPage();

    it('create order',function(){
                cy.fixture('dataInputs',).then((data :LoginData) =>{
                cy.visit(data.baseURL);
                cy.login(data.standardUser,data.password);
                cy.url().should('include','inventory.html');
        inventoryPage.productNames.first().scrollIntoView();
        inventoryPage.addToCartButtons.first().should('have.text','Add to cart').click();
        inventoryPage.removeProductButton.first().should('be.visible').and('have.text','Remove');

        inventoryPage.shoppingCartquantity.invoke('text').then((quantity)=>{
            cy.log("The quantity in the cart is: " +quantity);
        })

        inventoryPage.cartButton.click();
        cy.url().should('include','cart.html');
        cartPage.checkoutButton.should('have.text','Checkout').click();
        cy.url().should('include','checkout-step-one');
        cy.fillStepOneCheckout(data.firstName,data.lastName,data.postalCode);
        checkoutPage.continueButton.should('have.value','Continue').click();
        cy.url().should('include','checkout-step-two');
        checkoutPage.subtotalPrice.invoke('text').then((subtotalPrice) => {
            cy.log(subtotalPrice);
});   
           checkoutPage.taxPrice.invoke('text').then((taxPrice) => {
            cy.log(taxPrice);
}); 

            checkoutPage.totalPrice.invoke('text').then((totalPrice) => {
            cy.log(totalPrice);
});   

        checkoutPage.finishButton.should('be.visible').and('have.text','Finish').click();
        cy.url().should('contain','checkout-complete');
        successfulOrderPage.successfulOrderHeader.should('be.visible').and('have.text',"Thank you for your order!")
        successfulOrderPage.successfulOrderText.should('be.visible').and('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        

    });




})

        it('create order and navigate to homepage', function(){

                cy.fixture('dataInputs',).then((data :LoginData) =>{
                cy.visit(data.baseURL);
                cy.login(data.standardUser,data.password);
                cy.url().should('include','inventory.html');
        inventoryPage.productNames.first().scrollIntoView();
        inventoryPage.addToCartButtons.first().should('have.text','Add to cart').click();
        inventoryPage.removeProductButton.first().should('be.visible').and('have.text','Remove');

        inventoryPage.shoppingCartquantity.invoke('text').then((quantity)=>{
            cy.log("The quantity in the cart is: " +quantity);
        })

        inventoryPage.cartButton.click();
        cy.url().should('include','cart.html');
        cartPage.checkoutButton.should('have.text','Checkout').click();
        cy.url().should('include','checkout-step-one');
        cy.fillStepOneCheckout(data.firstName,data.lastName,data.postalCode);
        checkoutPage.continueButton.should('have.value','Continue').click();
        cy.url().should('include','checkout-step-two');

        checkoutPage.subtotalPrice.invoke('text').then((subtotalPrice) => {
            cy.log(subtotalPrice);
});   
           checkoutPage.taxPrice.invoke('text').then((taxPrice) => {
            cy.log(taxPrice);
}); 

            checkoutPage.totalPrice.invoke('text').then((totalPrice) => {
            cy.log(totalPrice);
});   

        checkoutPage.finishButton.should('be.visible').and('have.text','Finish').click();
        cy.url().should('contain','checkout-complete');
        successfulOrderPage.successfulOrderHeader.should('be.visible').and('have.text',"Thank you for your order!")
        successfulOrderPage.successfulOrderText.should('be.visible').and('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        successfulOrderPage.backHomeButton.should('be.visible').and('have.text','Back Home').click();
        cy.url().should('include','inventory');



        })
    })

    it('create successful order and generate pdf',function(){
                cy.fixture('dataInputs',).then((data :LoginData) =>{
                cy.visit(data.baseURL);
                cy.login(data.standardUser,data.password);
                cy.url().should('include','inventory.html');
                inventoryPage.productNames.first().scrollIntoView();

        inventoryPage.addToCartButtons.first().should('have.text','Add to cart').click();
        inventoryPage.removeProductButton.first().should('be.visible').and('have.text','Remove');

        inventoryPage.shoppingCartquantity.invoke('text').then((quantity)=>{
            cy.log("The quantity in the cart is: " +quantity);
        })

        inventoryPage.cartButton.click();
        cy.url().should('include','cart.html');
        cartPage.checkoutButton.should('have.text','Checkout').click();
        cy.url().should('include','checkout-step-one');
        cy.fillStepOneCheckout(data.firstName,data.lastName,data.postalCode);
        checkoutPage.continueButton.should('have.value','Continue').click();
        cy.url().should('include','checkout-step-two');

        checkoutPage.subtotalPrice.invoke('text').then((subtotalPrice) => {
            cy.log(subtotalPrice);
});   
           checkoutPage.taxPrice.invoke('text').then((taxPrice) => {
            cy.log(taxPrice);
}); 

            checkoutPage.totalPrice.invoke('text').then((totalPrice) => {
            cy.log(totalPrice);
});   

        checkoutPage.finishButton.should('be.visible').and('have.text','Finish').click();
        cy.url().should('contain','checkout-complete');
        successfulOrderPage.successfulOrderHeader.should('be.visible').and('have.text',"Thank you for your order!")
        successfulOrderPage.successfulOrderText.should('be.visible').and('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        successfulOrderPage.generatePDFOrderButton.should('be.visible').and('have.text','Generate PDF order').click();
    })
})

});