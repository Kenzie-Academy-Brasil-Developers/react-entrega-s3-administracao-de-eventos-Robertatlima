import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const ConfraternizacaoContext = createContext([]);

export const ConfraternizacaoProvider = ({ children }) => {
  const [cartConfraternizacao, setCartConfraternizacao] = useState(
    JSON.parse(localStorage.getItem("cartConfraternizacao")) || []
  );
  useEffect(() => {
    localStorage.setItem(
      "cartConfraternizacao",
      JSON.stringify(cartConfraternizacao)
    );
  }, [cartConfraternizacao]);

  const addCartConfraternizacao = (product) => {
    setCartConfraternizacao([...cartConfraternizacao, product]);
    toast.success("Adicionado ao carrinho Confraternizacao");
  };

  const removeCartConfraternizacao = (product) => {
    const removeProduct = cartConfraternizacao.filter(
      (productCart) => productCart.name !== product.name
    );
    setCartConfraternizacao(removeProduct);
    toast.error("Removido do carrinho Confraternizacao");
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
