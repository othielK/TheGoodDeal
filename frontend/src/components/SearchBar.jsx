import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/searchBar.css";

export default function SearchBar() {
  const [userResearch, setUserResearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${userResearch}`);
  };

  const handleSearch = (event) => {
    setUserResearch(event.target.value);
  };

  return (
    <form className="search_bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Chercher un véhicule..."
        onChange={handleSearch}
      />
      <button type="submit">Rechercher</button>
      {/* <input type="submit" value="Rechercher" /> */}
    </form>
  );
}
