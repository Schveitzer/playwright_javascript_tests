# Playwright JavaScript demo tests

In this project I demonstrate some features of Playwright framework with JavScript, for automation E2E and API tests.

This project includes:

- Frameworks:
    - Playwright
    - Allure


- Features:
    - Tests in multiple browser and pages
    - Authenticated test sessions with signed states
    - Intercepting page requests (Network Events)
    - Mock page requests
    - Screenshot on fail and attach to report
    - Generate trace file on fail and attach to report
    - Using trace file for debug failed test
    - Debug tests with interactive Playwright Inspector
    - Configuration and use of custom fixtures
    - Report with Allure
    
## Demo Pages
For these tests I use a Sauce Labs demo app which can be found here: [Sauce Demo](https://www.saucedemo.com/)
And a demo shop site named as the Danube, with can be found here: [Danube Shop](https://danube-web.shop/)

## Requirements
- Node >= 16.0 - [How install Node](https://nodejs.org/en)
- NVM (Optional) [How install NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
- Allure Client >= 2.21 [How install allure client](https://docs.qameta.io/allure/#_commandline)

## Getting Started
Create a virtual environment (optional):

```bash
$ nvm install node 16
$ nvm use 16
```

Install dependencies:

```bash
$ npm install
```

## Configure Playwright:
```bash
$ npx playwright install
```

## To run tests in Chrome
```bash
$ npm run chrome
```

## To run tests in Firefox:
```bash
$ npx playwright test --project=firefox
```

## To run tests in Safari:
```bash
$ npx playwright test --project=safari
```

![Test Execution](img/test_execution.gif)

## Tests with multiple browser instances (contexts) and multiple pages
With playwright all tests is isolated with contexts and pages, in this project all the browser contexts are defined as 
fixtures, in file...

> If login fails, the test suite is aborted

Example of context as fixture using saved authenticated state for user Standard:


## Intercepting page requests (Network Events)
Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that a page does, 
including XHRs and fetch requests, can be tracked, modified and handled.

In the example below I demonstrate a test that intercepts the http request from the api, collects the titles of the 
books and verifies if there is any book with the title Haben oder haben

- Before api mock:

![Before Mock](img/before_mock.png)

- After api mock:

![After Mock](img/after_mock.png)

## Interactive Debug

For debug a specific test scenario:
```bash
```

## Trace viewer
If any test fail, the trace file is attach in the report, for see and debug with the trace execute the command:

```bash
$ playwright show-trace FILE-NAME.ZIP
```
![Trace](img/trace_viewer.gif)

Get the trace file from failed test:

![Trace_viewer](img/trace.png)

## Automatic save screenshot and trace file if test fail
## Reports
