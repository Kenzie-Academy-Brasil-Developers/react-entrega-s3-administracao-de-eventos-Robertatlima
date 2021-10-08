// import axios from "axios";
import { useContext } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import { FormaturaContext } from "../../Providers/Formatura";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";
import { BebidasContext } from "../../Providers/bebidas";
import * as C from "./style";

const Home = () => {
  const { bebidas } = useContext(BebidasContext);
  const { addCartConfraternizacao } = useContext(ConfraternizacaoContext);
  const { addCartCasamento } = useContext(CasamentoContext);
  const { addCartFormatura } = useContext(FormaturaContext);

  return (
    <C.Card>
      <ul>
        {bebidas.map((product, index) => (
          <li className="card" key={index}>
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.first_brewed}</p>

            <p>{product.description}</p>
            <p> {product.volume.value}L</p>
            <div className="button">
              <button onClick={() => addCartFormatura(product)}>
                Formatura
              </button>
              <button onClick={() => addCartCasamento(product)}>
                Casamento
              </button>
              <button onClick={() => addCartConfraternizacao(product)}>
                Confraternização
              </button>
            </div>
          </li>
        ))}
      </ul>
    </C.Card>
  );
};
export default Home;
