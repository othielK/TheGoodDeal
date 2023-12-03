// MesFavoris.js
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
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
          <Link to="/mesfavoris">
            <p>Gérer mes favoris</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Favoris;
