import React from "react";
import "./EditDefinition.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import HttpService from "../../services/http-service";
const http = new HttpService();


class EditDefinition extends React.Component {
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
  editDefinition = () => {

    var self = this;  
    http.updateDefinitionText({
      "text": this.state.definition,
      "id": this.props.match.params.defId
    }).then(
      data => {
        this.setState({ words: data });
        //this.props.history.push(`/word-definition/` + this.props.match.params.wordName)
     
      },
      err => {}
    );
  };


  render() {
    const firstUser = this.state.users[0];

    return (
      <Container>
      <div className="lander">
    <h1>Edit Definition</h1>
  </div>
      <Form>
        <Form.Group>
          <Form.Control type="def" placeholder="Enter your definition" onChange={this.myChangeHandler}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      
        <button name="data" type="button" onClick={this.editDefinition}>Submit</button>
      </Form>
    </Container>
    );
  }
}
export default EditDefinition
