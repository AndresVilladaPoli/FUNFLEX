import React from "react";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import { Link } from "react-router-dom";
import Pagination from "../../shop/components/Pagination";
import Seo from "../../../../components/common/seo/Seo";
import ProductFilteringV1 from "../../shop/components/ProductFilteringV1";
import ProductV1 from "../../shop/components/ProductV1Admin";
import HeaderAdmin from "../../../../components/shop-standard/HeaderAdmin";

const PortfolioV11Admin = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Products" />

      <HeaderAdmin />

      <div className="vcamp-text-block-one pt-180 md-pt-130">
          <div className="text-wrapper text-center ps-0">
            <div className="title-style-one">
              <h3 className="title page-title font-recoleta">Products</h3>
            </div>
          </div>
          
      </div>
      <div className="product-section-four mt-150 lg-mt-90">
      <div className="container" style={{marginRight:'0px'}}>
            <Link to="/add-product"><button
                    type="button"
                    className="theme-btn-add"
                  >
                    +  Add product
                  </button></Link>
            </div>
        <div className="container">
        
          <div className="shop-page-header d-lg-flex align-items-center justify-content-between">
            
            <ProductFilteringV1 />
          </div>

          <div className="products-wrapper mt-60 lg-mt-40">
            <div className="row gx-xl-5">
              <ProductV1 />
            </div>
            <div className="page-pagination-one pt-45 lg-pt-30">
              <Pagination className="justify-content-center" />
            </div>
          </div>

        </div>
      </div>
      <footer className="vcamp-footer-two border-top pt-130 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40">
              <div className="logo">
                <Link to="/admin">
                  <img
                    src={
                      require("../../../../assets/images/logo/funflexblanco.png")
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
export default PortfolioV11Admin;
