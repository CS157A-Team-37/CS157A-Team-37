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

  logout = () => {
    console.log("here");
    document.cookie = '';

    document.cookie = "username= ; id=; expires = Thu, 01 Jan 1970 00:00:00 GMT;path=/word-definition"        
    document.cookie = "username= ; id=; expires = Thu, 01 Jan 1970 00:00:00 GMT;path=/"        

    console.log(document.cookie);
    window.location.reload(false); 

  }

  dispLogout =() =>  {
    console.log("document cookie: " + document.cookie);
    if(document.cookie != "" && document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1")!= "" )
      {
          return <Nav.Link onClick={this.logout}>Logout</Nav.Link>;
          
      }
      else
      return <Nav.Link href="/login">Login</Nav.Link>;
    
  }

  render() {

    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Wordingo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
          <Nav.Link href="/alphabetical/All">Alphabetical</Nav.Link>
          <Nav.Link href="/Category">Categories</Nav.Link>
          {this.dispLogout()}
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