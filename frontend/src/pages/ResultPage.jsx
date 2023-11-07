import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import Cardcarresult from "../components/Cardcarresult";

export default function ResultPage() {
  const [cars, setCars] = useState([]);

  const getCars = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/announce`)
      .then((response) => {
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
        <Cardcarresult key={car.id} car={car} />
      ))}
    </div>
  );
}
