import { test as setup, expect } from '@playwright/test';
import {storageState} from '../utils/storageStates.js'
import {credentials} from '../utils/test_data/credentials.js'


// TODO: Join all authentication perform in one function with for()

// Perform authentication and save state for regular user
setup('authenticate as regular user', async ({ browser }) => {
    // Perform authentication steps.
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("/");
    const usernameFiled = page.getByTestId("username");
    await usernameFiled.fill(credentials.regular_user.username);
    const passwordField = page.getByTestId("password");
    await passwordField.fill(credentials.regular_user.password);
    const loginButton = page.getByTestId('login-button')
    await loginButton.click();

    // Wait until the page receives the cookies.
    // Wait for the final URL to ensure that the cookies are actually set.
    await page.waitForLoadState('networkidle');

    // Alternatively, you can wait until the page reaches a state where all cookies are set.
    const homeLogo = page.getByText('Products', { exact: true })
    await expect(homeLogo).toBeVisible();

    // End of authentication steps.

    await context.storageState({ path: storageState.regularUserFile });
    await context.close();
});


// Perform authentication and save state for regular user
setup('authenticate as problem user', async ({ browser }) => {
    // Perform authentication steps.
    const context = await browser.newContext();
    const page = await context.newPage();
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

    await context.storageState({ path: storageState.problemUserFile });
    await context.close();
});