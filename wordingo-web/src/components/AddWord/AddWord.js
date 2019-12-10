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
                    word: [{'id':'11',name:''}],
                    categories: [], 
                     wordName: '',
                     syllables: '',
                     phoneticSpelling: '',
                    };

    //Bind Functions
  }

  myChangeHandler = (event) => {

    this.setState({wordName: event.target.value});


  }
  myChangeHandlerSyl = (event) => {

    this.setState({syllables: event.target.value});

  }

  myChangeHandlerPhon = (event) => {
    this.setState({phoneticSpelling: event.target.value});

  }

   addWords = () => {
  
    var self = this;

    http.addWords({
      "name": this.state.wordName,
      "syllables": this.state.syllables,
      "phoneticSpelling": this.state.phoneticSpelling
      
    }).then(
      data => {
        
        this.setState({ word: data });
        this.id = data.id;
        console.log("heretest:" +this.id);
        http.addCategory({
          "name": "nameof",
          "wordID": data.id
        })
      },
      err => {}
    ).then(
      
      
    );
    this.props.history.push(`/word-definition/` + this.state.wordName)
  };



  findWord = () => {
    var self = this;
    console.log("YEAH");
    http.getOneWord("second").then(
      data => {
        this.setState({ word: data });
        
        
      }
    );
   
    
  };
  
  addCategory = () => {
    console.log(this.props.match.params.catname);
    var self = this;
    http.addCategory({
      "name": "name",
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
        <button name="data" type="button" onClick={this.addWords}>Submit</button>
      </Form>
    </Container>
    );
  }
}
//<button onClick={this.addWords, this.addCategory}>Submit</button>
export default AddWord
