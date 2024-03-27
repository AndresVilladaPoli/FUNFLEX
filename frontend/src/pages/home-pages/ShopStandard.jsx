import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/shop-standard/Header";
import HeroSlider from "../../components/shop-standard/HeroSlider";
import AllCollection from "../../components/shop-standard/AllCollection";
import BestSelling from "../../components/shop-standard/BestSelling";

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

       <div className="product-section-one mt-180 lg-mt-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-sm-8">
              <div className="title-style-six text-center text-sm-start xs-pb-20">
                <h2 className="title">All Categories</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="box-layout mt-90 lg-mt-40">
          <div className="product_slider_one product_slider_space slick-rounded-arrow arrow-top-right exact ripple-btn is_light">
            <AllCollection />
          </div>
        </div>
      </div>
      
      <div className="product-section-three mt-130 pt-130 pb-150 lg-mt-100 lg-pt-80 lg-pb-70">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-sm-8">
              <div className="title-style-six text-center text-sm-start xs-pb-20">
                <h2 className="title">Trends</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="box-layout mt-90 lg-mt-40">
          <div className="product_slider_three product_slider_space slick-rounded-arrow arrow-top-right exact-2 ripple-btn is_light">
            <BestSelling />
          </div>
        </div>
      </div>

      <footer className="vcamp-footer-two pt-200 lg-pt-100 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-2 mb-40 ">
              <div className="logo " >
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
