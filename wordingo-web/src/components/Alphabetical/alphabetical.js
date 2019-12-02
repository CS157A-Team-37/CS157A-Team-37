import React from "react";
import "./alphabetical.css";
import "../Alphabetical/wordlist"
import Wordlist from "../Alphabetical/wordlist";
import AlphabetNav from "./alphabetNav";

export default function alphabetical() {
  return (
    <div className="alphabetical">
      <AlphabetNav />
      <Wordlist />
      
    </div>
  );
}