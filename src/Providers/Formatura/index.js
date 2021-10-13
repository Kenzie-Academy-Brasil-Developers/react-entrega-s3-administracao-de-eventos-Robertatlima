import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const FormaturaContext = createContext([]);

export const FormaturaProvider = ({ children }) => {
  const [cartFormatura, setCartFormatura] = useState(
    JSON.parse(localStorage.getItem("cartFormatura")) || []
  );
  useEffect(() => {
    localStorage.setItem("cartFormatura", JSON.stringify(cartFormatura));
  }, [cartFormatura]);

  const addCartFormatura = (product) => {
    setCartFormatura([...cartFormatura, product]);
    toast.success("Adicionado ao carrinho Formatura");
  };

  const removeCartFormatura = (product) => {
    const removeProduct = cartFormatura.filter(
      (productCart) => productCart.name !== product.name
    );
    setCartFormatura(removeProduct);
    toast.error("Removido do carrinho Formatura");
  };
  return (
    <FormaturaContext.Provider
      value={{ cartFormatura, addCartFormatura, removeCartFormatura }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
