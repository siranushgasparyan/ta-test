import { test, expect } from '@playwright/test';
import { EGCollectionPage } from '../../pages/egClollectionPage.spec'
import { PDP } from '../../pages/pdp.spec'
import { UsagePage } from '../../pages/usagePage.spec'
import { PrescriptionPage } from '../../pages/prescriptionPage.spec'
import { LensPage } from '../../pages/lensPage.spec'
import { LensTypePage } from '../../pages/lensTypePage.spec'
import { UpgradesPage } from '../../pages/upgradesPage.spec'
import { UpgradesCoveragePlanPage } from '../../pages/upgradesCOveragePlanPage.spec'
import { SelectionReviewPage } from '../../pages/selectionReviewPage.spec'
import { CheckoutPage } from '../../pages/checkoutPage.spec'
import { getCleanNumericValue } from '../../helpers/getCleanNumericValue'

//I know that I have to write in separate test blocks but the pages are not being recogized and 
//I'm not sure how to fix that

test.describe("Item controls on cart page", () => {
    test("Check subtitle in checkout page", async ({ page }) => {
        await page.goto('/')

        const egCollectionsPage = new EGCollectionPage(page);
        const pdp = new PDP(page);
        const usaegPage = new UsagePage(page);
        const prescriptionPage = new PrescriptionPage(page);
        const lensPage = new LensPage(page);
        const lensTypePage = new LensTypePage(page);
        const upgradesPage = new UpgradesPage(page);
        const upgradesCoveragePage = new UpgradesCoveragePlanPage(page);
        const selectionReviewPage = new SelectionReviewPage(page);
        const checkoutPage = new CheckoutPage(page);
        const cartIsEmpty = "Shopping Cart is Empty";

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

        expect(await usaegPage.isVisibleOptionSingleVision()).toBe(true);;
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

        const priceTextPDPpage = await pdp.getPriceText();
        const pricePDP = getCleanNumericValue(priceTextPDPpage);

        const priceTextCheckoutPage = await checkoutPage.getPriceText();
        const priceCheckoutPage = getCleanNumericValue(priceTextCheckoutPage);

        expect(pricePDP).toBe(priceCheckoutPage);

        expect(await checkoutPage.isVisibleButtonAddQty()).toBe(true);
        expect(await checkoutPage.isDisabledButtonDecreaseQty()).toBe(true);    

        const quantityText = await checkoutPage.getQuantityText();
        const quantity = getCleanNumericValue(quantityText);

        await checkoutPage.clickButtonAddQty();
        await page.waitForTimeout(2000);

        const newQuantityText = await checkoutPage.getQuantityText();
        const newQuantity = getCleanNumericValue(newQuantityText);

        const newpriceTextCheckoutPage = await checkoutPage.getPriceText();
        const newpriceCheckoutPage = getCleanNumericValue(newpriceTextCheckoutPage);

        expect(newQuantity).toBe(quantity + 1);
        expect(newpriceCheckoutPage).toBe(priceCheckoutPage * 2);

        await checkoutPage.clickButtonDecreaseQty();
        await page.waitForTimeout(2000);
        
        const newQtyText = await checkoutPage.getQuantityText();
        const newQty = getCleanNumericValue(newQtyText);

        const updatedPriceText = await checkoutPage.getPriceText();
        const updatedPrice = getCleanNumericValue(updatedPriceText);

        expect(newQty).toBe(quantity);
        expect(updatedPrice).toBe(priceCheckoutPage);

        expect(await checkoutPage.isVisibleButtonRemove()).toBe(true);
        await checkoutPage.clickButtonRemove();

        expect(await checkoutPage.isVisibleButtonYesRemove()).toBe(true);
        await checkoutPage.clickButtonYesRemove();

        const textCartIsEmpty = await checkoutPage.getTextShoppingCartIsEmpty();
        expect(textCartIsEmpty).toBe(cartIsEmpty);
    })
})
