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
          cartCasamento.map((product) => (
            <li className="card" key={product.id}>
              <img src={product.image_url} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <p> first brewed - {product.first_brewed}</p>
              <p> {product.volume.value}L</p>
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
