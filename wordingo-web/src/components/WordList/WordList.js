import React from "react";
import { PropTypes } from "prop-types";

// Component imports
import Word from "./word";
import Definition from "./definition";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";

//import service
import HttpService from "../../services/http-service";
const http = new HttpService();

class WordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlParam: this.props.match.params.word_name,
      word: [],
      definitions: []
    };
    // this.findWord();
    // this.findDefinitions();

    //Bind Methods
    this.findWord = this.findWord.bind(this);
    this.findDefinitions = this.findDefinitions.bind(this);
    this.setWordAndDefinition = this.setWordAndDefinition.bind(this);
  }

  componentDidMount() {
    this.setWordAndDefinition();
  }

  componentDidUpdate() {}

  setWordAndDefinition = () => {
    this.findWord(this.findDefinitions);
  };

  findWord = getDefinitions => {
    var self = this;
    http.getOneWord(this.state.urlParam).then(
      data => {
        this.setState({ word: data });
      },
      err => {}
    );
    getDefinitions();
    console.log("COMPLETED FIND WORD");
  };

  findDefinitions = () => {
    console.log("IN FIND DEFINITIONS");
    console.log(this.state.word.length);
    var self = this;

    if (this.state.word.length == 0) {
      console.log("IN FIND DEFINITIONS IFFFF");
      console.log("1");
      http.getDefinitionsForOneWord("1").then(
        data => {
          console.log("SET STATE FOR DEFINITIONS");
          console.log("def: " + data[0].text)
          this.setState({ definitions: data });
        },
        err => {}
      );
    }
  };

  render() {
    //! IMPORTANT TO KNOW... NEED A CONDITION IF WORD IS EMPTY @ START
    if (this.state.word.length == 0) {
      return <div></div>;
    } else {
      return (
        <Container className="p-3">
          {/* Word name and details */}
          <Row>
            <Word word={this.state.word} />
          </Row>
          <hr />

          {/* Definitions for this word */}
          <Row>
            <Definition def={this.state.def} />
          </Row>
          <Row>
            <Definition />
          </Row>
        </Container>
      );
    }
  }
}

export default WordList;
