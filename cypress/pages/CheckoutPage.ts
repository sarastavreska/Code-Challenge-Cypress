export class CheckoutPage {

    get firstNameInput (){

        return cy.get('[data-test="firstName"]');
    }

    get lastNameInput(){

        return cy.get('[data-test="lastName"]');
    }

    get postalCodeInput(){
        return cy.get('[data-test="postalCode"]');
    }

    get continueButton(){
        return cy.get('[data-test="continue"]');
    }

    get cancelButton(){
        return cy.get('[data-test="cancel"]');
        
    }
    get finishButton (){
            return cy.get('[data-test="finish"]');

    }

    get productNamesOnCheckout(){
        return cy.get('[data-test="inventory-item-name"]');
    }

    get productPricesOnCheckout(){
        return cy.get('[data-test="inventory-item-price"]');
    }

    get productDescriptionsOnCheckout(){
        return cy.get('[data-test="inventory-item-desc"]');
    }

    get productQuantitiesOnCheckout(){
        return cy.get('[data-test="item-quantity]');
    }

    get paymentInformatin(){

        return cy.get('[data-test="payment-info-value"]');
    }

    get shippingInfo (){
        return cy.get('[data-test="shipping-info-value"]');
    }

    get subtotalPrice (){
        return cy.get('[data-test="subtotal-label"]');
    }

    get taxPrice (){

        return cy.get('[data-test="tax-label"]');
    }

    get totalPrice(){

        return cy.get('[data-test="total-label"]');
    }




}