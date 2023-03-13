import type { RenderResult } from '@testing-library/react';
import { render, cleanup } from '@testing-library/react';
import { debug } from '@Utils/debug';
import { delay } from '@Utils/delay';
import React from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { Provider } from 'react-redux'; // eslint-disable-line @typescript-eslint/no-unused-vars
import type { Store } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Mock } from '@Core/mock';
import rootSaga from 'frontend/store/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from 'frontend/store/reducers/cartReducer';
import type { CartStateType } from 'frontend/store/types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingCartPage from 'frontend/pages/App/ShoppingCartPage';

const sagaMiddleware = createSagaMiddleware();

export class Container {
    private page: RenderResult;
    private store: Store;

    // eslint-disable-next-line no-empty-function,@typescript-eslint/no-empty-function
    public addDefaultMocks(): void {}

    public debug(): void {
        debug();
    }

    public async destroy(): Promise<void> {
        await cleanup();
        this.page && this.page.unmount();
    }

    public async fulfill(initialState?: CartStateType): Promise<void> {
        Mock.getInstance();

        const store = createStore(cartReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
        sagaMiddleware.run(rootSaga);

        this.store = store;
        this.page = render(
            <Provider store={store}>
                <ShoppingCartPage />
            </Provider>
        );
        await delay(100);
    }

    public getStore(): Store {
        return this.store;
    }
}
