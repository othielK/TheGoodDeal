import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import "../styles/navbar.css";
import { CgProfile } from "react-icons/cg";
import { TbMessage } from "react-icons/tb";
import { FiPlusSquare } from "react-icons/fi";
import SearchBar from "./SearchBar";
import ExportContext from "../contexts/Context";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [carType, setCarType] = useState([]);
  const { infoUser, setIsLoggedIn } = useContext(ExportContext.Context);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/cartypes`)
      .then((response) => {
        setCarType(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des types de voiture :",
          error
        );
      });
  }, []);

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
            src="/src/assets/images/logo_the_good_deal.png"
            alt="TheGoodDeal"
          />
        </Link>
        <li className="hide-on-desktop">
          <div className="hide-on-desktop">
            {infoUser.id ? (
              <Link to="/backoffice" className="login-icon">
                <CgProfile />
                <span>Mon profil</span>
                <div className="icon-text" />
              </Link>
            ) : (
              <Link to="/login" className="login-icon" onClick={handleLogin}>
                <CgProfile />
                <span>Se connecter</span>
                <div className="icon-text" />
              </Link>
            )}
          </div>
        </li>

        <ul className={`navMenu ${isActive ? "active" : ""}`}>
          <li>
            <NavLink to="/messages" className="login-icon">
              <div className="icon-text">
                <TbMessage />
                <span>Messages</span>
              </div>
            </NavLink>
          </li>
          <li className="hide-on-mobile">
            {infoUser.id ? (
              <Link to="/backoffice" className="login-icon">
                <CgProfile />
                <span>Mon profil</span>
                <div className="icon-text" />
              </Link>
            ) : (
              <Link to="/login" className="login-icon" onClick={handleLogin}>
                <CgProfile />
                <span>Se connecter</span>
                <div className="icon-text" />
              </Link>
            )}
          </li>
          <li>
            <NavLink to="/announce" className="login-icon">
              <div className="icon-text">
                <FiPlusSquare />
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
            <NavLink to="/announce">Déposer une annonce</NavLink>
          </li>
          <li className="hide-on-desktop">
            <NavLink to="/messages">Mes messages</NavLink>
            <div className="separator" />
          </li>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/result/type/all">Toutes les catégories</NavLink>
          </li>
          <li>
            {carType.map((types) => (
              <NavLink
                className="car-type"
                key={types.id}
                to={`/result/type/${types.car_type_name}`}
              >
                {types.car_type_name}
              </NavLink>
            ))}
            <div className="separator" />
          </li>
          <li className="hide-on-desktop">
            <NavLink
              to="/page404"
              className="navLink"
              activeclassname="active"
              onClick={removeActive}
            >
              A PROPOS DE THEGOODDEAL
            </NavLink>
          </li>
          <li className="hide-on-desktop">
            <NavLink
              to="/page404"
              className="navLink"
              activeclassname="active"
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
