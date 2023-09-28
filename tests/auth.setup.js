import { test as setup, expect } from '@playwright/test';
import {storageState} from '../utils/storageStates.js'
import {credentials} from '../utils/test_data/credentials.js'
import {POManager} from '../pageobjects/POManager.js'

// TODO: Join all authentication perform in one function with for()
// TODO: Add conditional, if already logged in don´t perform login.

// More about authentication see https://playwright.dev/docs/auth

// Perform authentication and save state for regular user

setup(' @Setup authenticate as regular user', async ({ page }) => {
    // Perform authentication steps.
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.doLogin(credentials.regular_user.username, credentials.regular_user.password)

    // Assert if login is correct
    const homePage = poManager.getHomePage();
    const homeLogo = homePage.homeLogo;
    await expect(homeLogo).toBeVisible();

    // End of authentication steps.

    // await context.storageState({ path: storageState.regularUserFile });
    await page.context().storageState({ path: storageState.regularUserFile });
    await page.context().close();
});


// Perform authentication and save state for regular user
setup(' @ Setup authenticate as problem user', async ({ page }) => {
    // Perform authentication steps.
    await page.goto("/");
    const usernameFiled = page.getByTestId("username");
    await usernameFiled.fill(credentials.problem_user.username);
    const passwordField = page.getByTestId("password");
    await passwordField.fill(credentials.problem_user.password);
    const loginButton = page.getByTestId('login-button')
    await loginButton.click();

    // Wait until the page receives the cookies.
    // Wait for the final URL to ensure that the cookies are actually set.
    await page.waitForLoadState('networkidle');
    
    // Alternatively, you can wait until the page reaches a state where all cookies are set.
    const homeLogo = page.getByText('Products', { exact: true })
    await expect(homeLogo).toBeVisible();

    // End of authentication steps.

    // await context.storageState({ path: storageState.problemUserFile });
    await page.context().storageState({ path: storageState.problemUserFile });
    await page.context().close();
});