import { FC, useEffect } from "react";

import { SummaryBlock } from "../../components/SummaryBlock/SummaryBlock";
import { Cart } from "../../components/Cart/Cart";
import { AddNewItemForm } from "../../components/AddNewItemForm/AddNewItemForm";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getLoadingStatus } from "../../store/selectors/selectors";
import { loadProducts } from "../../store/actions/actions";

import s from "./ShoppingCartPage.module.scss";

const ShoppingCartPage: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getLoadingStatus);
  useEffect(() => dispatch(loadProducts()), [dispatch]);
  return (
    <>
      <h1 className={s.header}>Shopping cart</h1>
      {isLoading ? (
        <h2 className={s.loading}>Loading...</h2>
      ) : (
        <div className={s.mainPart}>
          <Cart />
          <div className={s.totalAndForm}>
            <SummaryBlock />
            <AddNewItemForm />
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCartPage;
