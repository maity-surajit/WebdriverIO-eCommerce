class Confirmation {

    get confirmMsg() {
        return $(".hero-primary");
    }

    async verifyTheOrderConfirmationMessage(): Promise<void> {
        await expect(this.confirmMsg).toBeDisplayedInViewport();
        await expect(this.confirmMsg).toHaveText(expect.stringContaining("THANKYOU FOR THE ORDER."));
    }
}

export default new Confirmation();