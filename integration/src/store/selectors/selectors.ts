import { createSelector } from "reselect";

import { RootState } from "../store";
import { CartProductType } from "../types";

export const getCartItems = (store: RootState): Array<CartProductType> =>
  store.data;

export const getLoadingStatus = (store: RootState): boolean => store.isLoading;

export const getTotalPrice = createSelector(getCartItems, (items) =>
  items.reduce((price, item) => price + item.price * item.quantity, 0)
);
