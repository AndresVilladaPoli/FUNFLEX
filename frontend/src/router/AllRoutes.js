import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopStandard from "../pages/home-pages/ShopStandard";
import PortfolioV11 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV11";
import ProductDetails from "../pages/inner-pages/shop/shop-elements/ProductDetails";
import DynamicProductDetails from "../pages/inner-pages/shop/shop-elements/DynamicProductDetails";
import Cart from "../pages/inner-pages/shop/shop-elements/Cart";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/inner-pages/shop/shop-elements/SignIn";
import SignUpAdmin from "../pages/inner-pages/shop/shop-elements/SignUpAdmin";


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopStandard />} />
        <Route path="/products" element={<PortfolioV11/>} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/product-details/:id"
          element={<DynamicProductDetails />}
        />

        <Route path="*" element={<NotFound />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up-admin" element={<SignUpAdmin />} />

      </Routes>
    </>
  );
};

export default AllRoutes;
