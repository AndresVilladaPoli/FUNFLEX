
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../../hooks/use-products";

const ProductV1 = () => {
  const { products, deleteProduct } = useProducts();
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
  
  }, [forceUpdate]);

  const handleForceUpdate = () => {
    setForceUpdate((prev) => !prev);
  };

  return (
    <>
      {products.map((item) => (
        <div
          className="col-xl-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.animationTime}
          key={item.id}
        >
          <div className="product-block-two mb-60 xs-mb-40">
            <div className="img-holder">
              <div className="d-flex align-items-center justify-content-center h-100">
                <img
                  src={item.img}
                  alt="filtering product"
                  className="product-img tran4s"
                />
              </div>
              <div className={item.tagClass}>{item.tag}</div>
            </div>

            <div className="product-meta">
              <div className="d-lg-flex align-items-center justify-content-between">
                <div className="product-title">{item.title}</div>
              </div>
              <div className="price-and-icons-container">
                <div className="price">${item.price} COP</div>
                <div className="icon-container">
                  <Link to={`/edit-product/${item.id}`}>
                    <img
                      src={require("../../../../assets/images/icon/edit.svg").default}
                      alt="icon"
                    />
                  </Link>
                  <span> </span>
                  <Link onClick={() => {
                    deleteProduct(item.id);
                    handleForceUpdate(); 
                  }}>
                    <img
                      src={require("../../../../assets/images/icon/trash.svg").default}
                      alt="icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductV1;
