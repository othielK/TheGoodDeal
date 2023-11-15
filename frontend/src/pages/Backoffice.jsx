/* eslint-disable react/button-has-type */
import "../styles/backoffice.css";
import Avatardashboard from "../components/Avatardashboard";
import Profile from "../components/Profile";
import Favoris from "../components/Favoris";
import Annonce from "../components/Annonce";

export default function Backoffice() {
  return (
    <div className="backoffice_content">
      <Avatardashboard />
      <div>
        <div className="component-container">
          <Profile />
          <Favoris />
          <Annonce />
        </div>
      </div>
    </div>
  );
}
