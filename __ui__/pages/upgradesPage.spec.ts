import {Page, Locator} from '@playwright/test';

export class UpgradesPage {
    private page: Page;
    private LOCATORS: {
        buttonContinue: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            buttonContinue: this.page.locator("//span[text()='Continue']"),
        }
    }

    public async isVisibleButtonContinue(): Promise<boolean> {
        return await this.LOCATORS.buttonContinue.isVisible()
    }

    public async clickButtonContinue(): Promise<void> {
        await this.LOCATORS.buttonContinue.click()
    }

}
