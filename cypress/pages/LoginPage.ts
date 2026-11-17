 export class LoginPage {

    get username(){

        return cy.get('[data-test="username"]');

    } 

    get password (){
        return cy.get('[data-test="password"]');
    }

    get loginButton(){
        return cy.get('[data-test="login-button"]');
    }

    get requiredErrorMessage(){

        return cy.get('[data-test="error"]');
    }


}
