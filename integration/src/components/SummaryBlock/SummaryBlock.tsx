import { FC } from "react";
import { useSelector } from "react-redux";

import { getTotalPrice } from "../../store/selectors/selectors";

import s from "./SummaryBlock.module.scss";
import { pushToDataLayer } from "../../dataLayer/dataLayer";

export const SummaryBlock: FC = () => {
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div className={s.summary}>
      <h3>Total price:</h3>
      <p>${totalPrice.toFixed(2)}</p>
      <button
        disabled={totalPrice === 0}
        className={s.checkoutBtn}
        onClick={() =>
          pushToDataLayer({
            name: "Proceed to Checkout",
            value: "$" + totalPrice.toFixed(2),
          })
        }
      >
        Proceed to Checkout
      </button>
    </div>
  );
};
