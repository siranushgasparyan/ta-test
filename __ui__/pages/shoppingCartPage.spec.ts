import {Page, Locator} from '@playwright/test';

export class ShoppingCartPage {
    private page: Page;
    private LOCATORS: {
        buttonProceedToCheckout: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            buttonProceedToCheckout: this.page.locator("//div[button[contains(.,'Proceed to Checkout')]]"),
        }
    }

    public async waitForButtonPrroceedToCheckout(): Promise<void> {
        await this.LOCATORS.buttonProceedToCheckout.waitFor({ state: 'visible', timeout: 10000 });
    }

    public async isVisibleButtonProeedToCheckout(): Promise<boolean> {
        return await this.LOCATORS.buttonProceedToCheckout.isVisible()
    }

    public async clickButtonProceedToCheckout(): Promise<void> {
        await this.LOCATORS.buttonProceedToCheckout.click()
    }

}
