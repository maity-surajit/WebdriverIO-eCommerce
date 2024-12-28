import { $ } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {
    //define all getter method return type
    get inputUsername(): ChainablePromiseElement {
        return $('#userEmail');
    }

    get inputPassword(): ChainablePromiseArray {
        return $('#userPassword');
    }

    get btnSubmit(): ChainablePromiseElement {
        return $('#login');
    }

    get lastDivElement(): ChainablePromiseElement {
        return $("section[id='products']>div:first-of-type>div:last-of-type>div:last-of-type>div>div>h5>b");
    }


    async login(username: string, password: string): Promise<void> {
        await browser.setWindowSize(1920,1080);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();

    }
    
    goTo (): Promise<void | WebdriverIO.Request> {
        return super.goTo();
    }
}

export default new LoginPage();
