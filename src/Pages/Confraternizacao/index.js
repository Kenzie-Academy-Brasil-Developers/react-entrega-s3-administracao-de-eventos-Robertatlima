import { useContext } from "react";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";
import "./style.css";

const Confraternizacao = () => {
  const { cartConfraternizacao, removeCartConfraternizacao } = useContext(
    ConfraternizacaoContext
  );

  return (
    <div className="cards">
      <h2>Bem vindo(a) ao seu carrinho Confraternização</h2>
      <ul>
        {cartConfraternizacao &&
          cartConfraternizacao.map((product, index) => (
            <li className="card" key={index}>
              <img alt={product.name} src={product.image_url} />
              <p>Nome: {product.name}</p>
              <p>Início fabricação: {product.first_brewed}</p>
              <p>Descrição: {product.description}</p>
              <p>Quantidade de litros: {product.volume.value}L</p>
              <button
                className="btn_rem"
                onClick={() => removeCartConfraternizacao(product)}
              >
                Remover item
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Confraternizacao;
