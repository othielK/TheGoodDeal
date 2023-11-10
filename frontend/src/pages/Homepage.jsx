import React from "react";
// import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import CarCarousel from "../components/CarCarrousel";
import "../styles/homepage.css";
import CarBrandMenu from "../components/CarBrandMenu";

export default function Homepage() {
  return (
    <>
      <div className="welcomeComponent">
        <div className="contentContainer">
          <h1>
            Sublimez <br />
            vos trajets
          </h1>
          <p>
            Venez parcourir les annonces de voitures et leur donner une seconde
            vie.
          </p>
          <button type="button">
            {/* <Link to="/AnnouncePage"> */}
            Regarder les offres{" "}
            <span className="iconWrapper">
              <AiOutlineArrowRight />
            </span>
            {/* </Link> */}
          </button>
        </div>
      </div>

      <div>
        <CarCarousel />
        <CarBrandMenu />
      </div>
    </>
  );
}
