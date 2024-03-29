import React from "react";

const ExistingUser = () => {
  return (
    <div className="checkout-toggle-area mb-80 md-mb-60">
      {/* Already have an account */}
      <p>
        Already have an account?{" "}
        <button
          className="d-inline-block"
          data-bs-toggle="collapse"
          data-bs-target="#login-form"
        >
          Click here to login.
        </button>
      </p>

      <form id="login-form" className="collapse">
        <p>Please enter your details below.</p>
        <div className="row">
          <div className="col-md-6">
            <input type="text" placeholder="User name or email" required />
          </div>
          <div className="col-md-6">
            <input type="password" placeholder="Password" required />
          </div>
        </div>

        <button className="theme-btn-one">Login</button>
        <a href="#" className="lost-passw">
          Lost your Password?
        </a>
      </form>
      {/*  {/* End  Already have an account form */}

      {/* Have a promo code */}
      <p>
        Have a promo code?{" "}
        <button
          className="d-inline-block"
          data-bs-toggle="collapse"
          data-bs-target="#promo-code"
        >
          Click to enter your code.
        </button>
      </p>

      <form id="promo-code" className="collapse">
        <p>Please enter your promo code below.</p>
        <input type="text" placeholder="Coupon code" required />
        <button className="theme-btn-one">Apply coupon</button>
      </form>
      {/* End promo code form */}
    </div>
  );
};

export default ExistingUser;
