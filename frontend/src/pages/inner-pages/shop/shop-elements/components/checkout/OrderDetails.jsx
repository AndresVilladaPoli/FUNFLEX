import React, { useState } from "react";

const OrderDetails = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="col-xxl-4 col-lg-5 ms-auto">
      <div className="order-confirm-sheet md-mt-60">
        <h2 className="main-title">Order Details</h2>
        <div className="order-review">
          <table className="product-review">
            <tbody>
              <tr>
                <th>
                  <span>Bluthooth Speaker</span>
                </th>
                <td>
                  <span>$123.78</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span>Subtotal</span>
                </th>
                <td>
                  <span>$123.78</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span>Shipping</span>
                </th>
                <td>
                  <span>$5.00</span>
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <th>
                  <span>Total</span>
                </th>
                <td>
                  <span>$128.00</span>
                </td>
              </tr>
            </tfoot>
          </table>
          {/* End total and subtotal area */}

          {/* <!-- /.product-review --> */}
          <div className="payment-option">
            <ul className="payment-list style-none">
              <li>
                <input
                  type="radio"
                  name="paymenttype"
                  value="directbank"
                  defaultChecked="checked"
                  className="payment-radio-button"
                />
                <label>Direct Bank Transfer</label>
                <p>
                  Make your payment directly into our account. Plase use your
                  Order ID as payment reference.
                </p>
              </li>

              <li>
                <input
                  type="radio"
                  name="paymenttype"
                  value="paypal"
                  className="payment-radio-button"
                />
                <label>PayPal</label>
              </li>

              <li>
                <input
                  type="radio"
                  name="paymenttype"
                  value="creditCard"
                  className="payment-radio-button"
                  onClick={handleClick}
                />
                <label>Credit Card</label>
              </li>

              <li
                className={
                  click ? "credit-card-form active" : "credit-card-form"
                }
              >
                <div className="row">
                  <div className="col-12">
                    <h6>Card number</h6>
                    <input type="text" />
                  </div>
                  <div className="col-8">
                    <h6>Expiry date</h6>
                    <div className="d-flex align-items-center">
                      <input type="tel" placeholder="MM" />
                      <span>/</span>
                      <input type="tel" placeholder="YY" />
                    </div>
                  </div>
                  <div className="col-4 ml-auto">
                    <h6>CVV</h6>
                    <input type="text" />
                  </div>
                </div>
              </li>
            </ul>
            {/* <!-- /.payment-list --> */}
          </div>
          {/* <!-- /.payment-option --> */}
          <p className="policy-text">
            Your personal data will be use for your order, support your
            experience through this website & for other purpose described in our
            privacy policy
          </p>
          <div className="agreement-checkbox">
            <input type="checkbox" id="agreement" />
            <label htmlFor="agreement">
              I have read and agree to the website terms and conditions*
            </label>
          </div>
          {/* <!-- /.agreement-checkbox --> */}

          <button className="theme-btn-seven w-100">Place Order</button>
        </div>
        {/* <!-- /.order-review --> */}
      </div>
      {/* <!-- /.order-confirm-sheet --> */}
    </div>
  );
};

export default OrderDetails;
