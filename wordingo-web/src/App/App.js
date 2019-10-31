import React from 'react';
import SideBar from './sidebar';
import Routes from "./Routes";
import { Link } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <div id="App">
      <SideBar />
    <Routes/>
      
    </div>
    
  );
}

