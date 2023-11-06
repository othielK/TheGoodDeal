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
      <div className="first-section">
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
          <ul className={`navMenu ${isActive ? "active" : ""}`}>
            <li>
              <NavLink to="/loginpage" className="login-icon">
                <div className="icon-text">
                  <img src="src/assets/images/message.png" alt="Messages" />
                  <span>Messages</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/loginpage" className="login-icon">
                <div className="icon-text">
                  <img
                    src="src/assets/images/connecter.png"
                    alt="Se connecter"
                  />
                  <span>Se connecter</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/loginpage" className="login-icon">
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
      </div>
      <SearchBar />

      <div className="category-section">
        <ul className={`navMenu ${isActive ? "active" : ""}`}>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/resultpage">Toutes les catégories</NavLink>
          </li>
          <li>
            <NavLink to="/resultpage">Citadine</NavLink>
          </li>
          <li>
            <NavLink to="/resultpage">Berlines</NavLink>
          </li>
          <li>
            <NavLink to="/resultpage">4x4 SUV Crossover</NavLink>
          </li>
          <li>
            <NavLink to="/resultpage">Sans permis</NavLink>
          </li>
          <li>
            <NavLink to="/resultpage">Breaks</NavLink>
          </li>
          <li>
            <NavLink to="/resultpage">Cabriolet</NavLink>
          </li>
          <li>
            <NavLink to="/resultpage">Coupés</NavLink>
          </li>
          <li className="hide-on-desktop">
            <NavLink
              to="/messagepage"
              className="navLink"
              activeClassName="active"
              onClick={removeActive}
            >
              Messages
            </NavLink>
          </li>
          <li className="hide-on-desktop">
            <NavLink
              to="/announcepage"
              className="navLink"
              activeClassName="active"
              onClick={removeActive}
            >
              Déposer une annonce
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
