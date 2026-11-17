export class ProductDetailsPage {

     get productName(){
        return cy.get('[data-test="inventory-item-name"]');
    }
    get productDescription(){
        return cy.get('[data-test="inventory-item-desc"]');
    }

    get priceOfTheProduct(){
        return cy.get('[data-test="inventory-item-price"]');
    }
     get addToCartButtons() {
    return cy.get('#add-to-cart-');
    }
    get productDetailsImage() {
    return cy.get('[data-test^="item-"][data-test$="-img"]');
}

}