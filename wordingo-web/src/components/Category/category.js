import React from "react";
import "./category.css";
import EachCategory from '../Category/eachCategory/EachCategory';
import Wordlist from "../WordList/WordList";

//import service
import HttpService from "../../services/http-service";
const http = new HttpService();

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], 
                    words: [],
                    categories: [] };

    //Bind Functions
    this.getUsers = this.getUsers.bind(this);
    this.userList = this.userList.bind(this);
  }

  componentDidMount() {
    console.log("MOUNTED");
    this.getCategories();
  }

  getUsers = () => {
    var self = this;
    http.getUsers().then(
      data => {
        this.setState({ users: data });
      },
      err => {}
    );
  };

  getWords = () => {
    var self = this;
    http.getWords().then(
      data => {
        this.setState({ words: data });
      },
      err => {}
    );
  };

  getCategories = () => {
    var self = this;
    http.getCategories().then(
      data => {
        this.setState({ categories: data });
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


  wordList = () => {
    //map goes through every element in an array and does something(takes in callback)
    const list = this.state.words.map(word => (
      //the key has to be here on the outermost level
      <div className="col-sm-4" key={word._id}>
        <h1>{word.name}</h1>
      </div>
    ));

    return list;
  };

  categoryList = () => {
    //map goes through every element in an array and does something(takes in callback)
    const list = this.state.categories.map(category => (
      //the key has to be here on the outermost level
        {category}
    ));
    const rows = [];
    for (var i = 0; i < list.length; i++) {
            rows.push(this.state.categories[i].name);
    }

    return rows;
  };


  render() {
    const firstUser = this.state.users[0];
    var rows = [];
for (var i = 0; i < this.categoryList().length; i++) {
    rows.push(<EachCategory className="col-xly-1" name={this.categoryList()[i]} 
    imgUrl="https://dynamicmedia.zuza.com/zz/m/original_/0/d/0df2dd8b-2a20-4a12-bfbe-8b6144760e9c/obsolete_cover___Gallery.jpg"/>
   );


}
return (<div className="category">
<div className="container Category-main">
    <div className="row">{rows}       </div>
 </div>
      </div>);
  }
  
}

export default Home;