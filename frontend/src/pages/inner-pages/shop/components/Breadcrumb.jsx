import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <ol className="breadcrumb style-none">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Products
      </li>
    </ol>
  );
};

export default Breadcrumb;
