 export class InventoryPage {

    get cartButton (){
        return cy.get(".shopping_cart_link");
    }
    get shoppingCartquantity (){

        return cy.get(".shopping_cart_badge");
    }
    get products(){
        return cy.get(".inventory_item");
    }
    get addToCartButtons() {
    return cy.get('[id^="add-to-cart-"]');
}
    get priceOfTheProducts(){
        return cy.get('.inventory_item_price');
    }
    get productDescriptions(){
        return cy.get('.inventory_item_desc');
    }

    get productNames(){
        return cy.get('.inventory_item_name');
    }
    get productFilterSelect(){

        return cy.get('.product_sort_container');
    }

    get removeProductButton (){

        return cy.get('[id^="remove-"]');
    }
    
    addFirstNProducts(count: number) {
    for (let i = 0; i < count; i++) {
        this.addToCartButtons.eq(0).click();
    }
}



}