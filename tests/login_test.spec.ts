import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('valid login test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    //navigate to login page
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    
    //validate succesful login
    await loginPage.verifyLoginSuccess();

    //capture screenshot
    await loginPage.takeScreenshot();
});


