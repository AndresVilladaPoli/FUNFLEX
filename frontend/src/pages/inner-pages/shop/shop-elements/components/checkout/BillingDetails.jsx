import React from "react";

const BillingDetails = () => {
  return (
    <div className="col-xl-6 col-lg-7">
      <h2 className="main-title">Billign Details</h2>
      <div className="user-profile-data">
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              placeholder="First Name*"
              className="single-input-wrapper"
              required
            />
          </div>

          <div className="col-lg-6">
            <input
              type="text"
              placeholder="Last Name*"
              className="single-input-wrapper"
              required
            />
          </div>

          <div className="col-12">
            <input
              type="text"
              placeholder="Company Name*"
              className="single-input-wrapper"
              required
            />
          </div>

          <div className="col-12">
            <select className="form-select" required>
              <option value="">Country*</option>
              <option value="AF">Afghanistan</option>
              <option value="AL">Albania</option>
              <option value="AS">Australia</option>
            </select>
          </div>

          <div className="col-12">
            <input
              type="text"
              placeholder="Street Address*"
              className="single-input-wrapper"
              required
            />
          </div>

          <div className="col-lg-4">
            <input
              type="text"
              placeholder="Town/City*"
              className="single-input-wrapper"
              required
            />
          </div>

          <div className="col-lg-4">
            <input
              type="text"
              placeholder="State*"
              className="single-input-wrapper"
              required
            />
          </div>

          <div className="col-lg-4">
            <input
              type="text"
              placeholder="Zip Code*"
              className="single-input-wrapper"
              required
            />
          </div>

          <div className="col-lg-6">
            <input
              type="email"
              placeholder="Email Address*"
              className="single-input-wrapper"
              required
            />
          </div>

          <div className="col-lg-6">
            <input
              type="text"
              placeholder="Phone Number*"
              className="single-input-wrapper"
              required
            />
          </div>

          <div className="col-12">
            <ul className="checkbox-list style-none">
              <li>
                <input type="checkbox" id="new-account" />
                <label htmlFor="new-account">Create Account?</label>
              </li>
              <li>
                <input type="checkbox" id="shipping" />
                <label htmlFor="shipping">Ship to Different Address?</label>
              </li>
            </ul>
          </div>

          <div className="col-12">
            <div className="other-note-area">
              <p>Order Note (Optional)</p>
              <textarea required></textarea>
            </div>
            {/* <!-- /.other-note-area --> */}
          </div>
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.user-profile-data --> */}
    </div>
  );
};

export default BillingDetails;
