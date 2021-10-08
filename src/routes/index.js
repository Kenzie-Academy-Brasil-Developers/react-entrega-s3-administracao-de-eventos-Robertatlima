import { Switch, Route } from "react-router";
import Casamento from "../Pages/Casamento";
import Formatura from "../Pages/Formatura";
import Confraternizacao from "../Pages/Confraternizacao";
import Home from "../Pages/Home";

const Routes = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/casamento">
            <Casamento />
          </Route>
          <Route exact path="/formatura">
            <Formatura />
          </Route>
          <Route exact path="/confraternizacao">
            <Confraternizacao />
          </Route>
        </Switch>
      </div>
    </>
  );
};
export default Routes;
