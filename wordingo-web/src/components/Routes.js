import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/home";
import login from "./Login/login.js";
import alphabetical from "./Alphabetical/alphabetical";
import category from "./Category/category";

import singleCategory from "./Category/singleCategory";
import test from "./Test/test.js";
import word from "./WordList/word";
import AddWord from "./AddWord/AddWord";
import AddDefinition from "./AddDefinition/AddDefinition";
import EditDefinition from "./EditDefinition/EditDefinition";
import WordList from "./WordList/WordList";
import AddCategory from "./AddCategory/AddCategory";


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={login} />
      <Route path="/alphabetical" component={alphabetical} />
      <Route path="/category" component={category} />
      <Route path="/addCategory" component={AddCategory} />


      <Route path="/singleCategory/:catname" component={singleCategory} />
      <Route path="/AddWord/:catname" component={AddWord} />
      <Route path="/AddDefinition/:wordid/:wordName" component={AddDefinition} />
      <Route path="/EditDefinition/:defId" component={EditDefinition} />
      
      {/*This is where the test Word/Definitions is*/}
      <Route path="/word-definition/:word_name" component={WordList} />{" "}
    </Switch>
  );
}
