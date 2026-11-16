interface LoginData {
    baseURL: string;
    standardUser: string;
    password: string;
    requiredFieldsEmpty:string;
    requiredUsernameErrorMessage:string;
    lockedUser:string;
}

import { LoginPage } from '../pages/LoginPage';


describe('login tests', function(){

    const loginPage = new LoginPage();

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

})
});
