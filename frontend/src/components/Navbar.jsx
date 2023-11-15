import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="navbar">
      <nav className="nav">
        <button
          type="button"
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={toggleActiveClass}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <Link to="/" className="logo">
          <img
            src="src/assets/images/logo_the_good_deal.png"
            alt="TheGoodDeal"
          />
        </Link>
        <div className="hide-on-desktop">
          <Link to="/login" className="login-icon">
            <span>Se connecter</span>
            <div className="icon-text">
              <img src="src/assets/images/connecter.png" alt="Se connecter" />
            </div>
          </Link>
        </div>
        <ul className={`navMenu ${isActive ? "active" : ""}`}>
          <li>
            <NavLink to="/login" className="login-icon">
              <div className="icon-text">
                <img src="src/assets/images/message.png" alt="Messages" />
                <span>Messages</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="login-icon">
              <div className="icon-text">
                <img src="src/assets/images/connecter.png" alt="Se connecter" />
                <span>Se connecter</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="login-icon">
              <div className="icon-text">
                <img
                  src="src/assets/images/annonce.png"
                  alt="Déposer une annonce"
                />
                <span> Déposer une annonce </span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>

      <SearchBar />

      <div className="category-section">
        <ul className={`navMenu ${isActive ? "active" : ""}`}>
          <li className="hide-on-desktop">
            <NavLink to="/login" className="login-icon">
              <div className="icon-text">
                <img
                  src="src/assets/images/annonce.png"
                  alt="Déposer une annonce"
                />
                <span> Déposer une annonce </span>
              </div>
            </NavLink>
          </li>
          <li className="hide-on-desktop">
            <NavLink to="/login" className="login-icon">
              <div className="icon-text">
                <img src="src/assets/images/message.png" alt="Messages" />
                <span>Messages</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink onClick="window.location.reload()" to="/result">
              Toutes les catégories
            </NavLink>
          </li>
          <li>
            <NavLink to="/result">Citadine</NavLink>
          </li>
          <li>
            <NavLink to="/result">Berlines</NavLink>
          </li>
          <li>
            <NavLink to="/result">4x4 SUV Crossover</NavLink>
          </li>
          <li>
            <NavLink to="/result">Sans permis</NavLink>
          </li>
          <li>
            <NavLink to="/result">Breaks</NavLink>
          </li>
          <li>
            <NavLink to="/result">Cabriolet</NavLink>
          </li>
          <li>
            <NavLink to="/result">Coupés</NavLink>
          </li>
          <li>
            <NavLink to="/backoffice">Backoffice</NavLink>
          </li>
          <li className="hide-on-desktop">
            <NavLink
              to="/page404"
              className="navLink"
              activeClassName="active"
              onClick={removeActive}
            >
              A PROPOS DE THEGOODDEAL
            </NavLink>
          </li>
          <li className="hide-on-desktop">
            <NavLink
              to="/page404"
              className="navLink"
              activeClassName="active"
              onClick={removeActive}
            >
              INFORMATIONS LEGALES
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
