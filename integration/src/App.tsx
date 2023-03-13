import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import ShoppingCartPage from "./pages/App/ShoppingCartPage";

window.dataLayer = [];
const App: FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path={"/shopping-cart-typescript"}
              element={<ShoppingCartPage />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
