export class CartPage {
    
    get productNamesInCart(){
        return cy.get('[data-test="inventory-item-name"]');
    }
     get productDescriptionsInCart(){
        return cy.get('[data-test="inventory-item-desc"]');
    }
    get priceOfTheProductsInCart(){
        return cy.get('[data-test="inventory-item-price"]');
    }
    get removeProductButtonInCart (){

        return cy.get('[id^="remove-"]');
    }
    get continueShoppingButton (){

        return cy.get('[data-test="continue-shopping"]');
    }
    get checkoutButton(){
        return cy.get('[data-test="checkout"]'); 

    }
    get shoppingCartquantity (){

        return cy.get('[data-test="shopping-cart-badge"]');
    }
    

}