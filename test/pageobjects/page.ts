import { browser } from '@wdio/globals'

export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public goTo (): Promise<void | WebdriverIO.Request> {
        return browser.url(`https://rahulshettyacademy.com/client`)
    }
}
