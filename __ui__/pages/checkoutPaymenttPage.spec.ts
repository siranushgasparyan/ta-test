import { Page, Locator } from '@playwright/test';

export class CheckoutPaymentPage {
    private page: Page;
    private LOCATORS: {
        radioButtonCreditCard: Locator;
        inputCardNumber: Locator;
        buttonPlaceOrder: Locator;
        inputExpDate: Locator;
        inputCvv: Locator;
        radioButtonCashOnDelivery: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            radioButtonCreditCard: this.page.locator("//input[@value='ms_paymentsos']"),
            inputCardNumber: this.page.locator("//div[@id='card-number']"),
            buttonPlaceOrder: this.page.locator("//div[@class='save_bidJnA']/following-sibling::section//span[text() = 'Place Order']"),
            inputExpDate: this.page.locator("//div[@id='exp-date']"),
            inputCvv: this.page.locator("//input[@id='cvv']"),
            radioButtonCashOnDelivery: this.page.locator("//input[@value='cashondelivery']"),
            
        }
    }


    public async clickRadioButtonCreditCard(): Promise<void> {
        await this.LOCATORS.radioButtonCreditCard.click()
    }

    public async fillCardNumberInputIncorrect(): Promise<void> {
        await this.LOCATORS.inputCardNumber.type('4222222222222222');
    }

    public async fillCardNumberInputCorrect(): Promise<void> {
        await this.LOCATORS.inputCardNumber.type('4111111111111111');
    }

    public async clickButtonPlaceOrder(): Promise<void> {
        await this.LOCATORS.buttonPlaceOrder.click()
    }

    public async fillExpDateInputCorrect(): Promise<void> {
        await this.LOCATORS.inputExpDate.type('0528');
    }

    public async clickRadiobuttonCahsOnDelivery(): Promise<void> {
        await this.LOCATORS.radioButtonCashOnDelivery.click()
    }
}
