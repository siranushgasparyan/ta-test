import {
  addProduct,
  changeQuantity,
  removeProduct,
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
} from "./actions";
import { actionTypes, ActionTypes } from "../types";
import { testCartItem } from "../reducers/cartReducer.test";

describe("Cart actions", () => {
  it("loadProducts() should create an action to set isLoading to true", () => {
    const expectedAction: ActionTypes = {
      type: actionTypes.LOAD_PRODUCTS,
    };
    expect(loadProducts()).toEqual(expectedAction);
  });

  it("loadProductsSuccess() should create an action to set isLoading to false and set items", () => {
    const expectedAction: ActionTypes = {
      type: actionTypes.LOAD_PRODUCTS_SUCCESS,
      payload: [testCartItem],
    };
    expect(loadProductsSuccess([testCartItem])).toEqual(expectedAction);
  });

  it("loadProductsFailure() should create an action to set isLoading to false and set error message", () => {
    const expectedAction: ActionTypes = {
      type: actionTypes.LOAD_PRODUCTS_FAILURE,
      payload: "Error",
    };
    expect(loadProductsFailure("Error")).toEqual(expectedAction);
  });

  it(`changeQuantity() should create an action to change item's quantity`, () => {
    const expectedAction: ActionTypes = {
      type: actionTypes.CHANGE_QUANTITY,
      payload: { id: 1, quantityChanger: 1 },
    };
    expect(changeQuantity({ quantityChanger: 1, id: 1 })).toEqual(
      expectedAction
    );
  });

  it("removeProduct() should delete an item with the passed id", () => {
    const expectedAction: ActionTypes = {
      type: actionTypes.REMOVE_PRODUCT,
      payload: { id: 1 },
    };
    expect(removeProduct({ id: 1 })).toEqual(expectedAction);
  });

  it("addProduct() should add new item to the cart", () => {
    const expectedAction: ActionTypes = {
      type: actionTypes.ADD_PRODUCT,
      payload: { name: "Test", price: 1, quantity: 1 },
    };
    expect(addProduct({ name: "Test", price: 1, quantity: 1 })).toEqual(
      expectedAction
    );
  });
});
