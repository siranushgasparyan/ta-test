import {Page, Locator} from '@playwright/test';

export class LensTypePage {
    private page: Page;
    private LOCATORS: {
        optionClear: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            optionClear: this.page.locator("//h3[text()='Clear']"),
        }
    }

    public async isVisibleOptionClear(): Promise<boolean> {
        return await this.LOCATORS.optionClear.isVisible()
    }

    public async clickOptionClear(): Promise<void> {
        await this.LOCATORS.optionClear.click()
    }

}
