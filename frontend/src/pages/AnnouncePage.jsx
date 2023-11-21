import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/announcepage.css";

export default function AnnouncePage() {
  const [brand, setBrand] = useState([]);
  const [models, setModels] = useState([]);
  const [types, setTypes] = useState([]);

  const [annonce, setAnnonce] = useState({
    title: "",
    user_id: 1,
    price: 0,
    car_brand_id: 1,
    car_model_id: 1,
    year: undefined,
    motorisation: "essence",
    kilometer: undefined,
    transmission: "manuelle",
    car_type_id: 1,
    power: undefined,
    state: "yes",
    license: "yes",
    contact: "",
    city: "",
    postalcode: undefined,
    description: "",
    image: undefined,
  });

  const handleChangeValues = (event) => {
    if (
      event.target.name === "car_brand_id" ||
      event.target.name === "car_model_id" ||
      event.target.name === "price" ||
      event.target.name === "year" ||
      event.target.name === "kilometer" ||
      event.target.name === "car_type_id" ||
      event.target.name === "power"
    ) {
      setAnnonce({
        ...annonce,
        [event.target.name]: parseInt(event.target.value, 10),
      });
    } else if (event.target.name === "image") {
      setAnnonce({
        ...annonce,
        image: event.target.files[0],
      });
    } else {
      setAnnonce({
        ...annonce,
        [event.target.name]: event.target.value,
      });
    }
  };

  const sendFormData = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/announce`, {
        title: annonce.title,
        user_id: annonce.user_id,
        price: annonce.price,
        car_brand_id: annonce.car_brand_id,
        car_model_id: annonce.car_model_id,
        year: annonce.year,
        motorisation: annonce.motorisation,
        kilometer: annonce.kilometer,
        transmission: annonce.transmission,
        car_type_id: annonce.car_type_id,
        power: annonce.power,
        state: annonce.state,
        license: annonce.license,
        contact: annonce.contact,
        city: annonce.city,
        postalcode: annonce.postalcode,
        description: annonce.description,
        image: annonce.image,
      })
      .then((response) => {
        console.info(response);
      });
  };

  const getBrand = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/carbrand`)
      .then((response) => {
        setBrand(response.data);
      });
  };

  const getModel = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/carmodellistbybrand/${
          annonce.car_brand_id
        }`
      )
      .then((response) => {
        setModels(response.data);
      });
  };

  const getType = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/cartype`)
      .then((response) => {
        setTypes(response.data);
        console.info(response.data);
      });
  };

  useEffect(() => {
    getBrand();
    getType();
  }, []);

  useEffect(() => {
    getModel();
  }, [annonce.car_brand_id]);

  console.info(annonce);

  return (
    <div className="annonce">
      <h2>Merci d’avoir choisi TheGoodeal afin de publier votre annonce !</h2>

      <div className="content">
        <form onSubmit={sendFormData}>
          <p>Titre</p>
          <input name="title" type="text" onChange={handleChangeValues} />
          <p>Prix</p>
          <input type="number" name="price" onChange={handleChangeValues} />
          <select name="car_brand_id" onChange={handleChangeValues}>
            <option value="">Sélectionner une marque </option>
            {brand.map((car) => (
              <option key={car.car_brand_id} value={car.car_brand_id}>
                {car.car_brand_name}
              </option>
            ))}
          </select>

          <select name="car_model_id" onChange={handleChangeValues}>
            <option value="">Sélectionner un modele </option>
            {models.map((model) => (
              <option key={model.car_model_id} value={model.car_model_id}>
                {model.car_model_name}
              </option>
            ))}
          </select>
          <p>Année</p>
          <input type="number" name="year" onChange={handleChangeValues} />
          <select onChange={handleChangeValues} name="motorisation">
            <option value="essence">Essence</option>
            <option value="diesel">Diesel</option>
            <option value="electrique">Electrique</option>
          </select>
          <p>Kilomètres</p>
          <input type="number" name="kilometer" onChange={handleChangeValues} />
          <select onChange={handleChangeValues} name="transmission">
            <option value="manuelle">Manuelle</option>
            <option value="automatique">Automatique</option>
          </select>

          <select name="car_type_id" onChange={handleChangeValues}>
            {types.map((type) => (
              <option value={type.car_type_id}>{type.car_type_name}</option>
            ))}
          </select>

          <p>Puissance</p>
          <input type="number" name="power" onChange={handleChangeValues} />
          <p>Première main</p>
          <select name="state" onChange={handleChangeValues}>
            <option value="yes">Oui</option>
            <option value="no">Non</option>
          </select>
          <select name="licence" onChange={handleChangeValues}>
            <option value="yes">Avec permis</option>
            <option value="no">Sans permis</option>
          </select>
          <p>Téléphone</p>
          <input type="text" name="contact" onChange={handleChangeValues} />
          <p>Ville</p>
          <input type="text" name="city" onChange={handleChangeValues} />
          <p>Code postal</p>
          <input
            type="number"
            name="postalcode"
            onChange={handleChangeValues}
          />
          <p>Description</p>
          <textarea
            type="text"
            name="description"
            onChange={handleChangeValues}
          />
          <p>Les photos de votre véhicule</p>
          <input type="file" name="image" onChange={handleChangeValues} />

          <div className="button">
            <input
              type="submit"
              value="Publier l'annonce"
              // ref={inputRef}
              onSubmit={sendFormData}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
