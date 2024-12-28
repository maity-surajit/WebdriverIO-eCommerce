import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.ts'
import homePage from '../pageobjects/home.page.ts';
import cartPage from '../pageobjects/cart.page.ts';
import checkoutPage from '../pageobjects/checkout.page.ts';
import confirmationPage from '../pageobjects/confirmation.page.ts';
const loginDetails = require('../testData/logindetails.json'); 
const HomePageData = require('../testData/homePage.json'); 



describe('E2E test check eCommerce application', async () => {
   
    beforeEach(async function() {
        await LoginPage.goTo();
        await LoginPage.login(loginDetails.username, loginDetails.password);
    })

    afterEach(async function() {      
        await homePage.signOutBtn.click();
        await LoginPage.btnSubmit.waitForDisplayed({timeout: 5000});
    })

    it('should login with valid credentials', async () => {
        await LoginPage.lastDivElement.waitForEnabled({timeout:10000, timeoutMsg: 'Last Div Element not Enabled'});
        await LoginPage.lastDivElement.waitForDisplayed({timeout:10000, timeoutMsg: 'Last Div Element not displayed'});
        await LoginPage.lastDivElement.waitForClickable({timeout:10000, timeoutMsg: 'Last Div Element not Clickable'});
        await expect(homePage.headerEle).toExist();
        await expect(homePage.headerEle).toBeDisplayedInViewport();
        await expect(homePage.headerEle).toHaveText(HomePageData.headerText);
        await expect(browser).toHaveTitle(HomePageData.title);  
       
    });

    it("E2E Test: product select, Add To Cart and Check out", async ()=> {

        // Home page

        await LoginPage.lastDivElement.waitForEnabled({timeout:10000, timeoutMsg: 'Last Div Element not Enabled'});
        await LoginPage.lastDivElement.waitForDisplayed({timeout:10000, timeoutMsg: 'Last Div Element not displayed'});
        await LoginPage.lastDivElement.waitForClickable({timeout:10000, timeoutMsg: 'Last Div Element not Clickable'});

        await homePage.itemSelect(HomePageData.itemName);

        await expect(homePage.Ele).toHaveAttribute('class', 'btn w-10 rounded', {wait: 7000});

        // Cart Page

        await homePage.cartBtn.click();

        await expect(cartPage.cartElement).toBeDisplayedInViewport({wait:10000});
        await expect(cartPage.checkoutBtn).toBeDisplayedInViewport();
       
       // checkout page

        await cartPage.checkoutBtn.click();
        await expect(checkoutPage.countryField).toBeDisplayedInViewport({wait:10000});
        await expect(checkoutPage.countryField).toBeClickable();

        await checkoutPage.searchCountryName('India');
        
        // confirmation page

        await checkoutPage.placeOrderBtn.click();
        await expect(confirmationPage.confirmMsg).toBeDisplayedInViewport();
        await expect(confirmationPage.confirmMsg).toHaveText("THANKYOU FOR THE ORDER.", {containing: true});

    });
});