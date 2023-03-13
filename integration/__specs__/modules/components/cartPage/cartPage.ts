import { Container } from '@Core/container';
import type { CartStateType } from 'frontend/store/types';

const SELECTORS = {
    emptyCart: './/h2[text()="Cart is empty, please add items"]',
};

export class CartPageContainer extends Container {
    public async fulfill(initialState?: CartStateType): Promise<void> {
        await super.fulfill(initialState);
    }

    public isEmpty(): boolean {
        return Boolean(document.$x(SELECTORS.emptyCart));
    }
}
