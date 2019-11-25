import React from "react";
import { slide as Menu } from "react-burger-menu";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default props => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Wordingo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/alphabetical">Alphabetical</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="/category">Category1</NavDropdown.Item>
            <NavDropdown.Item href="/category">Category1</NavDropdown.Item>
            <NavDropdown.Item href="/category">Category1</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/test">Test</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
