import { test, expect } from '@playwright/test';
import {POManager} from '../pageobjects/POManager.js';

const regularUserFile = '../.auth/admin.json';
const problemUserFile = '../.auth/user.json';

let homePage;
let homeLogo;

test.beforeEach(async ({page}) => {
  const poManager = new POManager(page);
  homePage = poManager.getHomePage();
  homeLogo = homePage.homeLogo;

})

test.describe(' @regular_user tests with regular user',() => {
  test.use({ storageState: regularUserFile })
  test(' @Web login with regular user', async () => {
    await homePage.goToHomePage();
    await expect(homeLogo).toBeVisible();

  })

});

test.describe(' @Problem_user tests with problem user',() => {
  test.use({ storageState: problemUserFile });

  test(' @Web login with problem user', async () => {
    await homePage.goToHomePage();
    await expect(homeLogo).toBeVisible();

  })

});
