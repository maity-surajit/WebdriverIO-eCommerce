class Checkout {
  get countryField(): ChainablePromiseElement {
    return $("input[placeholder='Select Country']");
  }

  get countrySearchList(): ChainablePromiseArray {
    return $$("section[class*='ta-results'] button span");
  }

  get placeOrderBtn(): ChainablePromiseElement {
    return $("a[class*='action__submit']");
  }

  get countrySearchResult() {
    return $$("section[class*='ta-results'] button>span");
  }

  async searchCountryName(name: string): Promise<void> {
    await this.countryField.setValue(name);
    const countriesList: ChainablePromiseArray = await $$(
      "section[class*='ta-results'] button>span"
    );
    await browser.waitUntil(
      async () => {
        return await $(
          "section[class*='ta-results']>button:last-of-type>span"
        ).waitForDisplayed();
      },
      {
        timeout: 10000,
        timeoutMsg: `Country name not found.`,
      }
    );
    const countryName: ChainablePromiseElement | undefined =
      await countriesList.find(async (country: ChainablePromiseElement) => {
        return await country.getText().includes(name);
      });
    await countryName.waitForDisplayed();
    await countryName.click();
  }
}

export default new Checkout();
