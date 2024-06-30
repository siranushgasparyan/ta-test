import {Page, Locator} from '@playwright/test';

export class LensPage {
    private page: Page;
    private LOCATORS: {
        optionSilver: Locator;
        buttonContinue: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            optionSilver: this.page.locator("//h2[text()='Silver']"),
            buttonContinue: this.page.locator("//span[text()='Continue']")
        }
    }

    public async isVisibleOptionPlatinum(): Promise<boolean> {
        return await this.LOCATORS.optionSilver.isVisible()
    }

    public async clickOptionPlatinum(): Promise<void> {
        await this.LOCATORS.optionSilver.click()
    }

    public async isVisibleButtonContinue(): Promise<boolean> {
        return await this.LOCATORS.buttonContinue.isVisible()
    }

    public async getbuttonContinueText(): Promise<string | null> {
        return await this.LOCATORS.buttonContinue.textContent()
    }

    public async clickButtonContinue(): Promise<void> {
        await this.LOCATORS.buttonContinue.click()
    }
}
