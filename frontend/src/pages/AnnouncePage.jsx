import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/announcepage.css";

export default function AnnouncePage() {
  const [announce, setAnnounce] = useState({
    title: "",
    price: "",
    brand: "Peugeot",
    model: "207",
    year: "",
    motorisation: "diesel",
    km: "",
    transmission: "",
    type: "",
    power: "",
    condition: "oui",
    license: "",
    contact: "",
    city: "",
    postalcode: "",
    description: "",
    image: "",
  });

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

  useEffect(() => {
    sendFormData();
  }, []);

  console.info(announce);
  return (
    <div className="annonce">
      <h2>Merci d’avoir choisi TheGoodeal afin de publier votre annonce !</h2>

      <div className="secound part">
        <form onSubmit={sendFormData}>
          <h4>Quel titre voulez vous donner à votre annonce ? </h4>
          <input
            type="text"
            placeholder="A vendre magnifique 207... Super occasion..."
            name="title"
            onChange={handleChangeValues}
          />
          <h4>Prix demandé en euro</h4>
          <input
            type="number"
            placeholder="20000... 5000...."
            name="price"
            onChange={handleChangeValues}
          />
          <h4> Sélectionner la marque de votre véhicule</h4>
          <select id="Séléction" name="price" onChange={handleChangeValues}>
            <option value="">Peugeot</option>
          </select>
          <h4> De quel modéle s'agit-il</h4>
          <select name="model" id="Séléction" onChange={handleChangeValues}>
            <option value="">207... C3... Clio...</option>
          </select>
          <h4>Année de votre véhicule </h4>
          <input
            type="number"
            placeholder="1999... 2014..."
            name="year"
            onChange={handleChangeValues}
          />
          <h4> Type de motorisation</h4>
          <select
            name="motorisation"
            id="Séléction"
            onChange={handleChangeValues}
          >
            <option value="">Diesel</option>
          </select>
          <h4>Nombre de kilométres </h4>
          <input
            type="number"
            placeholder="20000... 100000..."
            name="km"
            onChange={handleChangeValues}
          />
          <h4> Transmission</h4>
          <select
            name="transmission"
            id="Séléction"
            onChange={handleChangeValues}
          >
            <option value="">Manuelle</option>
          </select>
          <h4> Type de véhicule</h4>
          <select name="type" id="Séléction" onChange={handleChangeValues}>
            <option value="">Citadine</option>
          </select>

          <h4>Puissance en Ch </h4>
          <input
            type="text"
            placeholder="75..."
            name="power"
            onChange={handleChangeValues}
          />

          <h4> Premiére main</h4>
          <select name="condition" id="Séléction" onChange={handleChangeValues}>
            <option value="">Non</option>
            <option value="">Oui</option>
          </select>
          <h4> Permis</h4>
          <select name="license" id="Séléction" onChange={handleChangeValues}>
            <option value="">Avec permis</option>
            <option value="">Sans permis</option>
          </select>

          <h4>Numéro de mobile de contact </h4>
          <input
            type="text"
            placeholder="0605040302..."
            name="contact"
            onChange={handleChangeValues}
          />

          <h4>Votre ville </h4>
          <input
            type="text"
            placeholder="Paris...Marseille..."
            name="city"
            onChange={handleChangeValues}
          />

          <h4>Code postale </h4>
          <input
            type="number"
            placeholder="75020...13018..."
            name="postalcode"
            onChange={handleChangeValues}
          />

          <div className="description">
            <h4>Description complète de votre véhicule ... </h4>
            <input
              type="text"
              placeholder="Voiture en bon étât. Quelques rayures à l’avant et à l’arrière. Courroie de distribution à changer bientôt. Jamais accidentée. Non fumeur."
              name="description"
              onChange={handleChangeValues}
            />
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
