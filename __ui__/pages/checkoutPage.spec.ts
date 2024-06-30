import { Page, Locator } from '@playwright/test';
import {getCleanNumericValue} from '../helpers/getCleanNumericValue'

export class CheckoutPage {
    private page: Page;
    private LOCATORS: {
        buttonAddQuantity: Locator;
        buttonDecreaseQuantity: Locator;
        subtotal: Locator;
        buttonRemove: Locator;
        quantity: Locator;
        buttonYesRemove: Locator;
        textShoppingCartIsEmpty: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            buttonAddQuantity: this.page.locator("//button[text() ='+']"),
            buttonDecreaseQuantity: this.page.locator("//button[text() ='-']"),
            subtotal: this.page.locator("//span[@id='summary_subtotal']"),
            buttonRemove: this.page.locator("//div[@class='removeButton_bcQUim']//button[text() = 'Remove']"),
            quantity: this.page.locator("//li[@data-test-name='cartSummarySubtotal']//span[contains(., 'item')]"),
            buttonYesRemove: this.page.locator("//div[@data-test-name='removeCartItemPopup']//button[text() =  'Yes']"),
            textShoppingCartIsEmpty: this.page.locator("//h2[text() = 'Shopping Cart is Empty']")
        }
    }

    public async isVisibleButtonAddQty(): Promise<boolean> {
        return await this.LOCATORS.buttonAddQuantity.isVisible()
    }

    public async isEnabledButtonAddQty(): Promise<boolean> {
        return await this.LOCATORS.buttonAddQuantity.isEnabled()
    }

    public async isDisabledButtonDecreaseQty(): Promise<boolean> {
        return await this.LOCATORS.buttonDecreaseQuantity.isDisabled()
    }

    public async clickButtonAddQty(): Promise<void> {
        await this.LOCATORS.buttonAddQuantity.click()
    }

    public async clickButtonDecreaseQty(): Promise<void> {
        await this.LOCATORS.buttonDecreaseQuantity.click()
    }

    public async isVisibleSubtotal(): Promise<boolean> {
        return await this.LOCATORS.subtotal.isVisible()
    }

    public async getPriceText(): Promise<string> {
        const priceText = await this.LOCATORS.subtotal.textContent();
        if (priceText === null) {
            throw new Error('Price text is null');
        }
        return priceText;
    }

    public async getQuantityText(): Promise<string> {
        const quantityText = await this.LOCATORS.quantity.textContent();
        if (quantityText === null) {
            throw new Error('Quantity text is null');
        }
        return quantityText;
    }

    public async isVisibleButtonRemove(): Promise<boolean> {
        return await this.LOCATORS.buttonRemove.isVisible()
    }

    public async clickButtonRemove(): Promise<void> {
        await this.LOCATORS.buttonRemove.click()
    }

    public async isVisibleButtonYesRemove(): Promise<boolean> {
        return await this.LOCATORS.buttonYesRemove.isVisible()
    }

    public async clickButtonYesRemove(): Promise<void> {
        await this.LOCATORS.buttonYesRemove.click()
    }

    public async getTextShoppingCartIsEmpty(): Promise<string> {
        const text = await this.LOCATORS.textShoppingCartIsEmpty.textContent();
        if (text=== null) {
            throw new Error('The text is null');
        }
        return text;
    }

}
