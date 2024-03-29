import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  cartProduct,
  remove_cart_product,
} from "../../../../../../redux/features/cart-slice";
import Quantity from "../../../components/Quantity";

const SingleCart = () => {
  const cartItems = useSelector(cartProduct);
  const dispatch = useDispatch();
  return (
    <table className="table">
      <thead>
        <tr>
          <th colSpan="2">Product</th>
          <th>Price</th>
          <th>QTY</th>
          <th>Total</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, i) => {
          return (
            <tr key={i}>
              <td className="product-thumbnails">
                <Link
                  to={`/product-details/${item.id}`}
                  className="product-img"
                >
                  <img src={item.img} alt="cart avatar" />
                </Link>
              </td>

              <td className="product-info">
                <Link
                  to={`/product-details/${item.id}`}
                  className="product-name"
                >
                  {item.title}
                </Link>
                <ul className="style-none">
                 
                </ul>
              </td>

              <td className="price">
                <span>${item.price}</span>
              </td>

              <td className="quantity">
                <ul className="order-box style-none mx-auto">
                  <Quantity item={item} />
                </ul>
              </td>

              <td className="price total-price">
                <span>${item.quantity * item.price}</span>
              </td>

              <td onClick={() => dispatch(remove_cart_product(item))}>
                <a href="#" className="remove-product">
                  x
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SingleCart;
