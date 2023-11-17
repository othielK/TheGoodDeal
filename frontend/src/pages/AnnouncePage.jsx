import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/announcepage.css";

export default function AnnouncePage() {
  const [announce, setAnnounce] = useState({
    title: "",
    price: "",
    car_brand_name: "",
    car_model_name: "",
    year: "",
    motorisation: "diesel",
    kilometer: "",
    transmission: "",
    car_type_id: "",
    power: "",
    condition: "oui",
    license: "",
    contact: "",
    city: "",
    postalcode: "",
    description: "",
    image: "",
  });

  const [brand, setBrand] = useState([]);
  // const [model, setModel] = useState([]);
  const [type, setType] = useState([]);
  const [selectBrandId, setSelectBrandId] = useState("");

  const handleChangeValues = (event) => {
    if (event.target.type === "file") {
      setAnnounce({
        ...announce,
        [event.target.name]: event.target.files[0],
      });
    } else {
      setAnnounce({
        ...announce,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleModelList = (event) => {
    setSelectBrandId(event.target.value);
  };

  const brandModels = {};

  brand.forEach((car) => {
    if (!brandModels[car.car_brand_name]) {
      brandModels[car.car_brand_name] = [];
    }
    brandModels[car.car_brand_name].push(car.car_model_name);
  });

  const sendFormData = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/announce`, {
        announce,
      })
      .then((response) => {
        setAnnounce(response.data);
        console.info(response.data);
      });
  };

  const getBrand = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/carbrand`)
      .then((response) => {
        setBrand(response.data);
        console.info(response.data);
      });
  };

  const getModelbyBrand = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/carmodellistbybrand/${selectBrandId}`
      )
      .then((response) => {
        const filteredModels = response.data.filter(
          (car) => car.car_brand_id === selectBrandId
        );
        // setModel(filteredModels);
        // setModel(response.data);
        console.info(filteredModels);
      });
  };

  const getType = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/cartype`)
      .then((response) => {
        setType(response.data);
        console.info(response.data);
      });
  };
  useEffect(() => {
    getBrand();
    getType();
  }, []);

  useEffect(() => {
    getModelbyBrand();
  }, [selectBrandId]);

  console.info(selectBrandId);
  // console.info(announce);
  return (
    <div className="annonce">
      <h2>Merci d’avoir choisi TheGoodeal afin de publier votre annonce !</h2>

      <div className="content">
        <form onSubmit={sendFormData}>
          <div className="secoundpart">
            <div className="left">
              <div className="title">
                <h4>Quel titre voulez vous donner à votre annonce ? </h4>
                <input
                  type="text"
                  placeholder="A vendre magnifique 207... Super occasion..."
                  name="title"
                  onChange={handleChangeValues}
                />
              </div>
              <div className="price">
                <h4>Prix demandé en euro</h4>
                <input
                  type="number"
                  placeholder="20000... 5000...."
                  name="price"
                  onChange={handleChangeValues}
                />
              </div>
              <div className="carbrand">
                <h4> Sélectionner la marque de votre véhicule</h4>
                <select
                  id="Séléction"
                  name="brand"
                  onChange={handleChangeValues}
                >
                  <option value="">Sélectionner une marque </option>
                  {brand.map((car) => (
                    <option key={car.id} value={car.id}>
                      {car.car_brand_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="model">
                <h4> De quel modéle s'agit-il</h4>
                <select name="model" id="Séléction" onChange={handleModelList}>
                  <option value="">Sélectionner un modéle </option>
                  {/* {model.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.car_model_name}
                      </option>
                      ))} */}
                </select>
              </div>
              <div className="year">
                <h4>Année de votre véhicule </h4>
                <input
                  type="number"
                  placeholder="1999... 2014..."
                  name="year"
                  onChange={handleChangeValues}
                />
              </div>
              <div className="carmotorisation">
                <h4> Type de motorisation</h4>
                <select
                  name="motorisation"
                  id="Séléction"
                  onChange={handleChangeValues}
                >
                  <option value="">Diesel</option>
                  <option value="">Essence</option>
                </select>
              </div>
              <div className="kilometer">
                <h4>Nombre de kilométres </h4>
                <input
                  type="number"
                  placeholder="20000... 100000..."
                  name="kilometer"
                  onChange={handleChangeValues}
                />
              </div>
              <div className="transmission">
                <h4> Transmission</h4>
                <select
                  name="transmission"
                  id="Séléction"
                  onChange={handleChangeValues}
                >
                  <option value="">Manuelle</option>
                  <option value="">Automatique</option>
                </select>
              </div>
            </div>
            <div className="right">
              <div className="type">
                <h4> Type de véhicule</h4>
                <select
                  name="type"
                  id="Séléction"
                  onChange={handleChangeValues}
                >
                  <option value="">Sélectionnez un type de véhicule </option>
                  {type.map((car) => (
                    <option key={car.id} value={car.id}>
                      {car.car_type_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="power">
                <h4>Puissance en Ch </h4>
                <input
                  type="text"
                  placeholder="75..."
                  name="power"
                  onChange={handleChangeValues}
                />
              </div>
              <div className="condition">
                <h4> Premiére main</h4>
                <select
                  name="condition"
                  id="Séléction"
                  onChange={handleChangeValues}
                >
                  <option value="">Non</option>
                  <option value="">Oui</option>
                </select>
              </div>
              <div className="license">
                <h4> Permis</h4>
                <select
                  name="license"
                  id="Séléction"
                  onChange={handleChangeValues}
                >
                  <option value="">Avec permis</option>
                  <option value="">Sans permis</option>
                </select>
              </div>
              <div className="contact">
                <h4>Numéro de mobile de contact </h4>
                <input
                  type="text"
                  placeholder="0605040302..."
                  name="contact"
                  onChange={handleChangeValues}
                />
              </div>
              <div className="city">
                <h4>Votre ville </h4>
                <input
                  type="text"
                  placeholder="Paris...Marseille..."
                  name="city"
                  onChange={handleChangeValues}
                />
              </div>
              <div className="postalcode">
                <h4>Code postale </h4>
                <input
                  type="number"
                  placeholder="75020...13018..."
                  name="postalcode"
                  onChange={handleChangeValues}
                />
              </div>
            </div>
          </div>
          <div className="description">
            <div className="description">
              <h4>Description complète de votre véhicule ... </h4>
              <input
                type="text"
                placeholder="Voiture en bon étât. Quelques rayures à l’avant et à l’arrière. Courroie de distribution à changer bientôt. Jamais accidentée. Non fumeur."
                name="description"
                onChange={handleChangeValues}
              />
            </div>
            <div className="pictures">
              <h4>Les photos de votre véhicule</h4>

              <input type="file" name="image" onChange={handleChangeValues} />
            </div>
          </div>
        </form>
        <div className="button">
          <input
            type="submit"
            value="Publier l'annonce"
            onSubmit={sendFormData}
          />
        </div>
      </div>
    </div>
  );
}
