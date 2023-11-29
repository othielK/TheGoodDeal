/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [infoUser, setInfoUser] = useState({
    id: localStorage.getItem("id"),
    firstname: localStorage.getItem("firstname"),
    // first_letter_of_firstname: localStorage.getItem(
    //   "first_letter_of_firstname"
    // ),
    lastname: localStorage.getItem("lastname"),
    email: localStorage.getItem("email"),
  });

  return (
    <Context.Provider value={{ infoUser, setInfoUser }}>
      {children}
    </Context.Provider>
  );
}

const ExportContext = {
  Context,
  Provider,
};

export default ExportContext;
