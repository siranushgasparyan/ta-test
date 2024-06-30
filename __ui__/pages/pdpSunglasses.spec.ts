import {Page, Locator} from '@playwright/test';
import { closePopup } from '../helpers/closePopup'

export class PDPSunglasses {
    private page: Page;
    private LOCATORS: {
        buttonAddToCart: Locator;
        popupSaveBig: Locator;
        closeIconSaveBigPopup: Locator
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            buttonAddToCart: this.page.locator("//span[text() = 'Add to Cart']"),
            popupSaveBig: this.page.locator("//div[@class='wrapper-YGUvKA']"),
            closeIconSaveBigPopup: this.page.locator("//button[@aria-label='Close popup']") 
        }
    }

    public async isVisiblePopupSaveBig(): Promise<boolean> {
        return await this.LOCATORS.popupSaveBig.isVisible()
    }

    public async clickCloseSaveBigPopup(): Promise<void> {
        await this.LOCATORS.closeIconSaveBigPopup.click()
    }

    public async isVisibleButtonAddtoCart(): Promise<boolean> {
        return await this.LOCATORS.buttonAddToCart.isVisible()
    }

    public async clickButtonAddtoCart(): Promise<void> {
        await this.LOCATORS.buttonAddToCart.click()
    }

    public async handlePopupSaveBig(): Promise<void> {
        await closePopup(this.LOCATORS.popupSaveBig, this.LOCATORS.closeIconSaveBigPopup);
    }
    
}
