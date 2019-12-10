import React from "react";
import "./home.css";
import Wordlist from "../WordList/WordList";

//import service
import HttpService from "../../services/http-service";
const http = new HttpService();

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], 
                    word: [{name: ""}],
                  cats: [{name: ""}],
                wordID: []}

    //Bind Functions
    this.getUsers = this.getUsers.bind(this);
    this.userList = this.userList.bind(this);
  }

  componentDidMount() {
    console.log("MOUNTED");
    this.findCategories();

    console.log("a cookie in home: " + document.cookie);
  }

  findWord = () => {
    var self = this;
    http.getOneWord("second").then(
      data => {
        this.setState({ word: data });
        
    console.log(data);
      },
      err => {}
    );
    console.log("COMPLETED FIND WORD");
    
  };
  findCategories = () => {
    var self = this;
    console.log("test");
    http.getCategoryWordIDs("cat1").then(
      data => {
        this.setState({ cats: data });
        for(var i = 0; i < data.length; i++)
        {
          console.log("Yeah:" + data[i].wordID);
          this.state.wordID.push(data[i].wordID);
          console.log("Yeah:" + this.state.wordID[i]);
        }
    console.log("data: " + data);
      },
      err => {}
    );
    console.log("COMPLETED FIND WORD");
    
  };

  getUsers = () => {
    var self = this;
    http.getUsers().then(
      data => {
        this.setState({ users: data });
      },
      err => {}
    );
  };
  userList = () => {
    //map goes through every element in an array and does something(takes in callback)
    const list = this.state.users.map(user => (
      //the key has to be here on the outermost level
      <div className="col-sm-4" key={user._id}>
        <h1>{user.username}</h1>
      </div>
    ));

    return list;
  };
  render() {
    const firstUser = this.state.users[0];

    return (
      <div className="Home">
        <div className="lander">
          <h1>Wordingo Home </h1>
   
               <div className="row">Now Logged in as {
               document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1")}</div>

          <p></p>
        </div>
      </div>
    );
  }
}

export default Home;
