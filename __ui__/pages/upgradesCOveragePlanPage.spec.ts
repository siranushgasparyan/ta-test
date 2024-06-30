import {Page, Locator} from '@playwright/test';

export class UpgradesCoveragePlanPage {
    private page: Page;
    private LOCATORS: {
        buttonNoThanks: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            buttonNoThanks: this.page.locator("//span[text()='No Thanks']"),
        }
    }

    public async isVisibleButtonNoThanks(): Promise<boolean> {
        return await this.LOCATORS.buttonNoThanks.isVisible()
    }

    public async clickButtonNoThanks(): Promise<void> {
        await this.LOCATORS.buttonNoThanks.click()
    }

}
