import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BebidasContext = createContext([]);

export const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);

  const getBebidas = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setBebidas(response.data));
  };
  useEffect(() => {
    getBebidas();
  }, []);
  return (
    <BebidasContext.Provider value={{ bebidas, getBebidas }}>
      {children}
    </BebidasContext.Provider>
  );
};
