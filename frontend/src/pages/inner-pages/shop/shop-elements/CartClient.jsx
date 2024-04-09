import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartProduct } from "../../../../redux/features/cart-slice";
import CartTotal from "./components/cart/CartTotal";
import Clear from "./components/cart/ClearCart";
import SingleCart from "./components/cart/SingleCart";
import Seo from "../../../../components/common/seo/Seo";
import HeaderLogged from "../../../../components/shop-standard/HeaderLogged";


const CartClient = () => {
  const cartItems = useSelector(cartProduct);
  const handleClick = () => {
    alert('¡Realizaste tu compra con éxito!');
  };
  return (
    <div className="main-page-wrapper">
      <Seo title="Cart" />
    
      <HeaderLogged />

     
      <div className="cart-section pt-250 pb-100 lg-pt-150 sm-pb-50 border-bottom">
        <div className="container">
          {cartItems.length === 0 && (
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <h3>Your cart is empty</h3>
                <Link to="/products-client" className="theme-btn-seven mt-25">
                  Return to shop
                </Link>
              </div>
            </div>
          )}
          {cartItems.length > 0 && (
            <div className="cart-list-form">
              <div className="table-responsive">
                <SingleCart />
              </div>

              <div className="d-sm-flex justify-content-between cart-footer">
                <Clear />

                <div className="cart-total-section d-flex flex-column sm-pt-40">
                  <CartTotal />
                  <button onClick={handleClick}
                    className="theme-btn-seven checkout-process mt-30"
                  >
                    BUY
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartClient;
