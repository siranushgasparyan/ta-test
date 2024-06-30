import { Locator } from "@playwright/test";

export async function closePopup (popup: Locator, closeIcon: Locator): Promise<void> {
    if(await popup.isVisible()) {
       await closeIcon.click()
    }
}
