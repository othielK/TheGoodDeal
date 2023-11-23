import React, { useState } from "react";
import axios from "axios";
import "../styles/newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSucces] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const sendRegisterData = (event) => {
    event.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/newsletter`, {
        email,
      })

      .then((response) => {
        setSucces(response.data.message);
        setError(false);
        console.info(response);
      })
      .catch((err) => {
        if (err.response.data.error === `"email" is not allowed to be empty`) {
          setError("L'email ne peut pas être vide");
        } else if (
          err.response.data.error === `"email" must be a valid email`
        ) {
          setError("Merci de mettre un email valide");
        } else if (err.response.data.error === 1062) {
          setError("L'email est déjà enregistré");
        } else {
          console.error(err.response.data.error);
        }
        setSucces(false);
      });
  };

  return (
    <>
      <div className="newsletter">
        <div className="title">
          <h4>Newsletter</h4>
        </div>

        <div className="text">
          <p>
            Inscrivez-vous à la newsletter et recevez en exclusivité les offres
            les plus incroyables avant qu’elles soient publiées !
          </p>
        </div>

        <form className="subscribe" onSubmit={sendRegisterData}>
          <div className="inscription">
            <input
              type="email"
              placeholder="Saisissez une adresse mail ..."
              onChange={handleChangeEmail}
            />
            <input type="submit" value="Valider" />
          </div>
        </form>
      </div>
      {success ? <p className="messagesucces">{success}</p> : ""}
      {error ? <p className="messageerror">{error}</p> : ""}
    </>
  );
}
