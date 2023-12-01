// MesFavoris.js
import React from "react";
import { FaStar } from "react-icons/fa";
import "../styles/favoris.css";

function Favoris() {
  return (
    <div className="favoris-card">
      <div className="favoris">
        <div className="favoris-icon">
          <FaStar size={40} />
        </div>
        <div className="favoris-details">
          <h1>Mes Favoris</h1>
          <p>Gérer mes favoris</p>
        </div>
      </div>
    </div>
  );
}

export default Favoris;
