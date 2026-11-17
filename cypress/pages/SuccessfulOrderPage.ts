export class SuccessfulOrderPage {

        get successfulOrderHeader (){

            return cy.get('[data-test="complete-header"]');
        }

        get successfulOrderText (){

            return cy.get('[data-test="complete-text"]');
        }

        get backHomeButton (){

            return cy.get('[data-test="back-to-products"]');
        }

        get generatePDFOrderButton(){

            return cy.get('[data-test="generate-pdf-order"]')
        }

}