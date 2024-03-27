import React from "react";
import imagen1 from "../../assets/images/shop/foto1.png";

const HeroSlider = () => {
  const sliderContent = [
    {
      id: 1,
      img: imagen1,
      title: (
        <>
          Fun Flex <br /> entertainment
        </>
      ),
      text: "The best entertainment e-commerce on the market.",
    },
  ];

  return (
    <>
      {sliderContent.map((item) => (
        <div className="item" key={item.id}>
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-5 col-md-6">
                <div className="product-text">
                  <h2 className="font-recoleta">{item.title}</h2>
                  <h5 className="text-lg mb-50 lg-mb-30">{item.text}</h5>
                </div>
              </div>
              <div className="col-xl-7 col-md-6">
                <div className="product-img-container">
                  <img
                    src={item.img}
                    alt="slide product"
                    className="m-auto ms-lg-auto product-img tran5s"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HeroSlider;