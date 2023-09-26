import { test, expect } from '@playwright/test';

const regularUserFile = '../.auth/admin.json';
const problemUserFile = '../.auth/user.json';



test.describe(() => {
  test.use({ storageState: problemUserFile });

  test('@Web login with problem user', async ({ page }) => {
    await page.goto("/inventory.html");
    await page.waitForLoadState('networkidle');
    const homeLogo = page.getByText('Swag Labs', { exact: true })
    await expect(homeLogo).toBeVisible();

  })

});

test.describe(() => {
  test.use({ storageState: regularUserFile })
  test('@Web login with regular user', async ({ page }) => {
    await page.goto("/inventory.html");
    await page.waitForLoadState('networkidle');
    const homeLogo = page.getByText('Swag Labs', { exact: true })
    await expect(homeLogo).toBeVisible();

  })

});