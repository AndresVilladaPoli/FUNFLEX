import React from "react";
import { Link } from "react-router-dom";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import Breadcrumb2 from "../components/BreadcrumbLogged";
import RelatedProducts from "./components/RelatedProductsLogged";
import FeatureSection from "./components/FeatureSection";
import ProductDescriptions from "./components/product-descriptions-tab/ProductDescriptions";
import SingleProduct from "./components/single-product/SingleProductLogged";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../../redux/features/product-slice";
import Seo from "../../../../components/common/seo/Seo";
import HeaderLogged from "../../../../components/shop-standard/HeaderLogged";

const ProductDetailsLogged = () => {
  const product = useSelector(selectProducts)[0];
  return (
    <div className="main-page-wrapper">
      <Seo title="Product Details" />

      <HeaderLogged />

      <div className="inside-hero-nine">
        <div className="breadcrumb-area">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <nav className="breadcrumb-style-one mt-20">
                <Breadcrumb2 />
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="product-details-one mt-40">
        <div className="container">
          <SingleProduct product={product} />

          <div className="product-review-tab mt-150 lg-mt-100">
            <ProductDescriptions />
          </div>

          <FeatureSection />
        </div>
      </div>

      <div className="product-section-two mt-150 lg-mt-100">
        <div className="container">
          <div className="border-bottom pb-150 lg-pb-60">
            <div className="row align-items-center justify-content-between pb-50">
              <div className="col-md-6 col-sm-8">
                <div className="title-style-ten text-center text-sm-start xs-pb-30">
                  <h2 className="title">Releted Products</h2>
                </div>
              </div>
 
            </div>

            <div className="product_slider_two product_slider_space slick-rounded-arrow arrow-top-right exact-3 ripple-btn is_light">
              <RelatedProducts />
            </div>
          </div>
        </div>

      </div>

      <footer className="vcamp-footer-two pt-130 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40">
              <div className="logo">
              <Link to="/client">
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

export default ProductDetailsLogged;
