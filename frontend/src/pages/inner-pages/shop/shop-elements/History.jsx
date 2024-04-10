import React from 'react';
import { useSelector } from 'react-redux';
import { purchaseHistory } from '../../../../redux/features/cart-slice';
import Seo from "../../../../components/common/seo/Seo";
import HeaderLogged from "../../../../components/shop-standard/HeaderLogged";
import { Link } from "react-router-dom";

const History = () => {
  const history = useSelector(purchaseHistory);

  return (
    <div className="main-page-wrapper">
      <Seo title="Purchase History" />
      <HeaderLogged />
      <div className="cart-section pt-250 pb-100 lg-pt-150 sm-pb-50 border-bottom">
        <div className="container">
        <div style={{ textAlign: 'center' ,fontFamily: 'gorditamedium', marginBottom: '80px'}}>
          <h2>History</h2>
          </div>
          {history.length > 0 ? (
            <div className="cart-list-form">
              {history.map((order, index) => (
                <div key={index} className="cart-list-item">
                  <div style={{ fontFamily: 'gorditamedium'}}>
                  <h3>Order #{index + 1}</h3>
                  </div>
                  <div className="table-responsive">
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
                        {order.map((product, i) => (
                          <tr key={i}>
                            <td className="product-thumbnails">
                              <Link to={`/product-details/${product.id}`} className="product-img">
                                <img src={product.img} alt={product.title} />
                              </Link>
                            </td>
                            <td className="product-info">
                              <Link to={`/product-details/${product.id}`} className="product-name">
                                {product.title}
                              </Link>
                            </td>
                            <td className="price">
                              <span>${product.price}</span>
                            </td>
                            <td className="quantity">
                              <span>{product.quantity}</span>
                            </td>
                            <td className="price total-price">
                              <span>${product.quantity * product.price}</span>
                            </td>
                            <td>&nbsp;</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <h3>Your purchase history is empty</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
