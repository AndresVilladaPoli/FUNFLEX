import React from "react";

const ProductFilteringV1 = () => {
  return (
    <>
      <p>Showing 1–6 of 10 results</p>

      <ul className="shop-filter-one style-none d-md-flex align-items-center">
        <li className="me-md-3">
          <select className="form-select">
            <option value="Price">Price</option>
            <option value="Price: low to high">Price: low to high</option>
            <option value="Price: high to low">Price: high to low</option>
          </select>
        </li>

        <li className="me-md-3">
          <select className="form-select">
            <option value="Category">Category</option>
            <option value="Entertainment items">Entertainment</option>
            <option value="Books items">Books</option>
            <option value="Consoles items">Consoles</option>
            <option value="Videogames items">Videogames</option>
            <option value="Music items">Music</option>

          </select>
        </li>

      </ul>
    </>
  );
};

export default ProductFilteringV1;
