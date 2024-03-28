import React from "react";
import { useDispatch } from "react-redux";
import { cart_product } from "../../../../../../redux/features/cart-slice";
import Quantity from "../../../../shop/sidebarFilter/Quantity";
import { useNavigate } from "react-router-dom";

const ItemContent = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Products');
  };

  const handleAddToCart = (item) => {
    dispatch(cart_product(item))
  }
  return (
    <>
      <div className="customize-order">
        <div className="row">
          <div className="col-xxl-11">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="quantity mt-25">
                  <h6>Quantity</h6>
                  <Quantity item={product} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="button-group mt-30 d-sm-flex align-items-center">
        <button onClick={() => handleAddToCart(product)} className="theme-btn-seven mt-15 me-sm-4 d-block">
          Add To Cart
        </button>
        <button className="theme-btn-nine mt-15 d-block" onClick={handleClick}>
          Back
        </button>
      </div>
    </>
  );
};

export default ItemContent;
