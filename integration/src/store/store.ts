import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import cartReducer from "./reducers/cartReducer";
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  cartReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>

export default store;