import React from "react";
import {
  cartProduct,
  cart_product,
  decrease_quantity,
} from "../../../../redux/features/cart-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Quantity = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartProduct);
  const cartItem = cartItems.find((i) => Number(i.id) === Number(item.id));

  const handleAddToCart = (item) => {
    dispatch(cart_product(item));
  };

  const handleDecaresToCart = (item) => {
    dispatch(decrease_quantity(item));
  };

  return (
    <div className="button-group">
      <ul className="style-none justify-content-between d-flex align-items-center">
        <li>
          <button
            onClick={() => handleDecaresToCart(item)}
            className="value-decrease"
          >
            -
          </button>
        </li>
        <li className="product-value val">
          {cartItem?.quantity ? cartItem?.quantity : 0}
        </li>
        <li>
          <button
            onClick={() => handleAddToCart(item)}
            className="value-increase"
          >
            +{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Quantity;
