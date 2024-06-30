import {Page, Locator} from '@playwright/test';
import { closePopup } from '../helpers/closePopup';

export class PDP {
    private page: Page;
    private LOCATORS: {
        buttonChooseLenses: Locator;
        pricePDP: Locator;
        popupSaveBig: Locator;
        closeIconSaveBigPopup: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            buttonChooseLenses: this.page.locator("//button[@aria-label='choose lenses']//span[text() = 'Choose Lenses']"),
            pricePDP: this.page.locator("//span[@data-test-name='regularPrice']"),
            popupSaveBig: this.page.locator("//p[text() = 'SAVE BIG ON']"),
            closeIconSaveBigPopup: this.page.locator("//button[@aria-label='Close popup']") 
        }
    }

    public async isVisiblePopupSaveBig(): Promise<boolean> {
        return await this.LOCATORS.popupSaveBig.isVisible()
    }

    public async clickCloseSaveBigPopup(): Promise<void> {
        await this.LOCATORS.closeIconSaveBigPopup.click()
    }

    public async handlePopupSaveBig(): Promise<void> {
        await closePopup(this.LOCATORS.popupSaveBig, this.LOCATORS.closeIconSaveBigPopup);
    }

    public async isVisibleButtonChooseLenses(): Promise<boolean> {
        await this.page.waitForLoadState('domcontentloaded');
        return await this.LOCATORS.buttonChooseLenses.isVisible()
    }

    public async waitForButtonChooseLenses(): Promise<void> {
        await this.LOCATORS.buttonChooseLenses.waitFor({ state: 'visible', timeout: 10000 });
    }

    public async getChooseLensesButtonText(): Promise<string | null> {
        return await this.LOCATORS.buttonChooseLenses.textContent()
    }

    public async clickButtonChooseLenses(): Promise<void> {
        await this.LOCATORS.buttonChooseLenses.click()
    }

    public async getPriceText(): Promise<string> {
        const priceText = await this.LOCATORS.pricePDP.textContent();
        if (priceText === null) {
            throw new Error('Price text is null');
        }
        return priceText;
    }
}
