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
              <img src={product.image_url} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <p> first brewed - {product.first_brewed}</p>
              <p> {product.volume.value}L</p>
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
