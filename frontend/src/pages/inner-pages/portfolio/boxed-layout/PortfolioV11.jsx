import React from "react";
import Header from "../../../../components/portfolio/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import { Link } from "react-router-dom";
import Pagination from "../../shop/components/Pagination";
import Breadcrumb from "../../shop/components/Breadcrumb";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV11 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Products" />

      <Header />

      <div className="vcamp-text-block-one pt-180 md-pt-130">
        <div className="container">
          <div className="pb-75 md-pb-50">
            <div className="row">
              <div className="col-12 m-auto">
                <div className="text-wrapper text-center ps-0">
                  <div className="title-style-one">
                    <h3 className="title">Products</h3>
                  </div>
                  <p className="text-lg pt-35 lg-pt-30">
                    The best entertainment products on the market.
                  </p>
                </div>
                <div className="breadcrumb-area">
                  <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                      <nav className="breadcrumb-style-one mt-20">
                        <Breadcrumb />
                      </nav>
                      <div className="share-dropdown mt-20">
                        <div className="dropdown-menu dropdown-menu-end">
                          <ul className="d-flex justify-content-between social-icon style-none">
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-gallery-eight portfolio-gallery-three border-top pt-130 pb-150 lg-pt-80 lg-pb-90">
      </div>
      <div className="page-pagination-one pt-30 ml-550">
        <Pagination />
      </div>
      <footer className="vcamp-footer-two border-top pt-130 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40">
              <div className="logo">
                <Link to="/">
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
export default PortfolioV11;
