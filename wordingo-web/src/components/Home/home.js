import React from "react";
import "./home.css";
import Wordlist from "../WordList/wordList";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Wordingo</h1>
        <p></p>
      </div>
      <Wordlist />
    </div>
  );
}
