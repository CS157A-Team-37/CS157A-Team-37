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
    this.findWord();

    //Bind Methods
    this.findWord = this.findWord.bind(this);
    this.findDefinitions = this.findDefinitions.bind(this);
  }

  findWord = () => {
    var self = this;
    const currentWord = { ...this.state.word };
    http.getOneWord(this.state.urlParam).then(
      data => {
        this.setState({ word: data });
      },
      err => {}
    );
  };

  findDefinitions = () => {};

  render() {
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
            <Definition />
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
