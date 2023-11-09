import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Cardcarresult from "../components/Cardcarresult";

export default function CarmodelResult() {
  const [dataModel, setDataModel] = useState([]);
  const [errorName, setErrorName] = useState(false);
  const { modelResearch } = useParams();

  const searchModel = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/announce/model/${modelResearch}`
      )
      .then((response) => {
        setDataModel(response.data);
        console.info(response.data);
      })
      .catch((err) => {
        console.error(err);
        setErrorName(true);
      });
  };

  useEffect(() => {
    searchModel();
  }, [modelResearch]);

  return (
    <div className="model_resul ts">
      <h2>
        Nous avons trouvé {dataModel.length} résultats pour {modelResearch}
      </h2>
      <div className="model_list">
        {!errorName ? (
          dataModel.map((model) => <Cardcarresult key={model.id} car={model} />)
        ) : (
          <p>Aucun résultat</p>
        )}
      </div>
    </div>
  );
}
