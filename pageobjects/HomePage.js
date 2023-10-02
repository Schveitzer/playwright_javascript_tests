export class HomePage {

    /**
    * @param {import('playwright').Page} page
    */

    constructor(page) {
        this.page = page;
        this.homeLogo = page.getByText('Products', { exact: true });
        this.productShopContainer = page.locator('.inventory_item_description').filter({ hasText: 'Sauce Labs Backpack' });
        this.addProductButton = this.productShopContainer.getByRole('button', { name: 'Add to cart' });
        this.shopCartButton = page.locator('#shopping_cart_container');
        this.cartContainer = page.locator('.cart_contents_container');
    }

    async goToHomePage() {
        await this.page.goto("/inventory.html");
        await this.page.waitForLoadState('networkidle');
    }

    async goToCartPage(){
        await this.page.goto('/cart.html')
        await this.page.waitForLoadState('networkidle');
    }

    async addProductToCart() {
        await this.page.goto("/inventory.html");
        await this.page.waitForLoadState('networkidle');
        await this.addProductButton.click();
    }


}