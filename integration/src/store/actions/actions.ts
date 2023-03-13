import {
  ActionTypes,
  actionTypes,
  CartProductType,
  FormValuesType,
} from "../types";

export const loadProducts = (): ActionTypes => ({
  type: actionTypes.LOAD_PRODUCTS,
});

export const loadProductsSuccess = (
  payload: Array<CartProductType>
): ActionTypes => ({
  type: actionTypes.LOAD_PRODUCTS_SUCCESS,
  payload,
});

export const loadProductsFailure = (payload: string): ActionTypes => ({
  type: actionTypes.LOAD_PRODUCTS_FAILURE,
  payload,
});

export const changeQuantity = (payload: {
  id: number;
  quantityChanger: number;
}): ActionTypes => ({
  type: actionTypes.CHANGE_QUANTITY,
  payload,
});

export const removeProduct = (payload: { id: number }): ActionTypes => ({
  type: actionTypes.REMOVE_PRODUCT,
  payload,
});

export const addProduct = (payload: FormValuesType): ActionTypes => ({
  type: actionTypes.ADD_PRODUCT,
  payload,
});
