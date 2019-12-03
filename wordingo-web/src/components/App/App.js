import React from "react";
import SideBar from "../Layout/navbar";
import Routes from "../Routes";
import "./App.css";

export default function App() {
  return (
    <div id="App">
      <SideBar />
      <Routes />

      <div id="page-wrap"></div>
    </div>
  );
}
