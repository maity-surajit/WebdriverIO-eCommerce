import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.ts";
import HomePage from "../pageobjects/home.page.ts";
import CartPage from "../pageobjects/cart.page.ts";
import CheckoutPage from "../pageobjects/checkout.page.ts";
import ConfirmationPage from "../pageobjects/confirmation.page.ts";
const LoginDetails = require("../testData/logindetails.json");
const HomePageData = require("../testData/HomePage.json");

describe("E2E test check eCommerce application", async () => {
  beforeEach(async function () {
    await LoginPage.goTo();
    await LoginPage.login(LoginDetails.username, LoginDetails.password);
  });

  afterEach(async function () {
    await HomePage.signOutBtn.click();
    await LoginPage.btnSubmit.waitForDisplayed({ timeout: 5000 });
  });

  it("should login with valid credentials", async () => {
    await LoginPage.lastDivElement.waitForEnabled({
      timeout: 10000,
      timeoutMsg: "Last Div Element not Enabled",
    });
    await LoginPage.lastDivElement.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Last Div Element not displayed",
    });
    await LoginPage.lastDivElement.waitForClickable({
      timeout: 10000,
      timeoutMsg: "Last Div Element not Clickable",
    });
    await expect(HomePage.headerEle).toExist();
    await expect(HomePage.headerEle).toBeDisplayedInViewport();
    await expect(HomePage.headerEle).toHaveText(HomePageData.headerText);
    await expect(browser).toHaveTitle(HomePageData.title);
  });

  it("E2E Test: product select, Add To Cart and Check out", async () => {
    // Home page
    await LoginPage.lastDivElement.waitForEnabled({
      timeout: 10000,
      timeoutMsg: "Last Div Element not Enabled",
    });
    await LoginPage.lastDivElement.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Last Div Element not displayed",
    });
    await LoginPage.lastDivElement.waitForClickable({
      timeout: 10000,
      timeoutMsg: "Last Div Element not Clickable",
    });
    await HomePage.itemSelect(HomePageData.itemName);
    await expect(HomePage.Ele).toHaveAttribute("class", "btn w-10 rounded", {
      wait: 7000,
    });

    // Cart Page
    await HomePage.cartBtn.click();
    await expect(CartPage.cartElement).toBeDisplayedInViewport({ wait: 10000 });
    await expect(CartPage.checkoutBtn).toBeDisplayedInViewport();

    // Checkout page
    await CartPage.checkoutBtn.click();
    await expect(CheckoutPage.countryField).toBeDisplayedInViewport({
      wait: 10000,
    });
    await expect(CheckoutPage.countryField).toBeClickable();
    await CheckoutPage.searchCountryName("India");

    // Confirmation page
    await CheckoutPage.placeOrderBtn.click();
    await expect(ConfirmationPage.confirmMsg).toBeDisplayedInViewport();
    await expect(ConfirmationPage.confirmMsg).toHaveText(
      "THANKYOU FOR THE ORDER.",
      { containing: true }
    );
  });
});
