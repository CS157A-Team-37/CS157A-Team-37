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

   shoot() {
    alert("Great Shot!");
  }
  myChangeHandler = (event) => {

    this.setState({definition: event.target.value});

    console.log(this.state.definition);
  }


  addDefinition = () => {
    console.log(this.state.definition);
    var self = this;
    http.addDefinition({
      "text": this.state.definition,
      "numberOfUpvotes": '0',
      "numberOfDownvotes": '0',
      "wordID": '1',
      "userID": '1'
    }).then(
      data => {
        this.setState({ words: data });
      },
      err => {}
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
        <button onClick={this.addDefinition}>Submit</button>
   
      </Form>
    </Container>
    );
  }
}
export default AddWord
