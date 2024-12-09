class Checkout{

    public get countryField() {
        return $("input[placeholder='Select Country']");
    }

    public get countrySearchList() {
        return $$("section[class*='ta-results'] button span");
    }

    public get placeOrderBtn() {
        return $("a[class*='action__submit']");
    }

    async searchCountryName(name: string): Promise<void> {

        await expect(this.countryField).toBePresent();
        await expect(this.countryField).toBeClickable();
        await expect(this.countryField).toBeDisplayedInViewport();
           
        await this.countryField.setValue(name);

        await expect(this.countryField).toHaveValue(name);

        const lastELeDisplayed = $("section[class*='ta-results']>button:last-of-type>span");
        
        await expect(lastELeDisplayed).toBeDisplayedInViewport({wait: 5000});

        const countriesList: ChainablePromiseArray = await $$("section[class*='ta-results'] button>span");

        const countryName:ChainablePromiseElement = await countriesList.find(async (country: ChainablePromiseElement) => {
            //return await country.getText().includes(name);
            const text = await country.getText();
            if(text === name){
                return country;
            }
           
        })
        await expect(countryName).toHaveText(expect.stringMatching(name)); 
        
        await countryName.click();
        
    }

    async placeAnOrder(): Promise<void> {
        await this.placeOrderBtn.click();
    }

}

export default new Checkout();