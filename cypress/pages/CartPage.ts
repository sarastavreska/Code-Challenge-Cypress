export class CartPage {
    
    get productNamesInCart(){
        return cy.get('.inventory_item_name');
    }
     get productDescriptionsInCart(){
        return cy.get('.inventory_item_desc');
    }
    get priceOfTheProductsInCart(){
        return cy.get('.inventory_item_price');
    }
    get removeProductButtonInCart (){

        return cy.get('[id^="remove-"]');
    }
    get continueShoppingButton (){

        return cy.get('#continue-shopping');
    }
    get checkoutButton(){
        return cy.get('#checkout'); 

    }
    get shoppingCartquantity (){

        return cy.get(".shopping_cart_badge");
    }
    

}