// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.saucedemo.com',

    // Custom test iD, for more information see https://playwright.dev/docs/locators#set-a-custom-test-id-attribute
    testIdAttribute: 'data-test'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        video: 'off', //retain-on-failure
        ignoreHttpsErrors: true,
        permissions: ['geolocation'],
        trace: 'retain-on-failure',//off,on
        // ...devices['']
        //   viewport : {width:720,height:720}
      }

    },
    {
      name: 'firefox',
      use: {

        browserName: 'firefox',
        headless: true,
        screenshot: 'off',
        trace: 'retain-on-failure',//off,on 
        //...devices['iPhone 11'],
      }

    },
    {
      name: 'safari',
      use: {

        browserName: 'webkit',
        headless: true,
        screenshot: 'off',
        trace: 'retain-on-failure',//off,on 
        //...devices['iPhone 11'],
      }

    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

