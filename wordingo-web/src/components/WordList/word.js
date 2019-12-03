import React from "react";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Word extends React.Component {
  render() {
    const cardStyling = {
      width: "100%",
      height: "12rem",
      marginBottom: "2rem",
      bg: "primary"
    };

    const wordNameStyling = {
      fontSize: "5rem"
    };

    return (
      <>
        <Card bg="info" text="white" style={cardStyling}>
          <Card.Body>
            <Card.Title style={wordNameStyling}>Word Name</Card.Title>
            <Row>
              <Col>
                <Card.Text>Wurd-Naym</Card.Text>
              </Col>
              <Col>
                <Card.Text>Word•Name</Card.Text>
              </Col>
              <Col xs={6}></Col>
            </Row>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Word;
