class Confirmation {
  get confirmMsg(): ChainablePromiseElement {
    return $(".hero-primary");
  }

  async verifyTheOrderConfirmationMessage(): Promise<void> {
    await expect(this.confirmMsg).toBeDisplayedInViewport();
    await expect(this.confirmMsg).toHaveText(
      expect.stringContaining("THANKYOU FOR THE ORDER."),
      { containing: true, ignoreCase: true }
    );
  }
}

export default new Confirmation();
