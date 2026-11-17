interface LoginData {
    baseURL: string;
    standardUser: string;
    errorUser:string;
    lockedUser:string;
    problemUser:string
    password: string;
    requiredFieldsEmpty:string;
    requiredUsernameErrorMessage:string;
}

import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';

describe('login tests', function(){

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const productDetailsPage = new ProductDetailsPage();

    it('successful login standard user', function(){
                cy.fixture('dataInputs',).then((data :LoginData) =>{
                cy.visit(data.baseURL);
                cy.login(data.standardUser,data.password);
                cy.url().should('include','www.saucedemo.com/');


    });
     });


        it('check required fields', function(){
            cy.fixture('dataInputs').then((data: LoginData) => {
            cy.visit(data.baseURL);
            loginPage.loginButton.click();
            loginPage.requiredErrorMessage.should('have.text',"Epic sadface: Username is required");
            loginPage.requiredErrorMessage.invoke('text').then((text)=>{
            cy.log(text);

            });
})

    });

    it('leave username input empty',function(){
            cy.fixture('dataInputs').then((data: LoginData) => {
            cy.visit(data.baseURL);
            loginPage.password.type(data.password);
            loginPage.loginButton.click();            
            loginPage.requiredErrorMessage.should('contain.text',"Epic sadface: Username is required");
            loginPage.requiredErrorMessage.invoke('text').then((text)=>{
            cy.log(text);
    });
            })


    })

    it('login with locked user',function(){
            cy.fixture('dataInputs').then((data:LoginData)=>{
            cy.visit(data.baseURL);
            cy.login(data.lockedUser,data.password);            
            loginPage.requiredErrorMessage.should('contain.text',"Epic sadface: Username and password do not match any user in this service");
            loginPage.requiredErrorMessage.invoke('text').then((text)=>{
            cy.log(text);    
            })


    })
    });
    it('login with error user, add fleece jacket',function(){

            cy.fixture('dataInputs').then((data:LoginData)=>{
            cy.visit(data.baseURL);
            cy.login(data.errorUser,data.password);
            cy.url().should('include','inventory.html');

            
            inventoryPage.addToCartButtons .filter('#add-to-cart-sauce-labs-fleece-jacket').
            should('be.visible').and('have.text','Add to cart').click();
            inventoryPage.removeProductButton.filter('#remove-sauce-labs-fleece-jacket').should('be.visible');


    })

            })


            it('login with problem user',function(){

            cy.fixture('dataInputs').then((data:LoginData)=>{
            cy.visit(data.baseURL);
            cy.login(data.problemUser,data.password);
            cy.url().should('include','inventory.html');
            inventoryPage.productDetailsImages.filter('[data-test="inventory-item-sauce-labs-onesie-img"]').
            invoke('attr','alt').then((altText)=> {
                    cy.log('Image alt text is: ' + altText);
   
            inventoryPage.addToCartButtons .filter('#add-to-cart-sauce-labs-onesie').
            should('be.visible').and('have.text','Add to cart');
            inventoryPage.productDetailsImages
            .filter('[data-test="inventory-item-sauce-labs-onesie-img"]')
            .click();

            productDetailsPage.productDetailsImage.invoke('attr','alt').then((altTextProduct) =>{
                cy.log('Image alt text is: ' +altTextProduct);

        
           
            expect(altText).to.equal(altTextProduct);
             });
              });
        })

    })
        });
    

