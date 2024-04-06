import React from "react";
import { Link } from "react-router-dom";
import HeaderLogged from "../../../../components/shop-standard/HeaderLogged";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import Seo from "../../../../components/common/seo/Seo";

const History = () => {
  return (
    <div className="main-page-wrapper" style={{ minHeight: "100vh", position: "relative" }}>
      <Seo title="Cart" />
    
      <HeaderLogged />

      <div className="cart-section pt-250 pb-100 lg-pt-150 sm-pb-50 border-bottom">
       
      </div>

      <footer className="vcamp-footer-two pt-200 lg-pt-100" style={{ position: "absolute", bottom: 0, width: "100%", padding: "20px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-2 mb-40 ">
              <div className="logo " >
                <Link to="/">
                  <img
                    src={require("../../../../assets/images/logo/funflexblanco.png")}
                    alt="brand"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bottom-footer">
            <CopyrightFooter />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default History;
