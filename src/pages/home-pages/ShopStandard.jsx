import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/shop-standard/Header";
import HeroSlider from "../../components/shop-standard/HeroSlider";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Seo from "../../components/common/seo/Seo";

const ShopStandard = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Home" />
      
      <Header />

      
       <div className="hero-banner-six">

        <div className="shop-hero-slider-one mb-100">
          <HeroSlider />
        </div>
        
       </div> 
      
      <footer className="vcamp-footer-two pt-200 lg-pt-100 ">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40">
              <div className="logo" >
                <Link to="/">
                  <img
                    src={
                      require("../../assets/images/logo/funflexblanco.png")
                    }
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

export default ShopStandard;
