import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import addressPage from '../pageobjects/address.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});


When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashHio).toBeExisting();
    await expect(SecurePage.flashHio).toHaveTextContaining(message);
});

Then(/^I should see LoginPage error on username and password fields$/,function(){
    LoginPage.emailLoginerror;
});


Then(/^I should see LoginPage error on username field and password is (.*)$/,async (password)=>{
    LoginPage.usernameLoginerror(password);
});

Then(/^I should see LoginPage error on password field and username is (.*)$/,async (username)=>{
    LoginPage.passwordLoginerror(username);
});

Then(/^I should see LoginPage error saying username or password is not matching$/,function(){
    LoginPage.invalidpassword;
});

Then(/^I should see LoginPage error saying password should be minimum 5 to 20 characters$/,function(){
    LoginPage.lowlenghtpassword;
});

Then(/^I click on logged in user$/,function(){
    SecurePage.clickHio;
});

When(/^I Fill address with firstname (.*) lastname (.*) address1 (.*) address2 (.*) city (.*) zipcode (.*) phone1 (.*) and (.*)$/, async (firstname, lastname, address1, address2, city, zipcode, phone1, country) => {
    await addressPage.addNewAddress(firstname, lastname, address1, address2, city, zipcode, phone1, country)
});




