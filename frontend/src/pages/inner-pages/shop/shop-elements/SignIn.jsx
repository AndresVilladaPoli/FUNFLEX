import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../../assets/images/assets/sign-in img.png";
import img2 from "../../../../assets/images/logo/funflexnegro.png"
import LoginForm from "../../../../components/common/form/LoginForm";
import Seo from "../../../../components/common/seo/Seo";

const SignIn = () => {
  return (
    <>
      <Seo title="Sign In" />

      <div className="user-data-page clearfix d-md-flex">
        <div
          className="illustration-wrapper d-none d-md-flex align-items-center justify-content-between flex-column"
          style={{ background: "#F9F5F0" }}
        >
          <div className="row">
            <div className="col-xxl-8 col-xl-11 m-auto">
              <blockquote>
                "Entertainment is the fuel that ignites our imagination and allows us to discover new realities within ourselves."
              </blockquote>
            </div>
          </div>
          <div className="illustration-holder">
            <img
              src={img1}
              alt="illustration"
              className="illustration ms-auto"
            />
          </div>
        </div>

        <div className="form-wrapper">
          <div className="d-flex justify-content-between align-items-center">
            
            <Link to="/" className="go-back-button">
              Go to home
            </Link>
          </div>

          <div className="user-data-form mt-80 lg-mt-50">
            <h2 className="font-recoleta">
              Hi <span>buddy</span>, welcome <br /> Back!
            </h2>
            <p className="header-info pt-20 pb-50 lg-pb-30">
              Still don't have an account? <Link to="/sign-up">Sign up</Link>
            </p>
            <LoginForm />
          </div>
        </div>

      </div>
      <p className="hoo">
              Copyright @2024.
      </p>

      <div className="funfleximg">
            <img
              src={img2}
              alt="illustration"
              className="illustration ms-auto"
            />
          </div>
    </>
  );
};

export default SignIn;
