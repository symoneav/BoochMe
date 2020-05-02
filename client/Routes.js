import React from "react";
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Map from './components/map'
// import Companies from "./Companies";
// import Distributors from "./Distributors";
import Home from "./components/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/map' component={Map}/>
      </Switch>
  );
};

export default withRouter(Routes);
