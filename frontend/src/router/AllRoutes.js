import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopStandard from "../pages/home-pages/ShopStandard";
import PortfolioV11 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV11";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopStandard />} />
        <Route path="/products" element={<PortfolioV11/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;
