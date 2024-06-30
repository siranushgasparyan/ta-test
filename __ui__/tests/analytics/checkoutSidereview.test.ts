import { test, expect } from '@playwright/test';
import type { DataLayerEvent } from '@Utils/types/dataLayerEvent';
import { EGCollectionPage } from '../../pages/egClollectionPage.spec';
import { PDP } from '../../pages/pdp.spec';
import { UsagePage } from '../../pages/usagePage.spec';
import { PrescriptionPage } from '../../pages/prescriptionPage.spec';
import { LensPage } from '../../pages/lensPage.spec';
import { LensTypePage } from '../../pages/lensTypePage.spec';
import { UpgradesPage } from '../../pages/upgradesPage.spec';
import { UpgradesCoveragePlanPage } from '../../pages/upgradesCOveragePlanPage.spec';
import { SelectionReviewPage } from '../../pages/selectionReviewPage.spec';
import { ShoppingCartPage } from '../../pages/shoppingCartPage.spec';
import { CheckoutDeliveryPage } from '../../pages/checkoutDeliveryPage.spec'
import { CheckoutPaymentPage  } from '../../pages/checkoutPaymenttPage.spec'

//I know that I have to write in separate test blocks but the pages are not bein recogized and I'm nnot sure how to fix that
//I tried to check events but actually I never did that

test.describe('"CheckoutNonInteraction" "Error" events', () => {
    test('Check subtitle in checkout page', async ({ page }) => {
        await page.goto('/');

        const egCollectionsPage = new EGCollectionPage(page);
        const pdp = new PDP(page);
        const usaegPage = new UsagePage(page);
        const prescriptionPage = new PrescriptionPage(page);
        const lensPage = new LensPage(page);
        const lensTypePage = new LensTypePage(page);
        const upgradesPage = new UpgradesPage(page);
        const upgradesCoveragePage = new UpgradesCoveragePlanPage(page);
        const selectionReviewPage = new SelectionReviewPage(page);
        const shoppingCartPage = new ShoppingCartPage(page);
        const checkoutDeliveryPage = new CheckoutDeliveryPage(page);
        const checkoutPaymentPage = new CheckoutPaymentPage(page);

        await egCollectionsPage.handlePopup50off();

        await egCollectionsPage.clickButonEyeglasses();

        await page.waitForLoadState('domcontentloaded');

        expect(await egCollectionsPage.isVisibleItem()).toBe(true);

        await egCollectionsPage.handlePopupWaitWeWant();
        await egCollectionsPage.clickItem();

        await page.waitForLoadState('domcontentloaded');

        await pdp.handlePopupSaveBig();

        await pdp.waitForButtonChooseLenses();

        expect(await pdp.isVisibleButtonChooseLenses()).toBe(true);
        await pdp.clickButtonChooseLenses();

        expect(await usaegPage.isVisibleOptionSingleVision()).toBe(true);
        await usaegPage.clickOptionSingleVision();

        expect(await prescriptionPage.isVisibleOptionSendLater()).toBe(true);
        await prescriptionPage.clickOptionSendLater();

        expect(await lensPage.isVisibleOptionPlatinum()).toBe(true);
        await lensPage.clickOptionPlatinum();

        expect(await lensPage.isVisibleButtonContinue()).toBe(true);
        await lensPage.clickButtonContinue();

        expect(await lensTypePage.isVisibleOptionClear()).toBe(true);
        await lensTypePage.clickOptionClear();

        expect(await upgradesPage.isVisibleButtonContinue()).toBe(true);
        await upgradesPage.clickButtonContinue();

        expect(await upgradesCoveragePage.isVisibleButtonNoThanks()).toBe(true);
        await upgradesCoveragePage.clickButtonNoThanks();

        expect(await selectionReviewPage.isVisibleButtonAddToCart()).toBe(true);
        await selectionReviewPage.clickButtonAddToCart();

        await shoppingCartPage.isVisibleButtonProeedToCheckout();
        await shoppingCartPage.clickButtonProceedToCheckout();

        await checkoutDeliveryPage.fillInputFirstName();
        await checkoutDeliveryPage.fillInputLastName();
        await checkoutDeliveryPage.fillInputEmail();
        await checkoutDeliveryPage.fillInputPhoneNumber();
        await checkoutDeliveryPage.fillInputAddress();
        await checkoutDeliveryPage.fillInputCity();
        await checkoutDeliveryPage.fillInputZip();
        await checkoutDeliveryPage.clickStateProvince();
         
        await checkoutDeliveryPage.waitForButtonContinue();
        expect (await checkoutDeliveryPage.isVisibleButtonContinue()).toBe(true);
        await checkoutDeliveryPage.clickButtonContinue();

        await checkoutPaymentPage.clickRadioButtonCreditCard();
        await checkoutPaymentPage.fillCardNumberInputIncorrect();
        await checkoutPaymentPage.clickButtonPlaceOrder();

        await checkoutPaymentPage.fillCardNumberInputCorrect();
        await checkoutPaymentPage.clickButtonPlaceOrder();

        await checkoutPaymentPage.fillCardNumberInputCorrect();
        await checkoutPaymentPage.clickButtonPlaceOrder();

        await checkoutPaymentPage.fillExpDateInputCorrect();
        await checkoutPaymentPage.clickButtonPlaceOrder();

        await checkoutPaymentPage.clickRadiobuttonCahsOnDelivery();

        const dataFromDataLayer: DataLayerEvent[] = await page.evaluate(() => {
            return window.dataLayer;
        });

        expect(dataFromDataLayer).toBeDefined();

        const foundObj = dataFromDataLayer.find(obj => obj.eventLabel?.includes('Please enter a valid credit card number'));
        expect(foundObj).toBeDefined();

        expect(foundObj?.eventLabel).toContain('Please enter a valid credit card number');
        expect(foundObj?.event).toContain('CheckoutInteraction');
        expect(foundObj?.eventCategory).toContain('Checkout');

    })
});
