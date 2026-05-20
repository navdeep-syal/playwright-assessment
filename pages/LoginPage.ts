import {Page, Locator, expect} from '@playwright/test'

export class LoginPage{

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly productsTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.productsTitle = page.locator('.title');
    }
    //navigate to login page
    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    //user login
    async login(user: string, pass: string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }
    //verify successful login
    async verifyLoginSuccess(){
        await expect(this.page).toHaveURL(/inventory.html/);

        await expect(this.productsTitle)
            .toHaveText('Products');
    }
        // Take screenshot
    async takeScreenshot() {

        await this.page.screenshot({
            path: 'screenshots/login-success.png',
            fullPage: true
        });
    }

}