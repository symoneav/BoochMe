import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import Companies from "./Companies";
import Distributors from "./Distributors";
import Home from "./Home";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          hola
          {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/distributors">Distributors</NavLink>
          <NavLink to="/companies">Companies</NavLink> */}
        </nav>
        <main>
          {/* <Route exact path="/" component={Home} />
            <Route exact path="/distributors" component={Distributors} />
            <Route exact path="/companies" component={Companies} /> */}
        </main>
      </div>
    </Router>
  );
};

export default Routes;
