import { $ } from "@wdio/globals";
import Page from "./page";

class HomePage extends Page {
  get headerEle(): ChainablePromiseElement {
    return $("//h3[text()='Automation']");
  }

  get Ele(): ChainablePromiseElement {
    return $(
      "section[id='products']>div:first-of-type>div:last-of-type>div:last-of-type>div>div>button:last-of-type"
    );
  }

  get cartBtn(): ChainablePromiseElement {
    return $("button[routerlink*='/cart']");
  }

  get confirmationCartToastEle(): ChainablePromiseElement {
    return $("#toast-container>div");
  }

  get signOutBtn(): ChainablePromiseElement {
    return $(".fa-sign-out");
  }

  async itemSelect(itemName: string): Promise<void> {
    const items: ChainablePromiseArray = $$(".card-body");
    const itemEle: ChainablePromiseElement = items.find(
      async (item: ChainablePromiseElement) => {
        return (await item.$("b").getText()).includes(itemName);
      }
    );
    await itemEle.$("button:last-of-type").click();
  }
}

export default new HomePage();
