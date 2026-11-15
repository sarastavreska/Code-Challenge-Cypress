 export class LoginPage {

    get username(){

        return cy.get('#user-name');

    } 

    get password (){
        return cy.get('#password');
    }

    get loginButton(){
        return cy.get('#login-button');
    }

    get requiredErrorMessage(){

        return cy.get('[data-test="error"]');
    }


}
