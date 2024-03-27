import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";


import img1 from "../../assets/images/products/product1.png";
import img2 from "../../assets/images/products/product2.png";
import img3 from "../../assets/images/products/product3.png";
import img4 from "../../assets/images/products/product4.png";


const BestSelling = () => {
  const settings = {
    dots: false,
    arrows: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const allCollection = [
    {
      id: 1,
      img: img1,
      title: "PS5 Slim Console",
      price: 2289.999
    },
    {
      id: 2,
      img: img2,
      title: "GTA V videogame",
      price: 150000
    },
    {
      id: 3,
      img: img3,
      title: "UTOPIA album",
      price: 120000
    },
    {
      id: 4,
      img: img4,
      title: "For All the Dogs album ",
      price: 120000
    },
   
  ];

  return (
    <>
      <Slider {...settings}>
        {allCollection.map((item) => (
          <div className="item" key={item.id}>
            <div className="product-block-three">
              <div className="img-holder">
              <Link
                to="/"
                className="d-flex align-items-center justify-content-center"
              >
                <img
                  src={item.img}
                  alt="product"
                  className="product-img tran4s"
                  style={{ width: "250px", height: "250px" }}
                />
              </Link>
              
            </div>
            <div className="product-meta">
                <div className="d-lg-flex  ">
                  <Link
                    to={`/${item.id}`}
                    className="product-title"
                  >
                    
                    {item.title} 
                  </Link>
                </div>
                <div className="price">${item.price}COP</div>
              </div>

            </div>

          </div>
        ))}
      </Slider>
    </>
  );
};
export default BestSelling;
