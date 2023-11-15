import React, { useEffect, useState } from "react";
import axios from "axios";

import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Cardcarresult from "../components/Cardcarresult";
// import filterCars from "../services/carFilterServices";
// import CarmodelResult from "./CarmodelResult";

export default function ResultPage() {
  const [cars, setCars] = useState([]);
  const [motorisation, setMotorisation] = useState("");
  const [price, setPrice] = useState("");
  const [kilometer, setKilometer] = useState("");

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

  const handleChange = (event) => {
    setMotorisation(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleKilometerChange = (event) => {
    setKilometer(event.target.value);
  };

  // const filteredCars = filterCars(cars, motorisation, price, kilometer);

  const filteredCars = cars.filter((car) => {
    const motorisationFilter =
      (motorisation === "Diesel" && car.motorisation === "Diesel") ||
      (motorisation === "Petrol" && car.motorisation === "Petrol") ||
      motorisation === "";

    const priceFilter =
      (price === "9999" && car.price <= 10000) ||
      (price === "19999" && car.price > 10000 && car.price <= 20000) ||
      (price === "29999" && car.price > 20000 && car.price <= 30000) ||
      (price === "39999" && car.price > 30000 && car.price <= 40000) ||
      (price === "49999" && car.price > 40000 && car.price <= 50000) ||
      (price === "50000" && car.price > 50000) ||
      price === "";

    const kilometerFilter =
      (kilometer === "9999" &&
        car.kilometer >= 1000 &&
        car.kilometer <= 10000) ||
      (kilometer === "19999" &&
        car.kilometer > 10000 &&
        car.kilometer <= 20000) ||
      (kilometer === "29999" &&
        car.kilometer > 20000 &&
        car.kilometer <= 30000) ||
      (kilometer === "39999" &&
        car.kilometer > 30000 &&
        car.kilometer <= 40000) ||
      (kilometer === "49999" &&
        car.kilometer >= 40000 &&
        car.kilometer < 50000) ||
      (kilometer === "59999" &&
        car.kilometer >= 49999 &&
        car.kilometer <= 59999) ||
      (kilometer === "69999" && car.kilometer > 60000) ||
      kilometer === "";

    return motorisationFilter && priceFilter && kilometerFilter;
  });

  return (
    <>
      <div className="motorisation">
        <Box sx={{ maxWidth: 140 }} className="box">
          <FormControl fullWidth>
            <InputLabel id="motor-select-label">Motorisation</InputLabel>
            <Select
              labelId="motor-select-label"
              id="motor-select"
              value={motorisation}
              label="motorisation"
              onChange={handleChange}
            >
              <MenuItem value="">--</MenuItem>
              <MenuItem value="Diesel">Diesel</MenuItem>
              <MenuItem value="Petrol">Petrol</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br />
        <Box sx={{ maxWidth: 140 }} className="box">
          <FormControl fullWidth>
            <InputLabel id="price-select-label">Price</InputLabel>
            <Select
              labelId="price-select-label"
              id="price-select"
              value={price}
              label="price"
              onChange={handlePriceChange}
            >
              <MenuItem value="">--</MenuItem>
              <MenuItem value="9999">1000 - 10000</MenuItem>
              <MenuItem value="19999">10000 - 20000</MenuItem>
              <MenuItem value="29999">20000 - 30000</MenuItem>
              <MenuItem value="39999">30000 - 40000</MenuItem>
              <MenuItem value="49999">40000 - 49999</MenuItem>
              <MenuItem value="50000">over 50000</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br />
        <Box sx={{ maxWidth: 140 }} className="box">
          <FormControl fullWidth>
            <InputLabel id="kilometer-select-label">Kilometer</InputLabel>
            <Select
              labelId="kilometer-select-label"
              id="kilometer-select"
              value={kilometer}
              label="kilometer"
              onChange={handleKilometerChange}
            >
              <MenuItem value="">--</MenuItem>
              <MenuItem value="9999">1000 - 10000</MenuItem>
              <MenuItem value="19999">10000 - 20000</MenuItem>
              <MenuItem value="29999">20000 - 30000</MenuItem>
              <MenuItem value="39999">30000 - 40000</MenuItem>
              <MenuItem value="49999">40000 - 49999</MenuItem>
              <MenuItem value="59999">49999 - 59999</MenuItem>
              <MenuItem value="69999">over 60000</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      {filteredCars.map((car) => (
        <div className="cards">
          <Cardcarresult key={car.id} car={car} />
        </div>
      ))}
    </>
  );
}
