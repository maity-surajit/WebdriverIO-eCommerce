class Cart {

    get cartElement(): ChainablePromiseElement { //define return type
        return $("div[class='cartSection'] h3");
    }

    get checkoutBtn(): ChainablePromiseElement { //define return type
        return $("ul li button[class='btn btn-primary']:last-of-type");
    }


    // async cartItemVisible(): Promise<void> {


    //     await this.cartElement.isDisplayed()
        
    // }

    // async clickOnCheckoutBtn(): Promise<void> {

    //     await expect(this.checkoutBtn).toBePresent();
    //     await expect(this.checkoutBtn).toBeDisplayedInViewport();
        
    //     await this.checkoutBtn.click();
    // }
}


export default new Cart();
