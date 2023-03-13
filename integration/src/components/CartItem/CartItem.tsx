import { FC } from "react";

import { changeQuantity, removeProduct } from "../../store/actions/actions";
import { CartProductType } from "../../store/types";
import { useAppDispatch } from "../../hooks/hooks";

import s from "./CartItem.module.scss";

type PropsType = {
  item: CartProductType
}

export const CartItem: FC<PropsType> = ({item}) => {
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(
      changeQuantity({id: item.id, quantityChanger: 1})
    );
  };
  const handleDecrement = () => {
    dispatch(
      changeQuantity({id: item.id, quantityChanger: -1})
    );
  };
  const handleRemove = () => {
    dispatch(
      removeProduct({id: item.id})
    );
  };

  if (!item) return null;
  return (
    <div className={s.CartItemCard}>
      <img src={item.imgUrl} alt={item.name}/>
      <div className={s.description}>
        <h3 title="name" className={s.HeaderTitle}>{item.name}</h3>
        <p>Price: ${item.price.toFixed(2)} </p>
        <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
        <button className={s.removeBtn} onClick={handleRemove} title="remove">Remove</button>
      </div>
      <div className={s.quantity}>

        <button
          className={s.decrementBtn}
          disabled={item.quantity === 1}
          onClick={handleDecrement}
          title="decrement"
        >-
        </button>
        <p title="quantity">{item.quantity}</p>
        <button
          className={s.incrementBtn}
          onClick={handleIncrement}
          title="increment">+
        </button>
      </div>
    </div>
  );
};