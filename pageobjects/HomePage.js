export class HomePage {

    constructor(page) {
        this.page = page;
        this.homeLogo = page.getByText('Products', { exact: true })
    }

    async goToHomePage() {
        await this.page.goto("/inventory.html");
        await this.page.waitForLoadState('networkidle');
    }
}