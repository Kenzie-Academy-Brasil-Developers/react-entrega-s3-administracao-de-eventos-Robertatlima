import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FormaturaContext = createContext([]);

export const FormaturaProvider = ({ children }) => {
  const [cartFormatura, setCartFormatura] = useState([]);

  const addCartFormatura = (product) => {
    setCartFormatura([...cartFormatura, product]);
    toast.success("Adicionado ao carrinho Formatura");
  };

  const removeCartFormatura = (product) => {
    const removeProduct = cartFormatura.filter(
      (productCart) => productCart.id !== product.id
    );
    setCartFormatura(removeProduct);
    toast.success("Removido do carrinho Formatura");
  };
  return (
    <FormaturaContext.Provider
      value={{ cartFormatura, addCartFormatura, removeCartFormatura }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
