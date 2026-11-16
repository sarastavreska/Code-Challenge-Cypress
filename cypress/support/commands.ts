/// <reference types="cypress" />

import { CheckoutPageStepOne } from "../pages/CheckoutPageStepOne";
import { LoginPage } from "../pages/LoginPage";

const checkoutPageStepOne = new CheckoutPageStepOne();
const loginPage= new LoginPage();

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>;
      fillStepOneCheckout(firstName:string, lastName:string,postalCode:string): Chainable<void>;
      
    }
  }
}
Cypress.Commands.add('login',(username:string, password:string)=>{

    cy.clearCookies();
    cy.clearLocalStorage();
    loginPage.username.type(username);
    loginPage.password.type(password,{log:false});
    loginPage.loginButton.click();
})

Cypress.Commands.add('fillStepOneCheckout',(firstName:string, lastName:string,postalCode:string) =>{

  checkoutPageStepOne.firstNameInput.type(firstName);
  checkoutPageStepOne.lastNameInput.type(lastName);
  checkoutPageStepOne.postalCodeInput.type(postalCode);
})

export{};