import { test, expect } from '@playwright/test';


test.afterEach('Status check', async ({ page }, testInfo) => {
        await page.context().close();
  });


test(' @Web intercept and validate web service response', async ({ page }) => {
    const responsePromise = page.waitForResponse('**/api/books');
    await page.goto("https://danube-web.shop/");
    const response = await responsePromise;
    let responseBody = await response.json();
    console.log(responseBody[0].title);
    expect(responseBody[0].title).toEqual('Haben oder haben')

})


test(' @Web Modify web service response and verifiy', async ({ page }) => {
    const requestBody = [
        {
            "id": 1,
            "title": "Haben oder haben",
            "author": "Fric Eromm",
            "genre": "philosophy",
            "price": "9.95",
            "rating": "★★★★☆",
            "stock": "1"
        },
        {
            "id": 2,
            "title": "Parry Hotter",
            "author": "J/K Rowlin'",
            "genre": "erotic",
            "price": "9.95",
            "rating": "★★★☆☆",
            "stock": "1"
        }
    ]
    await page.route('**/api/books', route => {
        route.fulfill({
            content_type: 'application/json',
            status: 200,
            contentType: 'text/plain',
            body: JSON.stringify(requestBody)
        });
    });

    await page.goto("https://danube-web.shop/");
    const productContainer = page.locator('.shop-content');
    const productsName = await productContainer.textContent();
    expect(productsName).toContain('Haben oder haben Fric Eromm', 'Hotter J/K Rowlin');



})
