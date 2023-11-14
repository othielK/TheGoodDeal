// Annonce.js
import React from "react";
import { MdAnnouncement } from "react-icons/md";
import "../styles/annonce.css";

function Annonce() {
  return (
    <div className="cardannonce">
      <div className="card">
        <div className="annonce">
          <div className="annonce-icon">
            <MdAnnouncement size={40} />
          </div>
          <div className="annonce-details">
            <h1>Mes Annonces</h1>
            <p>Gérer Mes Déposées</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Annonce;
