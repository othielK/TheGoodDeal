import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Partie 1 : Barre de Navigation */}
      <div className="first-section">
        <nav>
          <div className="logo">
            <img src="" alt="TheGoodDeal" />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/message">Messages</Link>
            </li>
            <li>
              <Link to="/login">Se connecter</Link>
            </li>
            <li>
              <Link to="/announce">Déposer une annonce</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Partie 2 : Barre de recherche */}
      <div className="search-section">
        <input type="text" placeholder="Trouvez votre good deal..." />
        <button type="button">Rechercher</button>
      </div>

      {/* Partie 3 : Liste des catégories */}
      <div className="category-section">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/result">Toutes les catégories</Link>
          </li>
          <li>
            <Link to="/result">Citadine</Link>
          </li>
          <li>
            <Link to="/result">Berlines</Link>
          </li>
          <li>
            <Link to="/result">4x4 SUV Crossover</Link>
          </li>
          <li>
            <Link to="/result">Sans permis</Link>
          </li>
          <li>
            <Link to="/result">Breaks</Link>
          </li>
          <li>
            <Link to="/result">Cabriolet</Link>
          </li>
          <li>
            <Link to="/result">Coupés</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
