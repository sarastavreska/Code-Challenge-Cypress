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


describe('products tests', function(){

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const cartPage =new CartPage ();

    it('standard user add a product, verify remove button', function(){
       
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



})

            it('add the first product then unadd and verify button add to cart',function(){

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

        inventoryPage.removeProductButton.should('be.visible').and('have.text','Remove').click();
         inventoryPage.shoppingCartquantity.should('not.exist');
    


            })
    
    })

        
