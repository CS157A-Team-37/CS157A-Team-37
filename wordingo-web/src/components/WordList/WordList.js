import React from "react";
import { PropTypes } from "prop-types";
// Component imports
import Word from "./word";
import Definition from "./definition";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";

class WordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { WordAndDefinitions: [{}] };
  }

  render() {
    return (
      <Container className="p-3">
        {/* Word name and details */}
        <Row>
          <Word />
        </Row>
        <hr />
        {/* Definitions for this word */}
        <Row>
          <Definition />
        </Row>
        <Row>
          <Definition />
        </Row>
      </Container>
    );
  }
}

// Welcome.propTypes = {
//   text: PropTypes.string.isRequired
// };

export default WordList;
