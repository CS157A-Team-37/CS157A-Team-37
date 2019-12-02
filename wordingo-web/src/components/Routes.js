import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/home";
import login from "./Login/login.js";
import alphabetical from "./Alphabetical/alphabetical";
import category from "./Category/category";
import test from "./Test/test.js";
import WordList from "./WordList/WordList";



export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={login} />
      <Route path="/alphabetical" component={alphabetical} />
      <Route path="/category" component={category} />
      {/*This is where the test Word/Definitions is*/}
      <Route path="/test" component={WordList} />{" "}

    </Switch>
  );
}
