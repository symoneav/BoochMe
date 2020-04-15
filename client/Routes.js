import React from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          hola
          <Navlink to="/">Home</Navlink>
          <Navlink to="/Distributors">Distributors</Navlink>
          <Navlink to="/Companies">Companies</Navlink>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
