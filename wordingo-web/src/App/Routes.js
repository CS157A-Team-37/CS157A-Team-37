import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./home.js";
import login from "./login.js";
import alphabetical from "./alphabetical.js";
import category from "./category.js";
import test from "./test.js";

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={login} />
        <Route path="/alphabetical" component={alphabetical} />
        <Route path="/category" component={category} />
        <Route path="/test" component={test} />
      </Switch>
    );
  }