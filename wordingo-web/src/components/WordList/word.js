import React from "react";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Word extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.word);

    const cardStyling = {
      width: "100%",
      height: "12rem",
      marginBottom: "2rem",
      bg: "primary"
    };

    const wordNameStyling = {
      fontSize: "5rem"
    };

    console.log("PROPS.WORD IS NOT NULL");
    console.log(this.props.word[0].name);
    return (
      <>
        <Card bg="info" text="white" style={cardStyling}>
          <Card.Body>
            <Card.Title style={wordNameStyling}>
              {this.props.word[0].name}
            </Card.Title>
            <Row>
              <Col>
                <Card.Text>{this.props.word[0].phoneticSpelling}</Card.Text>
              </Col>
              <Col>
                <Card.Text>{this.props.word[0].syllables}</Card.Text>
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
