import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CasamentoContext = createContext([]);

export const CasamentoProvider = ({ children }) => {
  const [cartCasamento, setCartCasamento] = useState(
    JSON.parse(localStorage.getItem("cartCasamento")) || []
  );
  useEffect(() => {
    localStorage.setItem("cartCasamento", JSON.stringify(cartCasamento));
  }, [cartCasamento]);

  const addCartCasamento = (product) => {
    setCartCasamento([...cartCasamento, product]);
    toast.success("Adicionado ao carrinho casamento");
  };

  const removeCartCasamento = (product) => {
    const removeProduct = cartCasamento.filter(
      (productCart) => productCart.name !== product.name
    );
    setCartCasamento(removeProduct);
    toast.error("Removido do carrinho casamento");
  };
  console.log(cartCasamento);
  return (
    <CasamentoContext.Provider
      value={{ cartCasamento, addCartCasamento, removeCartCasamento }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
