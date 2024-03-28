import React from "react";
import ItemContent from "./ItemContent";

import img1 from "../../../../../../assets/images/shop/image 9ps5 3.png";
import img2 from "../../../../../../assets/images/shop/image 10ps5 1.png";
import img3 from "../../../../../../assets/images/shop/image 11ps5 2.png";

const SingleProduct = ({ product }) => {
  const smallThumbContent = [
    {
      id: 1,
      img: product.img,
      isActive: "active",
      itemTarget: "#img",
      isSelected: false,
    },
    {
      id: 2,
      img: img1,
      isActive: "",
      itemTarget: "#img1",
      isSelected: true,
    },
    {
      id: 3,
      img: img2,
      isActive: "",
      itemTarget: "#img2",
      isSelected: false,
    },
    {
      id: 4,
      img: img3,
      isActive: "",
      itemTarget: "#img3",
      isSelected: false,
    },
  ];

  const largeThumbContent = [
    {
      id: 1,
      img: product.img,
      isActive: "show active",
      itemTarget: "img",
    },
    {
     id: 2,
    img: img1,
    isActive: "",
    itemTarget: "img1",
    },
    {
      id: 3,
      img: img2,
      isActive: "",
      itemTarget: "img2",
    },
    {
      id: 4,
      img: img3,
      isActive: "",
      itemTarget: "img3",
    },
  ];

  return (
    <>
      {" "}
      <div className="row">
        <div className="col-lg-5 order-lg-2">
          <div className="tab-content product-img-tab-content h-100">
            {largeThumbContent.map((item) => (
              <div
                className={`tab-pane fade ${item.isActive} h-100`}
                id={item.itemTarget}
                role="tabpanel"
                key={item.id}
              >
                <div className="fancybox h-100 w-100 d-flex align-items-center justify-content-center">
                  <img src={item.img} alt="product single" className="m-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-1 order-lg-1">
          <ul
            className="nav nav-tabs flex-lg-column product-img-tab"
            role="tablist"
          >
            {smallThumbContent.map((item) => (
              <li className="nav-item" key={item.id}>
                <button
                  className={`nav-link ${item.isActive}`}
                  data-bs-toggle="tab"
                  data-bs-target={item.itemTarget}
                  type="button"
                  role="tab"
                  aria-selected={item.isSelected}
                >
                  <img src={item.img} alt="item" className="m-auto" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-6 order-lg-3">
          <div className="product-info ps-xxl-5 md-mt-50">
            <div className="stock-tag">In Stock</div>
            <h3 className="product-name">{product.title}</h3>
            <div className="price">${product.price}</div>
            <p className="availability">38 Piece Available </p>
            <p className="description-text">
            The PS5 Slim is a compact gaming console with a modern design, delivering powerful gaming experiences.            </p>

            <ItemContent product={product} />
          </div>
        </div>
        {" "}
      </div>
    </>
  );
};

export default SingleProduct;
