import React from "react";
import { useDispatch } from "react-redux";
import { clear_cart } from "../../../../../../redux/features/cart-slice";

const Clear = () => {
  const dispatch = useDispatch()
  return (
    <div className="clear-section d-flex flex-column">
  
      <div className="mt-auto">
        <button onClick={() => dispatch(clear_cart())} className="theme-btn-seven update-cart-button">
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default Clear;
