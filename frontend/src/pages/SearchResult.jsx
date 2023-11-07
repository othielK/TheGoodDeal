import { useParams } from "react-router-dom";

export default function SearchResult() {
  const { useResearch } = useParams();
  return (
    <>
      <h2>Ici sera affiché le résultat de ma recherche...</h2>
      <p>{useResearch}</p>
    </>
  );
}
