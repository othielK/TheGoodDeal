// Profile.js
import React from "react";
import { FaUser } from "react-icons/fa";
import "../styles/profile.css";

function Profile() {
  return (
    <div className="card_profile">
      <div className="profile">
        <div className="profile-icon">
          <FaUser size={40} />
        </div>
        <div className="profile-details">
          <h1>Mon Profil</h1>
          <p>Modifier mon profil</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
