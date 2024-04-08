import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopStandard from "../pages/home-pages/ShopStandard";
import PortfolioV11 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV11";
import ProductDetails from "../pages/inner-pages/shop/shop-elements/ProductDetails";
import DynamicProductDetails from "../pages/inner-pages/shop/shop-elements/DynamicProductDetails";
import Cart from "../pages/inner-pages/shop/shop-elements/Cart";
import History from "../pages/inner-pages/shop/shop-elements/History";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/inner-pages/shop/shop-elements/SignIn";
import SignUpAdmin from "../pages/inner-pages/shop/shop-elements/SignUpAdmin";
import SignUpClient from "../pages/inner-pages/shop/shop-elements/signUpClient"
import LandingClient from "../pages/home-pages/LandingClient";
import CartClient from "../pages/inner-pages/shop/shop-elements/CartClient";
import PortfolioV11Client from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV11Client";
import DynamicProductDetailsLogged from "../pages/inner-pages/shop/shop-elements/DynamicProductDetailsLogged";
import PortfolioV11Admin from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV1Admin";
import EditProduct from "../pages/inner-pages/shop/shop-elements/edit-product";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopStandard />} />
        <Route path="/products" element={<PortfolioV11/>} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<History />} />
        <Route path="/client" element={<LandingClient />} />
        <Route path="/cart-client" element={<CartClient />} />
        <Route path="/products-client" element={<PortfolioV11Client />} />
        <Route path="/admin" element={<PortfolioV11Admin />} />
        <Route path="/edit-product" element={<EditProduct />} />





        <Route
          path="/product-details/:id"
          element={<DynamicProductDetails />}
        />

        <Route
          path="/product-details-logged/:id"
          element={<DynamicProductDetailsLogged />}
        />
      

        <Route path="*" element={<NotFound />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up-admin" element={<SignUpAdmin />} />
        <Route path="/sign-up-client" element={<SignUpClient />} />

      </Routes>
    </>
  );
};

export default AllRoutes;
