import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ConfraternizacaoContext = createContext([]);

export const ConfraternizacaoProvider = ({ children }) => {
  const [cartConfraternizacao, setCartConfraternizacao] = useState([]);

  const addCartConfraternizacao = (product) => {
    setCartConfraternizacao([...cartConfraternizacao, product]);
    toast.success("Adicionado ao carrinho Confraternizacao");
  };

  const removeCartConfraternizacao = (product) => {
    const removeProduct = cartConfraternizacao.filter(
      (productCart) => productCart.id !== product.id
    );
    setCartConfraternizacao(removeProduct);
    toast.success("Removido do carrinho Confraternizacao");
  };
  return (
    <ConfraternizacaoContext.Provider
      value={{
        cartConfraternizacao,
        addCartConfraternizacao,
        removeCartConfraternizacao,
      }}
    >
      {children}
    </ConfraternizacaoContext.Provider>
  );
};
