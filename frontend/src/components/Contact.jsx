import React from "react";
import PropTypes from "prop-types";

export default function Contact({ details }) {
  if (!details) {
    return <p>Erreur d'affichage des détails</p>;
  }

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
      <button type="button" className="btn_1">
        Ajouter aux favoris
      </button>
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
