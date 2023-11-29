// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Cardcarresult from "../components/Cardcarresult";

// export default function SearchResult() {
//   const [data, setData] = useState([]);
//   const { userResearch } = useParams();

//   const searchCars = () => {
//     axios
//       .get(
//         `${import.meta.env.VITE_BACKEND_URL}/announce/search/${userResearch}`
//       )
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   useEffect(() => {
//     searchCars();
//   }, [userResearch]);

//   return (
//     <>
//       <h2 className="search_result">
//         Resultat de la recherche pour : {userResearch}
//       </h2>
//       <div>
//         {data.map((car) => (
//           //   <Link key={car.id} to={`/result/${car.id}`}>
//           <Cardcarresult key={car.id} car={car} />
//           //   </Link>
//         ))}
//       </div>
//     </>
//   );
// }
