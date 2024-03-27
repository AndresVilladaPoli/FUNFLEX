import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import img1 from "../../assets/images/shop/videogames.png";
import img2 from "../../assets/images/shop/movies.png";
import img3 from "../../assets/images/shop/music.png";
import img4 from "../../assets/images/shop/videogames.png";
import img5 from "../../assets/images/shop/movies.png";

const AllCollection = () => {
  const settings = {
    dots: false,
    arrows: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
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
      categorie: "CONSOLES",
    },
    {
      id: 2,
      img: img2,
      categorie: "VIDEOGAMES",
    },
    {
      id: 3,
      img: img3,
      categorie: "MUSIC",
    },
    {
      id: 4,
      img: img4,
      categorie: "ENTERTAINMENT",
    },
    {
      id: 5,
      img: img5,
      categorie: "BOOKS",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {allCollection.map((item) => (
          <div className="item" key={item.id}>
            <div className="product-block-one">
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
              <Link to="" className="category-tag">
                {item.categorie}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default AllCollection;
