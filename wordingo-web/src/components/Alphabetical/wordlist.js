import React, { Component } from "react";
import "../Alphabetical/wordlist.css";

class Wordlist extends Component {
  constructor(props) {
    super(props);
    // this.state = { letterClicked: ""};

    //Bind Functions
    this.list = this.list.bind(this);
    // this.setLetterClicked = this.setLetterClicked.bind(this);
  }

  // componentDidMount() {
  //   console.log("MOUNTED");
  //   this.setLetterClicked();
  // }

  // setLetterClicked = () => {
  //   console.log("PARAM PASSED IN");
  //   this.state.letterClicked = this.props.letterClicked
  // }

  list = () => {

    const wordStyling = {
      backgroundColor: "white",
      color: "black",
      border: "2px solid blue",
      padding: "10px 20px",
      textAlign: "enter",
      fontSize:"3rem",
      textDecoration: "none",
      display: "inline-block",
      boxShadow: "1px 0px 3px 1px rgba(0,0,0,0.63)"
    }

    let listToMap = [...this.props.allwords];
    console.log(listToMap);

    if (this.props.letterClicked != undefined) {
      listToMap = this.props.allwords.filter(word => {
        return word.name[0] === this.props.letterClicked;
      });
      console.log(listToMap);
    }

    const list = listToMap.map(word => (
      //the key has to be here on the outermost level
      <div className="col-sm-4" key={word._id}>
        <a style={wordStyling} href={"/word-definition/" + word.name}>{word.name}</a>
      </div>
    ));

    return list;
  };

  render() {


    return (
      <div className="container">
        <div className="row">{this.list()}</div>
      </div>
    
    );
  }
}

export default Wordlist;
