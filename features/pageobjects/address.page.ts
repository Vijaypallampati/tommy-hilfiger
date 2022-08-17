import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddressPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get adressboek() {
        return $('//ul[@class="my-account__navigation"]//a[text()="Adresboek"]');
    }

    public get addaddress() {
        return $('//*[@data-testid="address-add-button"]');
    }

    public get factuuraddress() {
        return $('//*[text()="Bezorg- en factuuradres"]');
    }

    public get firstName() {
        return $('//*[@id="firstName"]');
    }
    public get lastName() {
        return $('//*[@id="lastName"]');
    }
    public get address1() {
        return $('//*[@id="address1"]');
    }
    public get address2() {
        return $('//*[@id="address2"]');
    }
    public get city() {
        return $('//*[@id="city"]');
    }
    public get zipcode() {
        return $('//*[@id="zipcode"]');
    }
    public get phone1() {
        return $('//*[@id="phone1"]');
    }
    public get country() {
        return $('//*[@id="country"]');
    }
    public get saveaddress() {
        return $('//button[@data-testid="address-save-button"]');
    }

    public get updateaddress(){
        return $('//button[@data-testid="address-update-button"]')
    }

    public async addNewAddress(firstname: string, lastname: string, address1: string, address2: string, city: string, zipcode: string, phone1: string, country: string) {
        
        await this.adressboek.click();
        await this.addaddress.click();
        await this.factuuraddress.click();
        await this.firstName.setValue(firstname);
        await this.lastName.setValue(lastname);
        await this.address1.setValue(address1);
        await this.address1.setValue(address2);
        await this.city.setValue(city);
        await this.zipcode.setValue(zipcode);
        await this.phone1.setValue(phone1);
        await this.country.selectByVisibleText(country);
        await this.saveaddress.click();
        await this.updateaddress.click();
    }
}

export default new AddressPage();
