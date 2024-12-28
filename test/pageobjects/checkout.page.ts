class Checkout{

    get countryField(): ChainablePromiseElement {
        return $("input[placeholder='Select Country']");
    }

    get countrySearchList(): ChainablePromiseArray {
        return $$("section[class*='ta-results'] button span");
    }

    get placeOrderBtn(): ChainablePromiseElement {
        return $("a[class*='action__submit']");
    }

    async searchCountryName(name: string): Promise<void> {
           
        await this.countryField.setValue(name);

        await expect(this.countryField).toHaveValue(name);

        const lastELeDisplayed = $("section[class*='ta-results']>button:last-of-type>span");
        
        await expect(lastELeDisplayed).toBeDisplayedInViewport({wait: 5000});

        const countriesList: ChainablePromiseArray = await $$("section[class*='ta-results'] button>span");

        const countryName:ChainablePromiseElement | undefined = await countriesList.find(async (country: ChainablePromiseElement) => {

        const text = await country.getText();
            if(text === name){
                return country;
            }
           
        })
        await expect(countryName).toHaveText(name, {containing: true}); 
        
        await countryName.click();
        
    }

}

export default new Checkout();