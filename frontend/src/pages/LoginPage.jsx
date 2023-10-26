import React from "react";
import "../styles/loginpage.css";

export default function LoginPage() {
  return (
    <>
      <h1>Ne ratez auncun deal!</h1>
      <p>
        Accedez à un catalaogue complet de véhicule de qualité et prenez la
        route en sécurité.{" "}
      </p>
      <button type="button">Je suis déjà membre </button>
      <form action="">
        <h2>Créer un compte</h2>
        <p>
          Crée un compte gratuitement et rejoins notre communauté de membres
          pour accéder à de nombreux avantages :
        </p>
        <ul>
          <li>Prise de contact simplifiée</li>
          <li>Achetez sereinement</li>
          <li>Déposer des annonces</li>
        </ul>
        <input type="text" /> <br />
        <input type="text" />
        <br />
        <input type="text" /> <br />
        <button type="button">Créer un compte</button> <br />
        <button type="button">J'ai déjà un compte</button>
      </form>
    </>
  );
}
