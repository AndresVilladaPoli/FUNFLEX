import React from "react";
import Slider from "react-slick";


const HeroSlider = () => {
  //   slider settings
  const settings = {
    dots: false,
    arrows: false,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const sliderContent = [
    {
      id: 1,
      
    },
    {
      id: 2,
      
    },
  ];

  return (
    <>
      <Slider {...settings} arrows={false}>
        {sliderContent.map((item) => (
          <div className="item" key={item.id}>
            <div className="container">
              <div className="row align-items-end">
                <div className="col-xl-5 col-md-6">
                  <div className="product-text">
                    <h6>{item.meta}</h6>
                    <h2 className="font-recoleta">{item.title}</h2>
                    <p className="text-lg mb-50 lg-mb-30">{item.text}</p>
                  
                  </div>
                </div>

               
              </div>
            </div>

          </div>
        ))}
      </Slider>
    </>
  );
};

export default HeroSlider;
