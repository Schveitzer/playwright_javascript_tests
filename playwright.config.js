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
  workers: 1,
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
  /* Every project depends on the execution of the setup script that performs 
  the login and saves the storage state files, 
  more information about authentication see https://playwright.dev/docs/auth  */
  projects: [
    {
      name: 'setup',
      testMatch: '**/*.setup.js',
    },
    {
      name: 'chrome',
      dependencies: ['setup'],
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
      dependencies: ['setup'],
      use: {

        browserName: 'firefox',
        headless: true,
        screenshot: 'on',
        trace: 'retain-on-failure',//off,on 
        //...devices['iPhone 11'],
      }

    },
    {
      name: 'safari',
      dependencies: ['setup'],
      use: {

        browserName: 'webkit',
        headless: true,
        screenshot: 'on',
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

