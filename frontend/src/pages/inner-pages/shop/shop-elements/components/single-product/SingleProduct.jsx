import React from "react";
import ItemContent from "./ItemContent";
import products from "./ProductsData";

const SingleProduct = ({ product }) => {

  const { images, title, category, price, availability, description } = products.find(
    (p) => p.id === product.id
  );

  const smallThumbContent = images.map((image, index) => ({
    id: index,
    img: image,
    isActive: index === 0 ? "active" : "",
    itemTarget: `#img${index}`,
    isSelected: index === 0,
  }));

  const largeThumbContent = images.map((image, index) => ({
    id: index,
    img: image,
    isActive: index === 0 ? "show active" : "",
    itemTarget: `img${index}`,
  }));

  return (
    <>
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
            <h3 className="product-name">{title}</h3>
            <p className="availability">{category}</p>
            <div className="price">${price}</div>
            <p className="availability">{availability} Piece Available </p>
            <p className="description-text">{description}</p>

            <ItemContent product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
