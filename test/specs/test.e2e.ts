import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.ts'
import homePage from '../pageobjects/home.page.ts';
import cartPage from '../pageobjects/cart.page.ts';
import checkoutPage from '../pageobjects/checkout.page.ts';
import confirmationPage from '../pageobjects/confirmation.page.ts';
const loginDetails = require('../testData/logindetails.json');
const HomePageData = require('../testData/homePage.json');


describe('E2E test check eCommerce application', () => {
    it.skip('should login with valid credentials', async () => {
        await LoginPage.goTo();
        await LoginPage.login(loginDetails.username, loginDetails.password);
        await expect(homePage.headerEle).toExist();
        await expect(homePage.headerEle).toBeDisplayedInViewport();
        await expect(homePage.headerEle).toHaveText(HomePageData.headerText);
        await expect(browser).toHaveTitle(HomePageData.title);
       
    });

    it("E2E Test: product select, Add To Cart and Check out", async ()=> {
        await LoginPage.goTo();
        await LoginPage.login(loginDetails.username, loginDetails.password);
        await homePage.itemSelect(HomePageData.itemName);
        await homePage.checkEleAttributeForClass();
        await homePage.clickOnTheCartBtn();

        await cartPage.cartItemVisible();
        await cartPage.clickOnCheckoutBtn();

        await checkoutPage.searchCountryName('India');
        await checkoutPage.placeAnOrder();

        await confirmationPage.verifyTheOrderConfirmationMessage();
    });
});