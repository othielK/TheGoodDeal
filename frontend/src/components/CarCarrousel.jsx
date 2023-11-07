/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carcarrousel.css";

export default function CarCarousel() {
  const cars = [
    {
      image: "/src/assets/car1.jpg",
      price: "5000,00 EUR",
    },
    {
      image: "/src/assets/car2.jpg",
      price: "5000,00 EUR",
    },
    {
      image: "/src/assets/car3.jpg",
      price: "5000,00 EUR",
    },
    {
      image: "/src/assets/car4.jpg",
      price: "5000,00 EUR",
    },
    {
      image: "/src/assets/car5.jpg",
      price: "5000,00 EUR",
    },
  ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="car-carousel-container">
      <div className="test">
        <h2>Vous pourriez aimer ces voitures...</h2>
        <div className="header_nouveautés">
          <Slider {...settings}>
            {cars.map((car, index) => (
              <div className="details" key={index}>
                <img src={car.image} alt="name" />
                <h3>{car.price}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
