import React from "react";
import "./login.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import HttpService from "../../services/http-service";
const http = new HttpService();

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  myChangeHandlerUserName = event => {
    this.setState({ username: event.target.value });
  };

  myChangeHandlerPassword = event => {
    this.setState({ password: event.target.value });
  };
  checkCredentials = () => {
    var self = this;
    console.log("username: " + this.state.username);
    http.getOneUser(this.state.username).then(
      data => {
        if (data.length > 0) {
          if (data[0].password == this.state.password) {
            console.log("data username: " + data[0].username);
            document.cookie =
              "username= " +
              data[0].username +
              "; id=" +
              data[0].id +
              "; expires = Thu, 01 Jan 2022 00:00:00 GMT";

            this.props.history.push(`/`);
            window.location.reload(false);
          } else alert("Incorrect Password");
        }
      },
      err => {}
    );
  };

  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.myChangeHandlerUserName}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.myChangeHandlerPassword}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <button
            name="data"
            type="button"
            className="btn btn-primary btn-space"
            onClick={this.checkCredentials}
          >
            Submit
          </button>
          <Button href={"/AddUser"} className="btn btn-secondary btn-space">
            Sign Up
          </Button>
        </Form>
      </Container>
    );
  }
}
//<button onClick={this.addWords, this.addCategory}>Submit</button>
export default login;
