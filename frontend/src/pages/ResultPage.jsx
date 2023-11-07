import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import CarList from "../components/CarList";

export default function ResultPage() {
  const [cars, setCars] = useState([]);

  const getCars = () => {
    axios.get("http://localhost:5000/announce").then((response) => {
      setCars(response.data);
      console.info(response.data);
    });
  };

  useEffect(() => {
    getCars();
  }, []);
  return (
    <div className="cards">
      {cars.map((car) => (
        <CarList key={car.id} car={car} />
      ))}
    </div>
  );
}
