import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home.js";
import login from "./login.js";

const Routes = () => (
  <Routes>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={login}/>
    </Switch>
  </Routes>
)

export default Routes