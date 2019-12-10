import React from "react";
import { slide as Menu } from "react-burger-menu";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


class navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: ''}

  }
  myChangeHandler = (event) => {
    this.setState({searchTerm: event.target.value});
  }
  render() {

    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Wordingo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/alphabetical">Alphabetical</Nav.Link>
          <Nav.Link href="/Category">Categories</Nav.Link>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.myChangeHandler}/>
          <Button variant="outline-success" href= {"/word-definition/" +  this.state.searchTerm} >Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default navbar;