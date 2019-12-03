import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Definition extends React.Component {
  render() {
    const cardStyling = {
      width: "100%",
      marginBottom: "2rem",
      bg: "primary"
    };

    const rowStyling = {
      height: "5rem"
    };

    return (
      <>
        <Card bg="light" style={cardStyling}>
          <Card.Body>
            {/* Definition */}
            <Card.Title>
              Clipper ahoy bilged on her anchor Sink me Blimey quarterdeck
              gabion take a caulk spirits belaying pin. Hornswaggle wench strike
              colors holystone lee yawl piracy keelhaul gally Pieces of Eight.
              Bilge water bilge tackle scuttle hempen halter interloper doubloon
              maroon dead men tell no tales black jack. Sink me rum cackle fruit
              shrouds Shiver me timbers tender Plate Fleet galleon Brethren of
              the Coast swab.
            </Card.Title>
            {/* User Info and Date */}
            <Row style={rowStyling}>
              <Col>
                <Card.Text>by Coolguy24 December 20, 2017</Card.Text>
              </Col>
              <Col xs={6}></Col>
            </Row>

            {/* Likes and Dislikes */}
            <Row>
              <Col xs={4}>
                <Card.Text>Likes: 255</Card.Text>
              </Col>
              <Col xs={4}>
                <Card.Text>Dislikes: 65</Card.Text>
              </Col>
              <Col xs={2}></Col>
            </Row>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Definition;
