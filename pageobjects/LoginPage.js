export class LoginPage {

    constructor(page){
        this.page = page;
        this.usernameFiled = page.getByTestId("username");
        this.passwordField = page.getByTestId("password");
        this.loginButton = page.getByTestId('login-button');

    }

    async goToLoginHome(){
        await this.page.goto("/");
        
    }

    async doLogin(username, password){
        await this.goToLoginHome();
        await this.usernameFiled.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }


}