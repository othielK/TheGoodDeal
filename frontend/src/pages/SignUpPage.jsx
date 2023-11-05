import axios from "axios";
import { useState } from "react";
import "../styles/signuppage.css";
import { AiOutlineCheckCircle, AiOutlineArrowRight } from "react-icons/ai";

export default function SignUpPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChangePrenom = (event) => {
    setLastname(event.target.value);
  };
  const handleChangeNom = (event) => {
    setFirstname(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeCheckedPassword = (event) => {
    setCheckedPassword(event.target.value);
  };

  const sendRegisterData = (event) => {
    event.preventDefault();

    if (password === checkedPassword) {
      console.info("email", email);
      console.info("password", password);
      axios
        .post("http://localhost:5000/user", {
          firstname,
          lastname,
          email,
          password,
        })

        .then((response) => {
          setSuccess(response.data.message);
          setError(false);
          console.info(response);
        })
        .catch((err) => {
          if (
            err.response.data.error === `"firstname" is not allowed to be empty`
          ) {
            setError("Le Prenom ne peut pas être vide");
          } else if (
            err.response.data.error === `"firstname" must be a valid name`
          ) {
            setError("Mettre un prenom valide");
          } else if (
            err.response.data.error === `"lastname" is not allowed to be empty`
          ) {
            setError("Le Prenom ne peut pas être vide");
          } else if (
            err.response.data.error === `"lastname" must be a valid name`
          ) {
            setError("Mettre un nom valide");
          } else if (
            err.response.data.error === `"email" is not allowed to be empty`
          ) {
            setError("L'email ne peut pas être vide");
          } else if (
            err.response.data.error === `"email" must be a valid email`
          ) {
            setError("Mettre un email valide");
          } else if (
            err.response.data.error === `"password" is not allowed to be empty`
          ) {
            setError("Merci de donner un password");
          } else if (
            err.response.data.error ===
            `"password" length must be at least 8 characters long`
          ) {
            setError("Le mot de passe doit faire au moins 8 caractères");
          } else if (err.response.data.error === 1062) {
            setError("L'email est déjà enregistré");
          } else {
            console.error(err.response.data.error);
          }
          setSuccess(false);
        });
    } else {
      setError("Les mots de passe ne correspondent pas");
      console.error("Les mots de passe ne correspondent pas");
    }
  };
  const iconStyles = { color: "#EBAF00", fontSize: "1.5em" };
  return (
    <>
      <div className="signup_background">
        <div className="sign_up">
          <div className="signup_title">
            <h1>Ne ratez aucun deal!</h1>
            <p>
              Accédez à catalogue complet de véhicules de qualité et prenez la
              route en sécurité.
            </p>
            <button className="btn_membre" type="button">
              Je suis déjà membre
              <AiOutlineArrowRight style={iconStyles} />
            </button>
          </div>
          <div className="signup_header">
            <div className="signup_header_title">
              <h1>Créer un compte</h1>
              <p>
                Crée un compte gratuitement et rejoins notre communauté de
                membres pour accéder à de nombreux avantages :
              </p>
              {/* <p>Prise de contact simplifiée</p>
            <p>Achetez sereinement</p>
            <p>Déposer des annonces</p> */}
              <ul>
                <li>
                  <AiOutlineCheckCircle style={iconStyles} /> Prise de contact
                  simplifiée
                </li>

                <li>
                  <AiOutlineCheckCircle style={iconStyles} />
                  Achetez sereinement
                </li>

                <li>
                  <AiOutlineCheckCircle style={iconStyles} /> Déposer des
                  annonces
                </li>
              </ul>
            </div>
            <div className="register_formulaire">
              <form onSubmit={sendRegisterData}>
                <input
                  type="text"
                  placeholder="Prenom"
                  onChange={handleChangePrenom}
                />
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Nom"
                  onChange={handleChangeNom}
                />
                <br />
                <br />
                <input
                  type="email"
                  placeholder="Adresse email"
                  onChange={handleChangeEmail}
                />
                <br />
                <br />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  onChange={handleChangePassword}
                />
                <br />
                <br />
                <input
                  type="password"
                  placeholder="confirmation du mot de password"
                  onChange={handleChangeCheckedPassword}
                />
                <br />
                <br />
                <button className="btn-create" type="submit">
                  Créer un compte
                </button>

                <br />
                <button className="btn-deja" type="submit">
                  Déjà membre
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {success ? <p>{success}</p> : ""}
      {error ? <p>{error}</p> : ""}
    </>
  );
}
