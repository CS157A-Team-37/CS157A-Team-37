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
                   downvotes : this.props.def.numberOfDownvotes,
                   username : ""
                    };

    //Bind Functions
  }

  dispUserFunctions =() =>  {
    console.log("document cookie in dispUserFunctions: " + document.cookie);
    if(document.cookie != "" && document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1")== this.state.username )
      {
          return <div> <a href= {"/EditDefinition/" + this.props.def.id} className="btn btn-secondary"> Edit</a>  <a onClick={this.deleteDefinition}   className="btn btn-secondary"> Delete</a> </div>   
      }
      else
      return ;
    
  }
  componentDidMount() {
    this.getUserId();
    console.log("document cookie in didmount: " + document.cookie);
    console.log("parsed cookie: " + document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1") )

    
  }
 
  deleteDefinition = () => {
    var self = this;  
    http.deleteDefinition({
      "text": this.props.def.text,
    }).then(
      data => {
        this.setState({ words: data });
        window.location.reload(false)
      },
      err => {}
    );
  };
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

  getUserId = () => {
    var self = this;
    http.getOneUserById(this.props.def.userID).then(
      data => {
        console.log("data: " + data.length)
        this.setState({username : data[0].username});
        }
      ,
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
                <Card.Text>by {this.state.username}, Posted: {this.props.def.createdAt.substring(0, 10)}</Card.Text>
              </Col>
              <Col xs={6}></Col>
            </Row>

            {/* Likes and Dislikes */}
            <Row>
              <Col xs={4}>
                <Card.Text>Likes: {this.state.upvotes}</Card.Text>
                <a onClick={this.upvoteDefinition} className="btn btn-secondary"> Like</a>
              </Col>
              <Col xs={4}>
                <Card.Text>Dislikes: {this.state.downvotes}</Card.Text>
                
                <a onClick={this.downvoteDefinition}  className="btn btn-secondary"> Dislike</a>    
                 
              </Col>
              <Col xs={2}></Col>
            </Row>
            <p></p>
            {this.dispUserFunctions()}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Definition;
