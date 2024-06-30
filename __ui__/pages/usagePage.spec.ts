import {Page, Locator} from '@playwright/test';

export class UsagePage {
    private page: Page;
    private LOCATORS: {
        optionSingleVision: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            optionSingleVision: this.page.locator("//h3[text()='Single Vision']")  
        }
    }

    public async isVisibleOptionSingleVision(): Promise<boolean> {
        return await this.LOCATORS.optionSingleVision.isVisible()
    }

    public async getOptionSingleVisionText(): Promise<string | null> {
        return await this.LOCATORS.optionSingleVision.textContent()
    }

    public async clickOptionSingleVision(): Promise<void> {
        await this.LOCATORS.optionSingleVision.click()
    }
}
