import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopStandard from "../pages/home-pages/ShopStandard";
import PortfolioV11 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV11";
import ProductDetails from "../pages/inner-pages/shop/shop-elements/ProductDetails";
import DynamicProductDetails from "../pages/inner-pages/shop/shop-elements/DynamicProductDetails";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopStandard />} />
        <Route path="/products" element={<PortfolioV11/>} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route
          path="/product-details/:id"
          element={<DynamicProductDetails />}
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
