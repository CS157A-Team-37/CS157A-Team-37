import React from "react";
import "./AddDefinition.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import HttpService from "../../services/http-service";
const http = new HttpService();


class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], 
                    words: [],
                    categories: [], 
                     definition: ''
                    };

    //Bind Functions
  }

  myChangeHandler = (event) => {

    this.setState({definition: event.target.value});

    console.log(this.state.definition);
  }


  addDefinition = () => {
    console.log(this.state.definition);
    var self = this;  
    console.log("word id:/" +this.props.match.params.wordid + "/");
    http.addDefinition({
      "text": this.state.definition,
      "numberOfUpvotes": '0',
      "numberOfDownvotes": '0',
      "wordID": this.props.match.params.wordid,
      "userID": '1'
    }).then(
      data => {

     
        this.props.history.push(`/word-definition/` + this.props.match.params.wordName)
      },
      err => {},
      
    );
    
  };

  render() {
    const firstUser = this.state.users[0];

    return (
      <Container>
      <div className="lander">
    <h1>Add Definition</h1>
  </div>
      <Form>
        <Form.Group>
          <Form.Control type="def" placeholder="Enter your definition" onChange={this.myChangeHandler}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      
        <button name="data" type="button" onClick={this.addDefinition}>Submit</button>
      </Form>
    </Container>
    );
  }
}
export default AddWord
