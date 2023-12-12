import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../styles/updateannounce.css";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExportContext from "../contexts/Context";
import Cardcarresult from "../components/Cardcarresult";

export default function updateAnnounce() {
  const [selectedAnnounce, setSelectedAnnounce] = useState({
    kilometer: "",
    price: "",
    description: "",
    image_1: "",
    image_2: "",
    image_3: "",
    image_4: "",
  });

  const [data, setData] = useState([]);

  const { infoUser } = useContext(ExportContext.Context);
  const { announceId } = useParams();

  const getMyCar = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/myAnnouncebyuser/${infoUser.id}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getMyannounce = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/myAnnounceidbyuserid/${
          infoUser.id
        }/${announceId}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setSelectedAnnounce({
          // id: response.data.id || null,
          kilometer: response.data.kilometer || "",
          price: response.data.price || "",
          description: response.data.description || "",
          image_1: response.data.image_1 || "",
          image_2: response.data.image_2 || "",
          image_3: response.data.image_3 || "",
          image_4: response.data.image_4 || "",
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  console.info("id", infoUser.id);

  const sendFormData = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("kilometer", selectedAnnounce.kilometer);
    formData.append("price", selectedAnnounce.price);
    formData.append("description", selectedAnnounce.description);
    formData.append("image_1", selectedAnnounce.image_1);
    formData.append("image_2", selectedAnnounce.image_2);
    formData.append("image_3", selectedAnnounce.image_3);
    formData.append("image_4", selectedAnnounce.image_4);

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/myAnnouncebyuser/${
          infoUser.id
        }$/${announceId}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        toast.success("Annonce mise à jour avec succès!");
        console.info("Réponse de la mise à jour de l'annonce:", response.data);
      })
      .catch((error) => {
        toast.error("Erreur lors de la mise à jour de l'annonce!");
        console.error("Erreur lors de la mise à jour de l'annonce:", error);
      });
  };

  useEffect(() => {
    console.info(infoUser.id);
    getMyannounce();
  }, [infoUser.id, announceId]);

  useEffect(() => {
    console.info(selectedAnnounce);
  }, [selectedAnnounce]);

  useEffect(() => {
    getMyCar();
  }, []);

  return (
    <div className="update_announce">
      <h1>Modifier mon annonce</h1>
      {data.map((car) => (
        <Cardcarresult car={car} />
      ))}
      <ToastContainer />
      {selectedAnnounce && (
        <form className="announce-form" onSubmit={sendFormData}>
          <div className="inputs">
            <div className="kilometer">
              <label htmlFor="kilometer">Nombre de kilomètres</label>
              <input
                type="number"
                placeholder={selectedAnnounce.kilometer}
                value={selectedAnnounce.kilometer}
                name="kilometer"
                onChange={(event) =>
                  setSelectedAnnounce({
                    ...selectedAnnounce,
                    kilometer: event.target.value,
                  })
                }
              />
            </div>
            <div className="price">
              <p>Prix</p>
              <input
                type="number"
                placeholder={selectedAnnounce.price}
                value={selectedAnnounce.price}
                name="price"
                onChange={(event) =>
                  setSelectedAnnounce({
                    ...selectedAnnounce,
                    price: event.target.value,
                  })
                }
              />
            </div>
            <div className="mydescription">
              <p>Description</p>
              <textarea
                type="text"
                placeholder={selectedAnnounce.description}
                value={selectedAnnounce.description}
                name="description"
                onChange={(event) =>
                  setSelectedAnnounce({
                    ...selectedAnnounce,
                    description: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="pictures">
            <p>Les photos de votre véhicule</p>
            <input
              type="file"
              name="image_1"
              onChange={(event) =>
                setSelectedAnnounce({
                  ...selectedAnnounce,
                  image_1: event.target.files[0],
                })
              }
            />
            <input
              type="file"
              name="image_2"
              onChange={(event) =>
                setSelectedAnnounce({
                  ...selectedAnnounce,
                  image_2: event.target.files[0],
                })
              }
            />
            <input
              type="file"
              name="image_3"
              onChange={(event) =>
                setSelectedAnnounce({
                  ...selectedAnnounce,
                  image_3: event.target.files[0],
                })
              }
            />
            <input
              type="file"
              name="image_4"
              onChange={(event) =>
                setSelectedAnnounce({
                  ...selectedAnnounce,
                  image_4: event.target.files[0],
                })
              }
            />
          </div>
          <div className="button">
            <input
              type="submit"
              value="Enregistrer les modifications"
              // ref={inputRef}
              onSubmit={sendFormData}
            />
          </div>
        </form>
      )}
    </div>
  );
}
