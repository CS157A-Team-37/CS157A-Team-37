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
    console.log("WORD CONSTRUCTOR");

    // this.wordList = this.wordList.bind(this);
  }

  componentDidMount() {
    console.log("WORD MOUNTED");
  }

  componentDidUpdate() {
    console.log("WORD UPDATED");
  }

  // wordList = () => {
  //   //map goes through every element in an array and does something(takes in callback)
  //   const list = this.props.word.map(word => (
  //     //the key has to be here on the outermost level
  //     <div className="col-sm-4" key={word._id}>
  //       <h1>{word.name}</h1>
  //     </div>
  //   ));

  //   return list;
  // };

  render() {
    console.log("WORD RENDER");
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

    if (this.props.word.length != 0) {
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
    } else {
      return <>{/* <h1>No Word Found</h1> */}</>;
    }
  }
}

export default Word;
