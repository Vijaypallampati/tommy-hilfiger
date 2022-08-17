import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get btnCookieNotice() {
        return $('//button[@data-testid="Button-primary" and contains(@class,"cookie-notice__agree-button")]');
    }
    public get inputUsername() {
        return $('//input[@id="signin-email"]');
    }

    public get inputPassword() {
        return $('//input[@id="signin-password"]');
    }

    public get btnSubmit() {
        return $('//button[@type="submit" and contains(text(),"Aanmelden")]');
    }

    public get btnSignin() {
        return $('//button[@data-testid="sign-in-button"]');
    }

    public get emailError() {
        return $('//*[@id="signin-email-helper-text" and contains(text(),"Vul het veld in")]');
    }

    public get passwordError() {
        return $('//*[@id="signin-password-helper-text" and contains(text(),"Vul het veld in")]');
    }

    public get invalidpassword(){
        return $('//*[text()="Je gebruikersnaam en wachtwoord matchen niet. Probeer het nog eens."]');
    }

    public get lowlenghtpassword(){
        return $('//*[text()="Je wachtwoord moet tussen 5 en 20 tekens lang zijn"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login(username: string, password: string) {
        if (this.btnCookieNotice.isExisting) {
            this.btnCookieNotice.click();
        }
        await this.btnSignin.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        (await this.btnSubmit).waitForClickable;
        await this.btnSubmit.click();
    }

    public async emailLoginerror() {
        if (this.btnCookieNotice.isExisting) {
            await this.btnCookieNotice.click();
        }
        await this.btnSubmit.doubleClick();
        (await this.emailError).isElementDisplayed;
        (await this.passwordError).isDisplayed;
    }

    public async usernameLoginerror(password: string) {
        if (this.btnCookieNotice.isExisting) {
            await this.btnCookieNotice.click();
        }
        await this.inputPassword.setValue(password);
        await this.btnSubmit.doubleClick();
        (await this.emailError).isElementDisplayed;
        if(!this.passwordError.isExisting){
            console.log("password error is not present");
        }
    }

    public async passwordLoginerror(username: string) {
        if (this.btnCookieNotice.isExisting) {
            await this.btnCookieNotice.click();
        }
        await this.inputUsername.setValue(username);
        await this.btnSubmit.doubleClick();
        (await this.passwordError).isElementDisplayed;
        if(!this.emailError.isExisting){
            console.log("email error is not present");
        }
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open();
    }
}

export default new LoginPage();
