import axios, { AxiosResponse } from "axios";
import { takeLatest, call, put, all } from "redux-saga/effects";

import { actionTypes, CartProductType } from "../types";
import { loadProductsFailure, loadProductsSuccess } from "../actions/actions";

function* workerSaga() {
  try {
    const { data }: AxiosResponse<Array<CartProductType>> = yield call(
      axios,
      "https://my-json-server.typicode.com/dmitrymaks252/dmitrymaks252/products"
    );
    yield put(loadProductsSuccess(data));
  } catch (e) {
    window.alert(e);
    if (e instanceof Error) {
      yield put(loadProductsFailure(e.message));
    }
  }
}

function* watcherSaga() {
  yield takeLatest(actionTypes.LOAD_PRODUCTS, workerSaga);
}

export default function* rootSaga() {
  yield all([watcherSaga()]);
}
