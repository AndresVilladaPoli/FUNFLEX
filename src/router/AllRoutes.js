import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopStandard from "../pages/home-pages/ShopStandard";


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopStandard />} />

      </Routes>
    </>
  );
};

export default AllRoutes;
