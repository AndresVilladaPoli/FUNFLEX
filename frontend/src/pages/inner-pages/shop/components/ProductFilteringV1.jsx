

import React from "react";

const ProductFilteringV1 = ({ categories, handleFilter }) => {
  const handleCategoryChange = (e) => {
    handleFilter(e.target.value, "All");
  };

  const handlePriceChange = (e) => {
    handleFilter("All", e.target.value);
  };

  return (
    <>
      <p>Showing 1–3 of 9 results</p>

      <ul className="shop-filter-one style-none d-md-flex align-items-center">
        <li className="me-md-3">
          <select className="form-select" onChange={handlePriceChange}>
            <option value="All">Price</option>
            <option value="<100">low</option>
            <option value=">100">high</option>
          </select>
        </li>

        <li className="me-md-3">
          <select className="form-select" onChange={handleCategoryChange}>
            <option value="All">Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </>
  );
};

export default ProductFilteringV1;

