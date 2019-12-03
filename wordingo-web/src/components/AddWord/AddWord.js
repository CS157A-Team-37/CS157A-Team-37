import React from "react";
import "./AddWord.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import HttpService from "../../services/http-service";
const http = new HttpService();


class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], 
                    word: {'id':'11'},
                    categories: [], 
                     wordName: '',
                     syllables: '',
                     phoneticSpelling: ''
                    };

    //Bind Functions
  }

   shoot() {
    alert("Great Shot!");
  }
  myChangeHandler = (event) => {

    this.setState({wordName: event.target.value});

    console.log(this.state.wordName);
  }
  myChangeHandlerSyl = (event) => {

    this.setState({syllables: event.target.value});
    console.log(this.state.syllables);
  }

  myChangeHandlerPhon = (event) => {
    this.setState({phoneticSpelling: event.target.value});
    console.log(this.state.phoneticSpelling);
  }

   addWords = () => {
    console.log(this.props.match.params.catname);
    var self = this;
    http.addWords({
      "name": this.state.wordName,
      "syllables": this.state.syllables,
      "phoneticSpelling": this.state.phoneticSpelling
    }).then(
      data => {
        this.setState({ word: data });
      },
      err => {}
    );
  };

  caller = () => {
    this.addWords();
  };
  
  addCategory = () => {
    console.log(this.props.match.params.catname);
    var self = this;
    http.addCategory({
      "name": this.props.match.params.catname,
      "wordID": this.state.word.id
    }).then(
      data => {
        this.setState({ word: data });
      },
      err => {}
    );
  };
  render() {
    const firstUser = this.state.users[0];

    return (
      <Container>
      <div className="lander">
    <h1>Add Word</h1>
  </div>
      <Form>
        <Form.Group>
          <Form.Label>Word Name</Form.Label>
          <Form.Control type="wordName" placeholder="Enter word name"  onChange={this.myChangeHandler}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Syllables</Form.Label>
          <Form.Control type="syllables" placeholder="Enter syllables spelling"  onChange={this.myChangeHandlerSyl}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phonetic Spelling</Form.Label>
          <Form.Control type="phoneticSpelling" placeholder="Enter phonetic spelling" onChange={this.myChangeHandlerPhon} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <button onClick={this.addWords, this.addCategory}>Submit</button>
        <button onClick={this.addCategory}>SubmitCat</button>
      </Form>
    </Container>
    );
  }
}
export default AddWord
