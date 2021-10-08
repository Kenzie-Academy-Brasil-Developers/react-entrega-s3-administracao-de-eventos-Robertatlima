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
              <img src={product.image_url} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <p> first brewed - {product.first_brewed}</p>
              <p> {product.volume.value}L</p>
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
