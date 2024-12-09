import { $ } from '@wdio/globals'
import Page from './page';

class HomePage extends Page {

    public get headerEle () {
        return $("//h3[text()='Automation']");
    }

    public get Ele() {
        return $("section[id='products']>div:first-of-type>div:last-of-type>div:last-of-type>div>div>button:last-of-type");
    }

    public get cart() {
        return $("button[routerlink*='/cart']");
    }

    public get confirmationCartToastEle() {
        return $("#toast-container>div");
    }

    public async itemSelect(itemName: string): Promise<void> {
        const items: ChainablePromiseArray = $$('.card-body');
        const itemEle: ChainablePromiseElement = items.find(async (item: ChainablePromiseElement) => {
            return (await item.$('b').getText()).includes(itemName);
        });

        await itemEle.$("button:last-of-type").click();
        
    }

    public async clickOnTheCartBtn(): Promise<void> {
        
        await this.cart.click();

    }

    public async checkEleAttributeForClass(): Promise<void> {
        await expect(this.Ele).toHaveAttribute('class', 'btn w-10 rounded');
    }
    
    /*

    public async itemSelect() {

        const items: ChainablePromiseArray = await $$('.card-body');

        for (let i = 0; i < items.length; i++) {
        
            const item: ChainablePromiseElement = items[i];
            
    
            const itemText: string = await item.$('b').getText();
            console.log("iteatext-->",itemText);
            if (itemText.includes("IPHONE 13 PRO")) {
              
                const button = await item.$('button:last-of-type');
                await button.click();
                break; 
            }
        }
    }
    */
}

export default new HomePage();
