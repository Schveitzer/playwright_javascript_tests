import { LoginPage } from '../pageobjects/LoginPage.js'
import { HomePage } from '../pageobjects/HomePage.js'

export class POManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.homePage = new HomePage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getHomePage() {
        return this.homePage;
    }

}

export default { POManager };