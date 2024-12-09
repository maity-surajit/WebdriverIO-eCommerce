class Cart {

    public get cartElement() {
        return $("div[class='cartSection'] h3");
    }

    public get checkoutBtn() {
        return $("ul li button[class='btn btn-primary']:last-of-type");
    }


    async cartItemVisible(): Promise<void> {
        await expect(this.cartElement).toBePresent();
        await expect(this.cartElement).toBeDisplayedInViewport();

        await this.cartElement.isDisplayed()
        
    }

    async clickOnCheckoutBtn(): Promise<void> {

        await expect(this.checkoutBtn).toBePresent();
        await expect(this.checkoutBtn).toBeDisplayedInViewport();
        
        await this.checkoutBtn.click();
    }
}


export default new Cart();
