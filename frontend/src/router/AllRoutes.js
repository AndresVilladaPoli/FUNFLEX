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
import AddProduct from "../pages/inner-pages/shop/shop-elements/AddProduct";
import EditProduct from "../pages/inner-pages/shop/shop-elements/edit-product";
import EditAdmin from "../pages/inner-pages/shop/shop-elements/EditAdminProfile";
import EditClient from "../pages/inner-pages/shop/shop-elements/EditClientProfile";

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
        <Route path="/edit-product/:id" element={<EditProduct />} />





        <Route
          path="/product-details/:id"
          element={<DynamicProductDetails />}
        />

        <Route
          path="/product-details-logged/:id"
          element={<DynamicProductDetailsLogged />}
        />
      

        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/sign-up-admin" element={<SignUpAdmin />} />
        <Route path="/sign-up-client" element={<SignUpClient />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-admin" element={<EditAdmin />} />
        <Route path="/edit-client" element={<EditClient />} />


      </Routes>
    </>
  );
};

export default AllRoutes;
