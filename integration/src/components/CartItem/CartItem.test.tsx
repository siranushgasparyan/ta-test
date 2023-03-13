import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";

import { CartItem } from "./CartItem";
import { testCartItem as item } from "../../store/reducers/cartReducer.test";
import { changeQuantity, removeProduct } from "../../store/actions/actions";


jest.mock("../../store/actions/actions");
const mockedStore = createMockStore([]);
let store = mockedStore({});
store.dispatch = jest.fn();


describe("<CartItem/> component", () => {
  it("Should render CartItem component with given state", () => {
    render(
      <Provider store={store}>
        <CartItem item={item}/>
      </Provider>
    );
    expect(screen.getByTitle("name")).toBeInTheDocument();
    expect(screen.getByText(/price/i)).toBeInTheDocument();
    expect(screen.getByText(/subtotal/i)).toBeInTheDocument();
    expect(screen.getByTitle("quantity")).toBeInTheDocument();
  });

  it("Should dispatch an incrementing changeQuantity() action on click", () => {
    render(
      <Provider store={store}>
        <CartItem item={item}/>
      </Provider>
    );
    expect(changeQuantity).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTitle("increment"));
    expect(changeQuantity).toHaveBeenCalledTimes(1);
    expect(changeQuantity).toHaveBeenCalledWith({id: 1, quantityChanger: 1});
  });

  it("Should render decrement button disabled if quantity equals to one", () => {
    render(
      <Provider store={store}>
        <CartItem item={{...item, quantity: 1}}/>
      </Provider>
    );
    expect(screen.getByTitle("decrement")).toBeDisabled();
    expect(changeQuantity).not.toHaveBeenCalled();
  });
  it("Should dispatch a decrementing changeQuantity() action on click", () => {
    render(
      <Provider store={store}>
        <CartItem item={item}/>
      </Provider>
    );
    expect(changeQuantity).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTitle("decrement"));
    expect(changeQuantity).toHaveBeenCalledTimes(1);
    expect(changeQuantity).toHaveBeenCalledWith({id: 1, quantityChanger: -1});
  });

  it("Should dispatch removeProduct() action on click", () => {
    render(
      <Provider store={store}>
        <CartItem item={item}/>
      </Provider>
    );
    expect(removeProduct).not.toHaveBeenCalled()
    fireEvent.click(screen.getByTitle("remove"));
    expect(removeProduct).toHaveBeenCalledTimes(1);
    expect(removeProduct).toHaveBeenCalledWith({id: 1});
  });
});