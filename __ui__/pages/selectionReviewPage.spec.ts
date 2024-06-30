import {Page, Locator} from '@playwright/test';

export class SelectionReviewPage {
    private page: Page;
    private LOCATORS: {
        buttonAddToCart: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            buttonAddToCart: this.page.locator("//span[text()='Add to Cart']"),
        }
    }

    public async isVisibleButtonAddToCart(): Promise<boolean> {
        return await this.LOCATORS.buttonAddToCart.isVisible()
    }

    public async clickButtonAddToCart(): Promise<void> {
        await this.LOCATORS.buttonAddToCart.click()
    }

}
