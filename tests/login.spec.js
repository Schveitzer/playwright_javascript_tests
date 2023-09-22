// @ts-check
import { test, expect } from '@playwright/test';

test('Login test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("/");
  const usernameFiled = page.getByTestId("username");
  await usernameFiled.fill("standard_user");
  const passwordField = page.getByTestId("password");
  await passwordField.fill("secret_sauce");
  const loginButton = page.getByTestId('login-button')
  await loginButton.click();
  await page.waitForLoadState('networkidle');
  await context.storageState({ path: 'state.json' });
});

