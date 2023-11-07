import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <img src="src/assets/logo-noir.png" alt="TheGoodDeal" />
        </div>
        {/* Partie 1 : Footer */}
        <div className="Firstpart">
          <div className="propos">
            <h3>A PROPOS DE THEGOODDEAL</h3>

            <div className="liens">
              <ul>
                <Link to="/Qui sommes-nous">Qui sommes-nous ?</Link>

                <Link to="/Nous rejoindre">Nous rejoindre</Link>

                <Link to="/Nos engagements">Nos engagements</Link>
              </ul>
            </div>
          </div>
          {/* Partie 2 : Footer */}
          <div className="legales">
            <h3>INFORMATIONS LEGALES</h3>
            <div className="liens">
              <ul>
                <Link to="/Conditions générales">
                  Conditions générales d'utilisations
                </Link>

                <Link to="/Cookies">Vie privée / cookies</Link>

                <Link to="/Charte conduite">Charte de bonne conduite</Link>
              </ul>
            </div>
          </div>
          <Newsletter />
        </div>

        {/* Partie 3 : Footer */}
        <p className="copyright">
          {" "}
          Copyright © 2023 TheGoodDeal. tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
