import { useContext } from "react";
import { FormaturaContext } from "../../Providers/Formatura";
import "./style.css";

const Formatura = () => {
  const { cartFormatura, removeCartFormatura } = useContext(FormaturaContext);

  return (
    <div className="cards">
      <h2>Bem vindo(a) ao seu carrinho Formatura</h2>
      <ul>
        {cartFormatura &&
          cartFormatura.map((product, index) => (
            <li className="card" key={index}>
              <img alt={product.name} src={product.image_url} />
              <p>Nome: {product.name}</p>
              <p>Início fabricação: {product.first_brewed}</p>
              <p>Descrição: {product.description}</p>
              <p>Quantidade de litros: {product.volume.value}L</p>
              <button
                className="btn_rem"
                onClick={() => removeCartFormatura(product)}
              >
                Remover item
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Formatura;
