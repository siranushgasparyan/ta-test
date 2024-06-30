import {Page, Locator} from '@playwright/test';

export class PrescriptionPage {
    private page: Page;
    private LOCATORS: {
        optionSendLater: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            optionSendLater: this.page.locator("//h3[text()='Send later']")  
        }
    }

    public async isVisibleOptionSendLater(): Promise<boolean> {
        return await this.LOCATORS.optionSendLater.isVisible()
    }

    public async getOptionSendLaterText(): Promise<string | null> {
        return await this.LOCATORS.optionSendLater.textContent()
    }

    public async clickOptionSendLater(): Promise<void> {
        await this.LOCATORS.optionSendLater.click()
    }
}
