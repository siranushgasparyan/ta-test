import React, { FC } from "react";

import { CartItem } from "../CartItem/CartItem";
import { useAppSelector } from "../../hooks/hooks";
import { getCartItems } from "../../store/selectors/selectors";

import s from "./Cart.module.scss";


export const Cart: FC = () => {
  const cartItems = useAppSelector(getCartItems);
  return (
    <>
      {
        cartItems.length === 0
          ? <h2 className={s.emptyCart}>Cart is empty, please add items</h2>
          : <div>
            {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
          </div>
      }
    </>
  );
};