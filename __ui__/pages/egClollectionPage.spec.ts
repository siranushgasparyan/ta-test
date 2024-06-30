import { Page, Locator, LocatorScreenshotOptions } from '@playwright/test';
import { closePopup } from '../helpers/closePopup'


export class EGCollectionPage {
    private page: Page;
    private LOCATORS: {
        itemEyeglasses: Locator;
        buttonEyeglasses: Locator;
        popup50off: Locator;
        buttonClosePopup: Locator;
        popupWaitWeWantToGive: Locator;
        buttonCloseWeWantPopup: Locator;
        buttonSunglasses: Locator;
        itemSunlases: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            popup50off: this.page.locator("//div[@class='svPosition-29YNmv']"),
            buttonClosePopup: this.page.locator("//button[@aria-label='Close popup']"),
            buttonEyeglasses: this.page.locator("//ul[@class='wrap_aWJa2V']//span[text() = 'Eyeglasses']"),
            itemEyeglasses: this.page.locator("//li[@class='item_clQhoH']//article[@data-test-id='4252']"),
            popupWaitWeWantToGive: this.page.locator("//div[@class='flip-lT94vr']"),
            buttonCloseWeWantPopup: this.page.locator("//button[@aria-label='Close popup']"),
            buttonSunglasses: this.page.locator("//ul[@class='wrap_aWJa2V']//span[text() = 'Sunglasses']"),
            itemSunlases: this.page.locator("//li[@class='item_clQhoH']//article[@data-test-id='4294']")
        }
    }

    public async isVisiblePopup50off(): Promise<boolean> {
        return await this.LOCATORS.popup50off.isVisible()
    }

    public async clickButtonClosePopup(): Promise<void> {
        await this.LOCATORS.buttonClosePopup.click()
    }


    public async handlePopup50off(): Promise<void> {
        await closePopup(this.LOCATORS.popup50off, this.LOCATORS.buttonClosePopup)
    }

    public async isVisibleButtonEyeglasses(): Promise<boolean> {
        return await this.LOCATORS.buttonEyeglasses.isVisible()
    }

    public async clickButonEyeglasses(): Promise<void> {
        await this.LOCATORS.buttonEyeglasses.click()
    }

    public async clickButtonSunlasses(): Promise<void> {
        await this.LOCATORS.buttonSunglasses.click()
    }

    public async isVisibleItem(): Promise<boolean> {
        return await this.LOCATORS.itemEyeglasses.isVisible()
    }

    public async clickItem(): Promise<void> {
        await this.LOCATORS.itemEyeglasses.click()
    }

    public async clickItemSunglasses(): Promise<void> {
        await this.LOCATORS.itemSunlases.click()
    }

    public async isVisiblePopUpwaitWeWant(): Promise<boolean> {
        return await this.LOCATORS.popupWaitWeWantToGive.isVisible()
    }

    public async clickButonCloseWeWant(): Promise<void> {
        await this.LOCATORS.buttonCloseWeWantPopup.click()
    }

    public async handlePopupWaitWeWant(): Promise<void> {
        await closePopup(this.LOCATORS.popupWaitWeWantToGive, this.LOCATORS.buttonCloseWeWantPopup)
    }
}
