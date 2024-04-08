import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb2 = () => {
  return (
    <ol className="breadcrumb style-none">
      <li className="breadcrumb-item">
        <Link to="/client">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/products-client">Products</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Shop
      </li>
    </ol>
  );
};

export default Breadcrumb2;
