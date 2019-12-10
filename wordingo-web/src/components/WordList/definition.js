import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HttpService from "../../services/http-service";
const http = new HttpService();

class Definition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { upvotes : this.props.def.numberOfUpvotes,
                   downvotes : this.props.def.numberOfDownvotes
                    };

    //Bind Functions
  }

  
  upvoteDefinition = () => {
    this.setState({upvotes : parseInt(this.state.upvotes) + 1});

    var updoots = parseInt(this.props.def.numberOfUpvotes) + 1;
    var self = this;  
    http.updateDefinition({
      "text": this.props.def.text,
      "numberOfUpvotes": updoots,
      "numberOfDownvotes": this.props.def.numberOfDownvotes
    }).then(
      data => {
        this.setState({ words: data });
      },
      err => {}
    );
  };

  downvoteDefinition = () => {
    this.setState({downvotes : parseInt(this.state.downvotes) + 1});
    var downdoots = parseInt(this.props.def.numberOfDownvotes) + 1;
    var self = this;  
    http.updateDefinition({
      "text": this.props.def.text,
      "numberOfUpvotes": this.props.def.numberOfUpvotes,
      "numberOfDownvotes": downdoots
    }).then(
      data => {
        this.setState({ words: data });
      },
      err => {}
    );
  };

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
            <Card.Title>
               {this.props.def.text}
            </Card.Title>
            {/* User Info and Date */}
            <Row style={rowStyling}>
              <Col>
                <Card.Text>by Coolguy24, Posted: {this.props.def.createdAt.substring(0, 10)}</Card.Text>
              </Col>
              <Col xs={6}></Col>
            </Row>

            {/* Likes and Dislikes */}
            <Row>
              <Col xs={4}>
                <Card.Text>Likes: {this.state.upvotes}</Card.Text>
              </Col>
              <Col xs={4}>
                <Card.Text>Dislikes: {this.state.downvotes}</Card.Text>
                <a onClick={this.upvoteDefinition} className="btn btn-secondary"> Like</a>
                <a onClick={this.downvoteDefinition}  className="btn btn-secondary"> Dislike</a>     
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
