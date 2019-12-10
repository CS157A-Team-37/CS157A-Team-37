import React from "react";
import "./AddUser.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import HttpService from "../../services/http-service";
const http = new HttpService();


class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                    user: [{'id':'11'}],
                     userName: '',
                     email: '',
                     password: '',

                    };

    //Bind Functions
  }

  myChangeHandlerName = (event) => {

    this.setState({userName: event.target.value});


  }
  myChangeHandlerEmail = (event) => {

    this.setState({email: event.target.value});

  }

  myChangeHandlerPassword = (event) => {
    this.setState({password: event.target.value});

  }

   addUsers = () => {
  
    var self = this;

    http.addUsers({
      "username": this.state.userName,
      "email": this.state.email,
      "password": this.state.password
      
    }).then(
      data => {
        
        this.setState({ user: data });
        this.id = data.id;
        console.log("User's id"+this.id);
      },
      err => {}
    );

  };

  
  render() {
    return (
      <Container>
      <div className="lander">
    <h1>Sign Up</h1>
  </div>
      <Form>
        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control type="userName" placeholder="Enter user name"  onChange={this.myChangeHandlerName}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" aria-describedby="emailHelp" onChange={this.myChangeHandlerEmail}/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" onChange={this.myChangeHandlerPassword} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <a href= {"/login"} name="data" type="button" onClick={this.addUsers} className="btn btn-secondary"> Sign Up </a>
      </Form>
    </Container>
    );
  }
}

export default AddUser
