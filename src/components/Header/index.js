import * as C from "./style";
import { Link } from "react-router-dom";
import { CgShoppingCart, CgHome } from "react-icons/cg";
import { BiDrink } from "react-icons/bi";
import { BsArrowDownSquare } from "react-icons/bs";

const Header = () => {
  return (
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
          <CgShoppingCart />
          <p>Formatura</p>
        </Link>
        <Link to="/casamento" className="link">
          <CgShoppingCart />

          <p>Casamento</p>
        </Link>
        <Link to="/confraternizacao" className="link">
          <CgShoppingCart />
          <p>Confraternização</p>
        </Link>
      </div>
      <div className="media">
        <button>
          {" "}
          <BsArrowDownSquare />
        </button>
      </div>
    </C.Header>
  );
};
export default Header;
