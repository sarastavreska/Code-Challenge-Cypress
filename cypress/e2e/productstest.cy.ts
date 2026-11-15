interface LoginData {
    baseURL: string;
    standardUser: string;
    password: string;
    requiredFieldsEmpty:string;
    requiredUsernameErrorMessage:string;
}

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
describe('login tests', function(){

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    it('standard user add first product, verify remove button', function(){
       
      
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('example',).then((data :LoginData) =>{
        cy.login(data.standardUser,data.password);
        })
        cy.url().should('include','inventory.html');

        inventoryPage.productNames.eq(3).scrollIntoView();
        inventoryPage.addToCartButtons.eq(3).click();
        inventoryPage.addToCartButtons.eq(3).should('have.text','Add to cart');
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



})

         it('standard user add first product and open cart', function(){
       
      
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('example',).then((data :LoginData) =>{
        cy.login(data.standardUser,data.password);
        })
        cy.url().should('include','inventory.html');

        inventoryPage.productNames.eq(3).scrollIntoView();
        inventoryPage.addToCartButtons.eq(3).click();
        inventoryPage.addToCartButtons.eq(3).should('have.text','Add to cart');
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

it('add first product, open cart and verify the product price, desription',function(){

})

it('add first product, open cart and verify the product price, desription and remove product',function(){

})
        
        });
