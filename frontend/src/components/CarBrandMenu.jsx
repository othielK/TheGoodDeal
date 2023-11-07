import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CarBrandMenu() {
  const [carbrands, setCarbrands] = useState([]);

  const getCarbrands = () => {
    axios
      .get("http://localhost:5000/carbrand")
      .then((response) => {
        setCarbrands(response.data);
        console.info(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des marques : ", error);
      });
  };

  useEffect(() => {
    getCarbrands();
  }, []);

  return (
    <div>
      {carbrands.map((car) => (
        <div key={car.car_brand_name}>
          <h3>
            <Link to={`result/${car.car_brand_id}`}>{car.car_brand_name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
}
