import * as C from "./style";
import { Link } from "react-router-dom";
import { CgShoppingCart, CgHome } from "react-icons/cg";
import { BiDrink } from "react-icons/bi";
import { BsArrowDownSquare } from "react-icons/bs";
import { Badge } from "@material-ui/core";
import { FormaturaContext } from "../../Providers/Formatura";
import { useContext, useState } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";

const Header = () => {
  // const [click, setClick] = useState(false);
  // const handleClick = () => {
  //   setClick(!click);
  // };

  const { cartFormatura } = useContext(FormaturaContext);
  const { cartCasamento } = useContext(CasamentoContext);
  const { cartConfraternizacao } = useContext(ConfraternizacaoContext);
  return (
    <>
      <C.Header>
        <div className="areaRight">
          <h2> Event drinks</h2>

          <BiDrink id="bidrink" />
        </div>
        <div className="areaLeft">
          <Link to="/" className="link">
            <CgHome />
            <p>Home</p>
          </Link>

          <Link to="/formatura" className="link">
            <Badge badgeContent={cartFormatura.length} color="primary">
              <CgShoppingCart />
            </Badge>
            <p>Formatura</p>
          </Link>

          <Link to="/casamento" className="link">
            <Badge badgeContent={cartCasamento.length} color="primary">
              <CgShoppingCart />
            </Badge>

            <p>Casamento</p>
          </Link>
          <Link to="/confraternizacao" className="link">
            <Badge badgeContent={cartConfraternizacao.length} color="primary">
              <CgShoppingCart />
            </Badge>
            <p>Confraternização</p>
          </Link>
        </div>
        {/* <div className="media" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div> */}
      </C.Header>
    </>
  );
};
export default Header;
