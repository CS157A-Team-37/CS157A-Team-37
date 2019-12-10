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
                     categoryName: ''
                    };

    //Bind Functions
  }

  myChangeHandler = (event) => {

    this.setState({categoryName: event.target.value});

  }

  addCategory = () => {
    console.log(this.state.definition);
    var self = this;  
    http.addCategory({
      "name": this.state.categoryName,
      "wordID": '1'
 }).then(
      data => {     
      this.props.history.push(`/category`)
      },
      err => {},
      
    );
    
  };

  render() {
    const firstUser = this.state.users[0];

    return (
      <Container>
      <div className="lander">
    <h1>Add Category</h1>
  </div>
      <Form>
        <Form.Group>
          <Form.Control type="def" placeholder="Enter category name" onChange={this.myChangeHandler}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      
        <button name="data" type="button" onClick={this.addCategory}>Submit</button>
      </Form>
    </Container>
    );
  }
}
export default AddWord
