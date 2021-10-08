import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CasamentoContext = createContext([]);

export const CasamentoProvider = ({ children }) => {
  const [cartCasamento, setCartCasamento] = useState([]);

  const addCartCasamento = (product) => {
    setCartCasamento([...cartCasamento, product]);
    toast.success("Adicionado ao carrinho casamento");
  };

  const removeCartCasamento = (product) => {
    const removeProduct = cartCasamento.filter(
      (productCart) => productCart.id !== product.id
    );
    setCartCasamento(removeProduct);
    toast.success("Removido do carrinho casamento");
  };
  return (
    <CasamentoContext.Provider
      value={{ cartCasamento, addCartCasamento, removeCartCasamento }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
