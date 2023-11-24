import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/announcepage.css";

export default function AnnouncePage() {
  const [brand, setBrand] = useState([]);
  const [models, setModels] = useState([]);
  const [types, setTypes] = useState([]);

  const [annonce, setAnnonce] = useState({
    user_id: 1,
    title: "",
    price: 0,
    image_1: "",
    year: "",
    car_brand_id: 1,
    car_model_id: 1,
    motorisation: "essence",
    kilometer: "",
    transmission: "manuelle",
    car_type_id: 1,
    power: "",
    state: "yes",
    license: "yes",
    description: "",
    contact: "",
    city: "",
    postalcode: "",
  });

  const handleChangeValues = (event) => {
    if (
      event.target.name === "car_brand_id" ||
      event.target.name === "car_model_id" ||
      event.target.name === "price" ||
      event.target.name === "year" ||
      event.target.name === "kilometer" ||
      event.target.name === "car_type_id" ||
      event.target.name === "power" ||
      event.target.name === "postalcode"
    ) {
      setAnnonce({
        ...annonce,
        [event.target.name]: parseInt(event.target.value, 10),
      });
    } else {
      setAnnonce({
        ...annonce,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleFileChange = (event) => {
    setAnnonce((prevData) => ({ ...prevData, image_1: event.target.files[0] }));
  };

  const sendFormData = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("user_id", annonce.user_id);
    formData.append("title", annonce.title);
    formData.append("price", annonce.price);
    formData.append("image_1", annonce.image_1);
    formData.append("year", annonce.year);
    formData.append("car_brand_id", annonce.car_brand_id);
    formData.append("car_model_id", annonce.car_model_id);
    formData.append("motorisation", annonce.motorisation);
    formData.append("kilometer", annonce.kilometer);
    formData.append("transmission", annonce.transmission);
    formData.append("car_type_id", annonce.car_type_id);
    formData.append("power", annonce.power);
    formData.append("state", annonce.state);
    formData.append("license", annonce.license);
    formData.append("description", annonce.description);
    formData.append("contact", annonce.contact);
    formData.append("city", annonce.city);
    formData.append("postalcode", annonce.postalcode);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/announce`, formData)
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

  // console.info(annonce);
  console.info(annonce.image_1);

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
          <input type="file" name="image_1" onChange={handleFileChange} />

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
