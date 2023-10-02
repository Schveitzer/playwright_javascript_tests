import { test, expect } from '@playwright/test';
import {POManager} from '../pageobjects/POManager.js';

const regularUserFile = '../.auth/admin.json';

let homePage;
let cartContainer;

test.use({ storageState: regularUserFile })
test.beforeEach(async ({page}) => {
  const poManager = new POManager(page);
  homePage = poManager.getHomePage();
  cartContainer = homePage.cartContainer;

})

test(' @Web add product in cart', async () => {

  await homePage.goToHomePage();
  await homePage.addProductToCart();
  await homePage.goToCartPage();
  await expect(cartContainer).toHaveText(/Sauce Labs Backpack/);
})