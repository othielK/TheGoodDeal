// import axios from "axios";
// import { useState } from "react";
// import "../styles/signuppage.css";

// export default function SignUpPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [checkedPassword, setCheckedPassword] = useState("");
//   const [error, setError] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChangeEmail = (event) => {
//     setEmail(event.target.value);
//   };
//   const handleChangePassword = (event) => {
//     setPassword(event.target.value);
//   };
//   const sendRegisterData = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <>
//       <div className="signup_background">
//         <div className="signup_title">
//           <h1>Ne ratez aucun deal !</h1>
//           <p>
//             Accédez à catalogue complet de véhicules de qualité et prenez la
//             route en sécurité.
//           </p>
//           <button type="button">Je veux etre membre</button>
//         </div>
//         <div className="signup_header">
//           <div className="signup_header_title">
//             <h1>Se Connecter</h1>
//             <p>
//               Bienvenue dans votre espace connexion. Veuillez saisir votre email
//               ainsi que votre mot de passe.
//             </p>
//           </div>
//           <div className="register_formulaire">
//             <form onSubmit={sendRegisterData}>
//               <input
//                 type="email"
//                 placeholder="Adresse email"
//                 onChange={handleChangeEmail}
//               />
//               <br />
//               <br />
//               <input
//                 type="password"
//                 placeholder="Mot de passe"
//                 onChange={handleChangePassword}
//               />
//               <br />
//               <br />

//               <button type="submit">Se conencter</button>

//               <br />
//               <button type="submit">Pas encore membre?</button>
//             </form>
//           </div>
//         </div>
//       </div>
//       {success ? <p>{success}</p> : ""}
//       {error ? <p>{error}</p> : ""}
//     </>
//   );
// }
