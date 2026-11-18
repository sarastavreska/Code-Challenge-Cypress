interface LoginData {
    baseURL: string;
    standardUser: string;
    password: string;
    requiredFieldsEmpty:string;
    requiredUsernameErrorMessage:string;
}

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';

describe('cart tests', function(){

        const loginPage = new LoginPage();
        const inventoryPage = new InventoryPage();
        const cartPage =new CartPage ();

    it('standard user, add a product to cart and open cart', function(){
              cy.fixture('dataInputs',).then((data :LoginData) =>{
              cy.visit(data.baseURL);
              cy.login(data.standardUser,data.password);
        })
        cy.url().should('include','inventory.html');

        inventoryPage.productNames.eq(3).scrollIntoView();
        inventoryPage.addToCartButtons.eq(3).should('have.text','Add to cart').click();
        inventoryPage.productNames.eq(3).invoke('text').then((name) => {
        cy.log('Product name: ' + name.trim());
            });

        inventoryPage.priceOfTheProducts.eq(3).invoke('text').then((price) => {
        cy.log('Product price: ' + price.trim());
            });

         inventoryPage.productDescriptions.eq(3).invoke('text').then((description) => {
        cy.log('Product description: ' + description.trim());
            });

        inventoryPage.removeProductButton.first().should('be.visible').and('have.text','Remove');
        inventoryPage.shoppingCartquantity.invoke('text').then((quantity)=>{
            cy.log("The quantity in the cart is: " +quantity);
        })

        inventoryPage.cartButton.click();
        cy.url().should('include','cart.html');

    
})

        it('add the first product, open cart and remove the added product',function(){

              cy.fixture('dataInputs',).then((data :LoginData) =>{
              cy.visit(data.baseURL);
              cy.login(data.standardUser,data.password);
        })
        cy.url().should('include','inventory.html');

        inventoryPage.productNames.first().scrollIntoView();
        inventoryPage.addToCartButtons.first().should('have.text','Add to cart').click();
        inventoryPage.productNames.first().invoke('text').then((name) => {
        cy.log('Product name: ' + name.trim());
            });

        inventoryPage.priceOfTheProducts.first().invoke('text').then((price) => {
        cy.log('Product price: ' + price.trim());
            });

         inventoryPage.productDescriptions.first().invoke('text').then((description) => {
        cy.log('Product description: ' + description.trim());
            });

        inventoryPage.removeProductButton.first().should('be.visible').and('have.text','Remove');
        inventoryPage.shoppingCartquantity.invoke('text').then((quantity)=>{
            cy.log("The quantity in the cart is: " +quantity);
        })

        inventoryPage.cartButton.click();
        cy.url().should('include','cart.html');
        cartPage.removeProductButtonInCart.first().should('be.visible').and('have.text',"Remove").click();        
        cartPage.shoppingCartquantity.should('not.exist');

        })

        it('add product to cart, open cart, remove product from cart and click continue shopping',
            function(){
              cy.fixture('dataInputs',).then((data :LoginData) =>{
              cy.visit(data.baseURL);
              cy.login(data.standardUser,data.password);
        })
        cy.url().should('include','inventory.html');

        inventoryPage.productNames.eq(3).scrollIntoView();
        inventoryPage.addToCartButtons.eq(3).should('have.text','Add to cart').click();
        inventoryPage.productNames.eq(3).invoke('text').then((name) => {
        cy.log('Product name: ' + name.trim());
            });

        inventoryPage.priceOfTheProducts.eq(3).invoke('text').then((price) => {
        cy.log('Product price: ' + price.trim());
            });

         inventoryPage.productDescriptions.eq(3).invoke('text').then((description) => {
        cy.log('Product description: ' + description.trim());
            });

        inventoryPage.removeProductButton.first().should('be.visible').and('have.text','Remove');
        inventoryPage.shoppingCartquantity.invoke('text').then((quantity)=>{
            cy.log("The quantity in the cart is: " +quantity);
        })

        inventoryPage.cartButton.click();
        cy.url().should('include','cart.html');
        cartPage.removeProductButtonInCart.first().should('be.visible').and('have.text','Remove').click();
        cartPage.continueShoppingButton.should('be.visible').and('have.text','Continue Shopping').click();
        cy.url().should('include','inventory.html');
        inventoryPage.shoppingCartquantity.should('not.exist');



        })

 it('add the first three products, open cart and assert the names and descriptions',function(){

              cy.fixture('dataInputs',).then((data :LoginData) =>{
              cy.visit(data.baseURL);
              cy.login(data.standardUser,data.password);
        })
        cy.url().should('include','inventory.html');
        const addedProductNames: string[] = [];
        const addedProductDescription: string[] = [];


        inventoryPage.productNames.each(($el, index) => {
            if (index < 3) {
         addedProductNames.push($el.text().trim());
             }
});
         inventoryPage.productDescriptions.each(($el, index) => {
            if (index < 3) {
         addedProductDescription.push($el.text().trim());
             }
});

        inventoryPage.addFirstNProducts(3);
        inventoryPage.shoppingCartquantity.invoke('text').then((quantity)=>{
            cy.log("The quantity in the cart is: " +quantity);
        })
        inventoryPage.cartButton.click();
        cy.url().should('include','cart.html');
        cartPage.productNamesInCart.then(($cartItems) => {
        const cartProductNames = [...$cartItems].map((el) => el.innerText.trim());
        expect(cartProductNames).to.deep.equal(addedProductNames);

        cartPage.productDescriptionsInCart.then(($cartItems) => {
        const cartProductDescription = [...$cartItems].map((el) => el.innerText.trim());
        expect(cartProductDescription).to.deep.equal(addedProductDescription);




    });

        })
 })
});