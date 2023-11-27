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
    image_2: "",
    image_3: "",
    image_4: "",
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
    setAnnonce((prevData) => ({
      ...prevData,
      image_1: event.target.files[0],
      image_2: event.target.files[0],
      image_3: event.target.files[0],
      image_4: event.target.files[0],
    }));
    // setAnnonce((prevData) => ({ ...prevData, image_1,: event.target.files[0] }));
  };

  const sendFormData = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("user_id", annonce.user_id);
    formData.append("title", annonce.title);
    formData.append("price", annonce.price);
    formData.append("image_1", annonce.image_1);
    formData.append("image_2", annonce.image_2);
    formData.append("image_3", annonce.image_3);
    formData.append("image_4", annonce.image_4);
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
          <div className="contentpartform">
            <div className="firstpartform">
              <div className="title">
                <p>Titre</p>
                <input name="title" type="text" onChange={handleChangeValues} />
              </div>
              <div className="price">
                <p>Prix</p>
                <input
                  type="number"
                  name="price"
                  onChange={handleChangeValues}
                />
              </div>
              <div className="brand">
                <p> Sélectionner la marque de votre véhicule</p>
                <select name="car_brand_id" onChange={handleChangeValues}>
                  <option value="">Sélectionner une marque </option>
                  {brand.map((car) => (
                    <option key={car.car_brand_id} value={car.car_brand_id}>
                      {car.car_brand_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="model">
                <p> De quel modéle s'agit-il</p>
                <select name="car_model_id" onChange={handleChangeValues}>
                  <option value="">Sélectionner un modele </option>
                  {models.map((model) => (
                    <option key={model.car_model_id} value={model.car_model_id}>
                      {model.car_model_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="year">
                <p>Année</p>
                <input
                  type="number"
                  name="year"
                  onChange={handleChangeValues}
                />
              </div>
              <div className="motorisation">
                <p> Type de motorisation</p>
                <select onChange={handleChangeValues} name="motorisation">
                  <option value="essence">Essence</option>
                  <option value="diesel">Diesel</option>
                  <option value="electrique">Electrique</option>
                </select>
              </div>
              <div className="kilometer">
                <p>Kilomètres</p>
                <input
                  type="number"
                  name="kilometer"
                  onChange={handleChangeValues}
                />
              </div>
              <div className="transmission">
                <p> Transmission</p>
                <select onChange={handleChangeValues} name="transmission">
                  <option value="manuelle">Manuelle</option>
                  <option value="automatique">Automatique</option>
                </select>
              </div>
              <div className="type">
                <p> Type de véhicule</p>
                <select name="car_type_id" onChange={handleChangeValues}>
                  {types.map((type) => (
                    <option value={type.car_type_id}>
                      {type.car_type_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="secoundpartform">
              <div className="power">
                <p>Puissance</p>
                <input
                  type="number"
                  name="power"
                  onChange={handleChangeValues}
                />
              </div>
              <div className="main">
                <p>Première main</p>
                <select name="state" onChange={handleChangeValues}>
                  <option value="yes">Oui</option>
                  <option value="no">Non</option>
                </select>
              </div>
              <div className="permis">
                <p> Permis</p>
                <select name="licence" onChange={handleChangeValues}>
                  <option value="yes">Avec permis</option>
                  <option value="no">Sans permis</option>
                </select>
              </div>
              <div className="contact">
                <p>Téléphone</p>
                <input
                  type="text"
                  name="contact"
                  onChange={handleChangeValues}
                />
              </div>
              <div className="city">
                <p>Ville</p>
                <input type="text" name="city" onChange={handleChangeValues} />
              </div>
              <div className="postalcode">
                <p>Code postal</p>
                <input
                  type="number"
                  name="postalcode"
                  onChange={handleChangeValues}
                />
              </div>
            </div>
          </div>
          <div className="description">
            <p>Description</p>
            <textarea
              type="text"
              name="description"
              onChange={handleChangeValues}
            />
          </div>
          <div className="pictures">
            <p>Les photos de votre véhicule</p>
            <input type="file" name="image_1" onChange={handleFileChange} />
            <input type="file" name="image_2" onChange={handleFileChange} />
            <input type="file" name="image_3" onChange={handleFileChange} />
            <input type="file" name="image_4" onChange={handleFileChange} />
          </div>
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
