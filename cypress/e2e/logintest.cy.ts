interface LoginData {
    baseURL: string;
    standardUser: string;
    password: string;
    requiredFieldsEmpty:string;
    requiredUsernameErrorMessage:string;
}

import { LoginPage } from '../pages/LoginPage';


describe('login tests', function(){

    const loginPage = new LoginPage();

    it('successful log in using command', function(){
                cy.visit('https://www.saucedemo.com/');
                cy.fixture('example',).then((data :LoginData) =>{
                cy.login(data.standardUser,data.password);
                cy.url().should('include','www.saucedemo.com/');


    });

    it('successful login standard user', function(){
       
      
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('example',).then((data :LoginData) =>{
        loginPage.username.type(data.standardUser);
        loginPage.password.type(data.password);
        })
        loginPage.loginButton.click();
        cy.url().should('include','www.saucedemo.com/');
});

it('check required fields', function(){
    cy.fixture('example').then((data: LoginData) => {

            cy.visit('https://www.saucedemo.com/');
            loginPage.loginButton.click();
            loginPage.requiredErrorMessage.invoke('text').then((text)=>{
            cy.log(text);

            });
})

    });

    it('leave username input empty',function(){
            cy.fixture('example').then((data: LoginData) => {

            cy.visit('https://www.saucedemo.com/');
            loginPage.password.type(data.password);

            loginPage.loginButton.click();
            cy.wait(6000);
            /*
            loginPage.requiredErrorMessage.should('be.visible').and('contain.text',data.requiredUsernameErrorMessage);
            console.log(data.requiredUsernameErrorMessage);
            /*  loginPage.requiredErrorMessage.invoke('text').then((text)=>{
            cy.log(text);
            */
           /*
           loginPage.requiredErrorMessage
    .should('be.visible')
    .invoke('text')
    .then((actualText) => {
        cy.log('Actual: ' + actualText);
        cy.log('Expected: ' + data.requiredUsernameErrorMessage);

        expect(actualText.trim()).to.equal(data.requiredUsernameErrorMessage);
    });
*/
            });


    })

})
})
