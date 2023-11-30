import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import ExportContext from "../contexts/Context";

export default function Contact({ details }) {
  if (!details) {
    return <p>Erreur d'affichage des détails</p>;
  }

  const { infoUser } = useContext(ExportContext.Context);
  const [favorite, setFavorite] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [message, setMessage] = useState();
  const { id } = useParams();
  // const refresh = () => window.location.reload(true);

  const getInitialFavoriteStatus = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/favorischeck/${infoUser.id}/${id}`
      )
      .then((response) => {
        console.info(response);
        setIsFavorite(true);
      })
      .catch((error) => {
        setIsFavorite(false);
        console.error("Erreur lors de la récupération des favoris :", error);
      });
  };

  useEffect(() => {
    getInitialFavoriteStatus();
  }, []);

  console.info(isFavorite);

  const addToFavorites = () => {
    if (favorite) {
      console.info("L'annonce est déjà dans les favoris!");
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/favoris`,
        {
          announce_id: id,
          user_id: infoUser.id,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.info(response.data);
        setFavorite(true);
        setMessage("Voiture ajoutée aux favoris avec succès!");
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            "Erreur lors de l'ajout aux favoris :",
            error.response.data
          );
        } else {
          console.error(
            "Erreur lors de la requête d'ajout aux favoris :",
            error.message
          );
        }
      });
  };

  return (
    <div className="part3">
      <h3>
        <span className="circle">
          <span className="circle-text">
            {details.first_letter_of_firstname}
          </span>
        </span>
        {details.firstname}
      </h3>
      {isFavorite === true ? (
        ""
      ) : (
        <button type="button" className="btn_1" onClick={addToFavorites}>
          Ajouter aux favoris
        </button>
      )}
      <p>{message}</p>

      <button type="button" className="btn_2">
        Envoyer un message
      </button>
      <p>Signaler une annonce</p>
    </div>
  );
}

Contact.propTypes = {
  details: PropTypes.shape({
    first_letter_of_firstname: PropTypes.string,
    firstname: PropTypes.string,
  }).isRequired,
};
