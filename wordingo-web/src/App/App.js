import React from 'react';
import SideBar from './sidebar';
import routes from "./routes";
import './App.css';

export default function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
        <h1>Wordingo</h1>
      </div>
    </div>
  );
}

