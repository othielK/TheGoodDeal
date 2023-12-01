// Profile.js
import React from "react";
import { FaUser } from "react-icons/fa";
import "../styles/profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="card_profile">
      <div className="profile">
        <div className="profile-icon">
          <FaUser size={40} />
        </div>
        <div className="profile-details">
          <h1>Mon Profil</h1>
          <Link to="/updateUser">
            <p>Modifier mon profil</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
