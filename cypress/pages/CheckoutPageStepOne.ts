export class CheckoutPageStepOne {

    get firstNameInput (){

        return cy.get('#first-name');
    }

    get lastNameInput(){

        return cy.get('#last-name');
    }

    get postalCodeInput(){
        return cy.get('#postal-code');
    }

    get continueButton(){
        return cy.get('#continue');
    }

    get cancelButton(){
        return cy.get('#cancel');
        
    }

    
}