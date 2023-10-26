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
              <Link to="/messagepage">Messages</Link>
            </li>
            <li>
              <Link to="/loginpage">Se connecter</Link>
            </li>
            <li>
              <Link to="/announcepage">Déposer une annonce</Link>
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
            <Link to="/resultpage">Toutes les catégories</Link>
          </li>
          <li>
            <Link to="/resultpage">Citadine</Link>
          </li>
          <li>
            <Link to="/resultpage">Berlines</Link>
          </li>
          <li>
            <Link to="/resultpage">4x4 SUV Crossover</Link>
          </li>
          <li>
            <Link to="/resultpage">Sans permis</Link>
          </li>
          <li>
            <Link to="/resultpage">Breaks</Link>
          </li>
          <li>
            <Link to="/resultpage">Cabriolet</Link>
          </li>
          <li>
            <Link to="/resultpage">Coupés</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
