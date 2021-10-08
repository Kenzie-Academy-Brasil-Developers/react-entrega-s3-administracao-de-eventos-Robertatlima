import { useContext } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import "./style.css";
const Casamento = () => {
  const { cartCasamento, removeCartCasamento } = useContext(CasamentoContext);

  return (
    <div className="cards">
      <h2>Bem vindo(a) ao seu carrinho Casamento</h2>
      <ul>
        {cartCasamento &&
          cartCasamento.map((product, index) => (
            <li className="card" key={index}>
              <img alt={product.name} src={product.image_url} />
              <p>Nome: {product.name}</p>
              <p>Início fabricação: {product.first_brewed}</p>
              <p>Descrição: {product.description}</p>
              <p>Quantidade de litros: {product.volume.value}L</p>
              <button
                className="btn_rem"
                onClick={() => removeCartCasamento(product)}
              >
                Remover item
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Casamento;
