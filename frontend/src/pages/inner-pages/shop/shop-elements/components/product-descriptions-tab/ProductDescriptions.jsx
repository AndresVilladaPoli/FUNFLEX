import React from "react";

const ProductDescriptions = () => {
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
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Incidunt quia pariatur, voluptates ipsa earum perspiciatis cupiditate
                quisquam laudantium placeat dignissimos voluptate! Repudiandae quo 
                deleniti nam unde quos beatae distinctio exercitationem!
              </p>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="item2" role="tabpanel">
          <div className="row gx-5">
            <div className="col-xl-6">
              <h5>Specification:</h5>
              <ul className="style-none product-feature">
                <li>
                  Lorem ipsum
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescriptions;
