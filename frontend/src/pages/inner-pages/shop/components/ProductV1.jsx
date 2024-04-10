import React from "react";
import { Link } from "react-router-dom";

const ProductV1 = ({ products }) => {
  return (
    <>
      {products.map(item => (
        <div
          className="col-xl-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.animationTime}
          key={item.id}
        >
          <div className="product-block-two mb-60 xs-mb-40">
            <div className="img-holder">
              <Link
                to={`/product-details/${item.id}`}
                className="d-flex align-items-center justify-content-center h-100"
              >
                <img
                  src={item.img}
                  alt="filtering product"
                  className="product-img tran4s"
                />
              </Link>
              <div className={item.tagClass}>{item.tag}</div>
            </div>

            <div className="product-meta">
              <div className="d-lg-flex align-items-center justify-content-between">
                <Link
                  to={`/product-details/${item.id}`}
                  className="product-title"
                >
                  {item.title}
                </Link>
              </div>
              <div className="price">${item.price} COP</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductV1;
