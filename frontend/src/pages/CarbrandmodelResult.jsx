/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/carbrandmodelresult.css";

import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import filterCars from "../services/carFilterServices";
import Cardcarresult from "../components/Cardcarresult";

export default function CarmodelResult() {
  const [dataModel, setDataModel] = useState([]);
  const [errorModel, setErrorModel] = useState(false);
  const [dataBrand, setDataBrand] = useState([]);
  const [errorBrand, setErrorBrand] = useState(false);
  const [motorisation, setMotorisation] = useState("");
  const [price, setPrice] = useState("");
  const [kilometer, setKilometer] = useState("");
  const { userResearch } = useParams();

  const handleChange = (event) => {
    setMotorisation(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleKilometerChange = (event) => {
    setKilometer(event.target.value);
  };

  const filteredBrandCars = filterCars(
    dataBrand,
    motorisation,
    price,
    kilometer
  );
  const filteredModelCars = filterCars(
    dataModel,
    motorisation,
    price,
    kilometer
  );

  const searchModel = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/announce/model/${userResearch}`)
      .then((response) => {
        setDataModel(response.data);
      })
      .catch((err) => {
        console.error(err);
        setErrorModel(true);
      });
  };
  const searchBrand = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/announce/brand/${userResearch}`)
      .then((response) => {
        setDataBrand(response.data);
      })
      .catch((err) => {
        console.error(err);
        setErrorBrand(true);
      });
  };

  useEffect(() => {
    searchModel();
    searchBrand();
  }, [userResearch]);
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

      {dataModel.length > 0 && dataModel[0].car_model_name === userResearch && (
        <div className="model_results">
          <h2>
            {filteredModelCars.length > 0
              ? `Nous avons trouvé ${dataModel.length} résultat pour ${userResearch}`
              : `Nous avons trouvé ${filteredModelCars.length} résultats pour ${userResearch}`}
          </h2>
          <div className="model_list">
            {!errorModel ? (
              filteredModelCars.map((car) => (
                <div className="cards" key={car.id}>
                  <Cardcarresult car={car} />
                </div>
              ))
            ) : (
              <p>Aucun résultat</p>
            )}
            {/* {filteredModelCars.length === 0 && <p>Aucun résultat</p>} */}
          </div>
        </div>
      )}
      {dataBrand.length > 0 && dataBrand[0].car_brand_name === userResearch && (
        <div className="brand_results">
          <h2>
            {filteredBrandCars.length > 0
              ? `Nous avons trouvé ${dataBrand.length} résultat pour ${userResearch}`
              : `Nous avons trouvé ${filteredBrandCars.length} résultats pour ${userResearch}`}
          </h2>
          <div className="model_list">
            {!errorBrand ? (
              filteredBrandCars.map((brandCar) => (
                <Cardcarresult key={brandCar.id} car={brandCar} />
              ))
            ) : (
              <p>Aucun résultat</p>
            )}
            {/* {filteredBrandCars.length === 0 && <p>Aucun résultat</p>} */}
          </div>
        </div>
      )}
    </>
  );
}
