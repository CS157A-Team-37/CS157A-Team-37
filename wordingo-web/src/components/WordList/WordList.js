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
    this.findDefinitions = this.findDefinitions.bind(this);
    this.setWordAndDefinition = this.setWordAndDefinition.bind(this);
  }

  componentDidMount() {
    console.log("a cookie in wordlist: " + document.cookie);
    this.findDefinitions(0);
  }

  componentDidUpdate() {}

  setWordAndDefinition = () => {
    this.findWord(this.findDefinitions);
  };

  dispAddDefinition =() =>  {
    console.log("document cookie: " + document.cookie);
    if(document.cookie != "" && document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1")!= "" )
      {
          return <a href = {"/AddDefinition/" + this.state.word[0].id + "/" + this.state.word[0].name} a className="btn btn-secondary"> Add Definition</a>
       
      }
      else
      return ;
    
  }

  findDefinitions = (count) => {
    console.log("IN FIND DEFINITIONS");

    var self = this;
    http.getOneWord(this.state.urlParam).then(
      data => {
        if(data[0] != null)
        {
        this.setState({ word: data });
        console.log("word id for this word:" + this.state.word[0].id);
        if (this.state.word.length == 1) {
          console.log("IN FIND DEFINITIONS IFFFF");
          http.getDefinitionsForOneWord(this.state.word[0].id).then(
            data2 => {
              console.log("SET STATE FOR DEFINITIONS");
              if(data2.length > 0)
                console.log("def: " + data2[0].text)
              this.setState({ definitions: data2 });
            },
            err => {}
          );
        }
      }
      else
      {
        if(count < 100)
           this.findDefinitions(count + 1);
      }
      },
      err => {}
    )
    console.log("COMPLETED FIND WORD");

  };

  render() {
    //! IMPORTANT TO KNOW... NEED A CONDITION IF WORD IS EMPTY @ START
    if (this.state.word.length == 0) {
      return <div></div>;
    } else {
      var rows = [];
      for (var i = 0; i < this.state.definitions.length; i++) {
          rows.push(<Row>
            <Definition def={this.state.definitions[i]} />
          </Row>);      
      }
      return (
        <Container className="p-3">
          {/* Word name and details */}
          <Row>
            <Word word={this.state.word} />
          </Row>
          <hr />

          {/* Definitions for this word */}
          {rows}

         {this.dispAddDefinition()}</Container>
      );
    }
  }
}

export default WordList;
