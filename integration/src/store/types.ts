export enum actionTypes {
  LOAD_PRODUCTS = "LOAD_PRODUCTS",
  LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS",
  LOAD_PRODUCTS_FAILURE = "LOAD_PRODUCTS_FAILURE",
  CHANGE_QUANTITY = "CHANGE_QUANTITY",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  ADD_PRODUCT = "ADD_PRODUCT",
}

export type CartProductType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
};

export type CartStateType = {
  data: Array<CartProductType>;
  isLoading: boolean;
  error: null | string;
};

export type FormValuesType = {
  name: string;
  price: number;
  quantity: number;
};

//Redux Action types
type LoadProductsType = {
  type: actionTypes.LOAD_PRODUCTS;
};

type LoadProductSuccessType = {
  type: actionTypes.LOAD_PRODUCTS_SUCCESS;
  payload: CartProductType[];
};

type LoadProductsFailureType = {
  type: actionTypes.LOAD_PRODUCTS_FAILURE;
  payload: string;
};

type ChangeQuantityType = {
  type: actionTypes.CHANGE_QUANTITY;
  payload: {
    id: number;
    quantityChanger: number;
  };
};

type DeleteProductType = {
  type: actionTypes.REMOVE_PRODUCT;
  payload: {
    id: number;
  };
};

type AddProductType = {
  type: actionTypes.ADD_PRODUCT;
  payload: FormValuesType;
};

export type ActionTypes =
  | LoadProductsType
  | LoadProductSuccessType
  | LoadProductsFailureType
  | ChangeQuantityType
  | DeleteProductType
  | AddProductType;
