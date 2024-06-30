import { Page, Locator } from '@playwright/test';


export class CheckoutDeliveryPage {
    private page: Page;
    private LOCATORS: {
        buttonContinue: Locator;
        inputFirstName: Locator;
        inputLastName: Locator;
        inputEmail: Locator;
        inputPhoneNumber: Locator;
        inputAddress: Locator;
        inputCity: Locator;
        inputZip: Locator;
        selectState: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.LOCATORS = {
            buttonContinue: this.page.locator("//span[text() = 'Continue']"),
            inputFirstName: this.page.locator("//input[@name='firstName' and @id='input-1']"),
            inputLastName: this.page.locator("//input[@name='lastName' and @id='input-2']"),
            inputPhoneNumber: this.page.locator("//input[@name='phone' and @id='input-4']"),
            inputEmail: this.page.locator("//input[@name='email' and @id='input-3']"),
            inputAddress: this.page.locator("//input[@name='address' and @id='input-5']"),
            inputCity: this.page.locator("//input[@name='city' and @id='input-7']"),
            inputZip: this.page.locator("//input[@name='postal' and @id='input-9']"),
            selectState: this.page.locator("//*[@id='react-root']/div[1]/div/section[1]/section[1]/div/div[2]/div/div/form/div/div[1]/div/div/div/div[8]/div/select"),
        }
    }


    public async waitForButtonContinue(): Promise<void> {
        await this.LOCATORS.buttonContinue.waitFor({ state: 'visible', timeout: 10000 });
    }

    public async isVisibleButtonContinue(): Promise<boolean> {
        return await this.LOCATORS.buttonContinue.isVisible()
    }

    public async clickButtonContinue(): Promise<void> {
        await this.LOCATORS.buttonContinue.click()
    }

    public async fillInputFirstName(): Promise<void> {
        await this.LOCATORS.inputFirstName.type('Siranush')
    }

    public async fillInputLastName(): Promise<void> {
        await this.LOCATORS.inputLastName.type('Gasparyan')
    }

    public async fillInputEmail(): Promise<void> {
        await this.LOCATORS.inputEmail.type('siranush.gasparyan@optimax.dev')
    }

    public async fillInputPhoneNumber(): Promise<void> {
        await this.LOCATORS.inputPhoneNumber.type('9037863524')
    }

    public async fillInputAddress(): Promise<void> {
        await this.LOCATORS.inputAddress.type('Roosevelt Field Mall/ 1st Floor/ Kiosk #K101A')
    }

    public async fillInputCity(): Promise<void> {
        await this.LOCATORS.inputCity.type('Garden City')
    }

    public async fillInputZip(): Promise<void> {
        await this.LOCATORS.inputZip.type('11530')
    }

    public async clickStateProvince(): Promise<void> {
        const dropdown = this.LOCATORS.selectState;
        await dropdown.selectOption('New York');
    }

}
