 export class InventoryPage {

    get cartButton (){
        return cy.get('[data-test="shopping-cart-link"]');
    }
    get shoppingCartquantity (){

        return cy.get('[data-test="shopping-cart-badge"]');
    }
    get products(){
        return cy.get('[data-test="inventory-item"]');
    }
    get addToCartButtons() {
    return cy.get('[id^="add-to-cart-"]');
}
    get priceOfTheProducts(){
        return cy.get('[data-test="inventory-item-price"]');
    }
    get productDescriptions(){
        return cy.get('[data-test="inventory-item-desc"]');
    }

    get productNames(){
        return cy.get('[data-test="inventory-item-name"]');
    }
    get productFilterSelect(){

        return cy.get('[data-test="product-sort-container"]');
    }

    get removeProductButton (){

        return cy.get('[id^="remove-"]');
    }

     get productDetailsImages() {
    return cy.get('[data-test^="inventory-item-"][data-test$="-img"]');
}

    addFirstNProducts(count: number) {
    for (let i = 0; i < count; i++) {
        this.addToCartButtons.eq(0).click();
    }
}



}