import React from "react";
import products from "../single-product/ProductsData";

const ProductDescriptions = ({ productId }) => {
  const productIdNumber = parseInt(productId);
  const product = products.find((p) => p.id === productIdNumber);
  const { detailedDescription, technicalInfo } = product;

  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#item1"
            type="button"
            role="tab"
            aria-selected="true"
          >
            Description
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#item2"
            type="button"
            role="tab"
            aria-selected="false"
          >
            Technical Info
          </button>
        </li>
      </ul>

      <div className="tab-content mt-50 lg-mt-20">
        <div className="tab-pane fade show active" id="item1" role="tabpanel">
          <div className="row gx-5">
            <div className="col-xl-6">
              <h5>Description detail:</h5>
              <p>{detailedDescription}</p>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="item2" role="tabpanel">
          <div className="row gx-5">
            <div className="col-xl-6">
              <h5>Technical Info:</h5>
              <p>{technicalInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescriptions;
