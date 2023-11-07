import PropTypes from "prop-types";
import React from "react";
import "../styles/cardcarresult.css";
import { PiRoadHorizonFill } from "react-icons/pi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TbManualGearbox } from "react-icons/tb";

export default function Cardcarresult({ car }) {
  return (
    car && (
      <div className="carannounce">
        <div className="carimage">
          <img src={car.image} alt="" />
        </div>
        <div className="cardetails">
          <h5>
            {car.car_brand_name}
            <span> {car.car_model}</span>
          </h5>
          <h5>€ {car.price}</h5>
          <div className="tag_card_car">
            <h6>
              <LiaBirthdayCakeSolid />
              <span> {car.year} </span>
            </h6>

            <h6>
              <PiRoadHorizonFill />
              <span> {car.kilometer}</span>
            </h6>
            <h6>
              <BsFillFuelPumpFill />
              <span> {car.motorisation}</span>
            </h6>
            <h6>
              <TbManualGearbox />
              <span> {car.transmission}</span>
            </h6>
          </div>
          <h5>{car.city}</h5>
        </div>
      </div>
    )
  );
}
Cardcarresult.propTypes = {
  car: PropTypes.shape({
    image: PropTypes.string,
    car_brand_name: PropTypes.string,
    car_model: PropTypes.string,
    price: PropTypes.string,
    year: PropTypes.string,
    kilometer: PropTypes.string,
    motorisation: PropTypes.string,
    transmission: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
};
