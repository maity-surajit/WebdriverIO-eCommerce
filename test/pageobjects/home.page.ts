import { $ } from '@wdio/globals'
import Page from './page';

class HomePage extends Page {
    // define all getter method return type
    get headerEle(): ChainablePromiseElement {
        return $("//h3[text()='Automation']");
    }

    get Ele(): ChainablePromiseElement {
        return $("section[id='products']>div:first-of-type>div:last-of-type>div:last-of-type>div>div>button:last-of-type");
    }

    get cartBtn(): ChainablePromiseElement {
        return $("button[routerlink*='/cart']");
    }

    get confirmationCartToastEle(): ChainablePromiseElement {
        return $("#toast-container>div");
    }

    get signOutBtn(): ChainablePromiseElement {
        return $(".fa-sign-out")
    }

    async itemSelect(itemName: string): Promise<void> {
        const items: ChainablePromiseArray = $$('.card-body');
        const itemEle: ChainablePromiseElement = items.find(async (item: ChainablePromiseElement) => {
            return (await item.$('b').getText()).includes(itemName);
        });

        await itemEle.$("button:last-of-type").click();
        
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
