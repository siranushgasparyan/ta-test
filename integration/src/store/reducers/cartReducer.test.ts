import reducer, { initialState } from "./cartReducer";
import { ActionTypes, actionTypes, CartProductType } from "../types";

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.123456789);
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});

export const testCartItem: CartProductType = {
  id: 1,
  imgUrl: "test image URL",
  name: "Test Name",
  price: 1,
  quantity: 2,
};

describe("cart reducer", () => {
  const stateBefore = {
    ...initialState,
    isLoading: true,
  };

  it("LOAD_PRODUCTS", () => {
    const action: ActionTypes = {
      type: actionTypes.LOAD_PRODUCTS,
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it("LOAD_PRODUCTS_SUCCESS", () => {
    const action: ActionTypes = {
      type: actionTypes.LOAD_PRODUCTS_SUCCESS,
      payload: [testCartItem],
    };
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      data: action.payload,
    });
  });

  it("LOAD_PRODUCTS_FAILURE", () => {
    const action: ActionTypes = {
      type: actionTypes.LOAD_PRODUCTS_FAILURE,
      payload: "Error 502",
    };
    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      error: action.payload,
    });
  });

  it("CHANGE_QUANTITY: Attempt to increment item quantity by 1", () => {
    const action: ActionTypes = {
      type: actionTypes.CHANGE_QUANTITY,
      payload: { id: 1, quantityChanger: 1 },
    };
    expect(reducer({ ...initialState, data: [testCartItem] }, action)).toEqual({
      ...initialState,
      data: [{ ...testCartItem, quantity: 3 }],
    });
  });

  it("CHANGE_QUANTITY: Attempt to decrement item quantity by 1", () => {
    const action: ActionTypes = {
      type: actionTypes.CHANGE_QUANTITY,
      payload: { id: 1, quantityChanger: -1 },
    };
    expect(reducer({ ...initialState, data: [testCartItem] }, action)).toEqual({
      ...initialState,
      data: [{ ...testCartItem, quantity: 1 }],
    });
  });

  it("REMOVE_PRODUCT", () => {
    const action: ActionTypes = {
      type: actionTypes.REMOVE_PRODUCT,
      payload: { id: 1 },
    };
    expect(reducer({ ...initialState, data: [testCartItem] }, action)).toEqual({
      ...initialState,
      data: [],
    });
  });

  it("ADD_PRODUCT new item should have zero index", () => {
    const action: ActionTypes = {
      type: actionTypes.ADD_PRODUCT,
      payload: {
        name: "New product",
        quantity: 1,
        price: 1,
      },
    };
    const newItem = {
      ...action.payload,
      id: Math.random(),
      imgUrl:
        "https://grassrootscha.com/wp-content/uploads/2018/11/shutterstock_161251868-1.jpg",
    };
    expect(reducer({ ...initialState, data: [testCartItem] }, action)).toEqual({
      ...initialState,
      data: [newItem, testCartItem],
    });
  });
});
