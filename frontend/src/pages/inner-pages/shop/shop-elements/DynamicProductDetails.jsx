import { useParams, Link } from "react-router-dom";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import Seo from "../../../../components/common/seo/Seo";
import Header from "../../../../components/shop-standard/Header";
import useProducts from "../../../../hooks/use-products";
import Breadcrumb2 from "../components/Breadcrumb2";
import FeatureSection from "./components/FeatureSection";
import ProductDescriptions from "./components/product-descriptions-tab/ProductDescriptions";
import SingleProduct from "./components/single-product/SingleProduct";

const DynamicProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((prd) => Number(prd.id) === Number(id));
  return (
    <div className="main-page-wrapper">
      <Seo title="Shop" />

      <Header />

      <div className="inside-hero-nine pt-200">
        <div className="breadcrumb-area">
          <div className="container">
            <div className="breadcrumb-area">
              <div className="title-style-one">
                <h3 className="title page-title font-recoleta text-center">Buy Product</h3>
              </div>
                <div className="d-flex align-items-center justify-content-between">
                  <nav className="breadcrumb-style-one mt-20">
                    <Breadcrumb2 />
                  </nav>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-details-one mt-40">
        <div className="container">
          <SingleProduct product={product} />

          <div className="product-review-tab mt-150 lg-mt-100">
            <ProductDescriptions productId={id} /> 
          </div>
          <FeatureSection />
        </div>
      </div>

      <footer className="vcamp-footer-two pt-130 lg-pt-100">
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

export default DynamicProductDetails;
