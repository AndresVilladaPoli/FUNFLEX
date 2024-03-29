import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  remove_wishlist_product,
  wishlistItems,
} from "../../../../../../redux/features/wishlist-slice";
import { cart_product } from "../../../../../../redux/features/cart-slice";

const SingleWishlist = () => {
  const wishlistProducts = useSelector(wishlistItems);
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
        {wishlistProducts.map((prd, i) => (
          <tr key={i}>
            <td className="product-thumbnails">
              <Link to={`/product-details/${prd.id}`} className="product-img">
                <img src={prd.img} alt="cart avatar" />
              </Link>
            </td>

            <td className="product-info">
              <Link to={`/product-details/${prd.id}`} className="product-name">
                {prd.title}
              </Link>
            </td>

            <td className="price">
              <span>${prd.price}</span>
            </td>

            <td onClick={() => dispatch(cart_product(prd))}>
              <ul className="wishlist-cart">
                <li>
                  <button
                    type="button"
                    className="theme-btn-seven mt-15 me-sm-4 "
                  >
                    Add To Cart
                  </button>
                </li>
              </ul>
            </td>

            <td className="price total-price">
              <span>${prd.price}</span>
            </td>

            <td onClick={() => dispatch(remove_wishlist_product(prd))}>
              <a href="#" className="remove-product">
                x
              </a>
            </td>
          </tr>
        ))}
        {/* End tr */}
      </tbody>
    </table>
  );
};

export default SingleWishlist;
