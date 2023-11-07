import PropTypes from "prop-types";
import React from "react";

export default function CarList({ car }) {
  return (
    car && (
      <div className="card_movie">
        <img src={car.image} alt="" />
        <br />
        <h5>
          {car.car_brand_name} {car.car_model}
        </h5>
        <h5>€{car.price}</h5>
        <h5>{car.year}</h5>
        <h5>{car.kilometer}</h5>
        <h5>{car.motorisation}</h5>
        <h5>{car.transmission}</h5>
      </div>
    )
  );
}
CarList.propTypes = {
  car: PropTypes.shape({
    image: PropTypes.string,
    car_brand_name: PropTypes.string,
    car_model: PropTypes.string,
    price: PropTypes.string,
    year: PropTypes.string,
    kilometer: PropTypes.string,
    motorisation: PropTypes.string,
    transmission: PropTypes.string,
  }).isRequired,
};
