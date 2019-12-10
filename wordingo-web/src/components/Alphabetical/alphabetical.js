import React from "react";
import "./alphabetical.css";
import "../Alphabetical/wordlist"
import Wordlist from "../Alphabetical/wordlist";
import AlphabetNav from "./alphabetNav";

import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import HttpService from "../../services/http-service";
const http=new HttpService();
// var alphabetArray="ABCDEFGHIGKLMNOPQRSTUVWXYZ"
const alphabetical =({match})=> (
  <div>
    <h3>{match.params.letter} </h3>
  </div>
)

class Alphabetical extends React.Component {
  constructor(props) {
    super(props);
    this.state = { words: [] };

    //Bind Functions
    this.getWords = this.getWords.bind(this);
    this.wordList = this.wordList.bind(this);
  }

  componentDidMount() {
    console.log("MOUNTED");
    this.getWords();
  }

  getWords = () => {
    var self = this;
    http.getWords().then(
      data => {
        this.setState({ words: data });
      },
      err => {}
    );
  };

  wordList = () => {
    //map goes through every element in an array and does something(takes in callback)
    const list = this.state.words.map(word => (
      //the key has to be here on the outermost level
      <div className="col-sm-4" key={word._id}>
        <h1>{word.name}</h1>
      </div>
    ));

    return list;
  };
  
  render(){
    return (
      <div className="alphabetical">
        {/* <AlphabetNav />
        <Wordlist allwords={this.state.words}/> */}

        
      </div>
    );

  }
  
}

export default Alphabetical;
