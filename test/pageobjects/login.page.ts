import { $ } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {

    public get inputUsername () {
        return $('#userEmail');
    }

    public get inputPassword () {
        return $('#userPassword');
    }

    public get btnSubmit () {
        return $('#login');
    }

    public get lastDivElement() {
        return $("section[id='products']>div:first-of-type>div:last-of-type>div:last-of-type>div>div>h5>b");
    }


    public async login(username: string, password: string): Promise<void> {
        await browser.setWindowSize(1920,1080);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await this.lastDivElement.waitForEnabled({timeout:10000, timeoutMsg: 'Last Div Element not Enabled'});
        await this.lastDivElement.waitForDisplayed({timeout:10000, timeoutMsg: 'Last Div Element not displayed'})
        await this.lastDivElement.waitForClickable({timeout:10000, timeoutMsg: 'Last Div Element not Clickable'});
    }

    // public async login (username: string, password: string) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    public goTo (): Promise<void | WebdriverIO.Request> {
        return super.goTo();
    }
}

export default new LoginPage();
