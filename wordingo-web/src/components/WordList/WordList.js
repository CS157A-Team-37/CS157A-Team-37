import React from "react";
import { PropTypes } from "prop-types";
// Component imports
import Word from "./word";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";

class WordList extends React.Component {
  render() {
    return (
      <Container className="p-3">
        <Row>
          <Word />
        </Row>
        <Row>
          <Word />
        </Row>
      </Container>
    );
  }
}

// Welcome.propTypes = {
//   text: PropTypes.string.isRequired
// };

export default WordList;
