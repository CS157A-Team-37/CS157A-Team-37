import React from "react";
import "./category.css";
import EachCategory from '../Category/eachCategory/EachCategory';

import EachCategory2 from '../Category/eachCategory/EachCategory2';

import Wordlist from "../WordList/WordList";

//import service
import HttpService from "../../services/http-service";
const http = new HttpService();
class singleCategory extends React.Component{
  constructor(props) {
    super(props);
    this.state = { users: [], 
                    words: [],
                    categories: [],
                    wordID: [],
                    wordNames: [],
      catName: this.props.match.params};

    //Bind Functions
    this.getUsers = this.getUsers.bind(this);
    this.userList = this.userList.bind(this);
  }

  componentDidMount() {
    console.log("a cookie in singlecategory: " + document.cookie + "/");
    console.log("MOUNTED");
    console.log(this.props);
    this.getUsers();
    this.getWords();
    this.getCategories();
    this.findCategories();
  }

  dispAddWord =() =>  {
    console.log("document cookie: " + document.cookie);
    if(document.cookie != "" && document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1")!= "" )
      {
          return  <a href= {"/AddWord/" + this.props.match.params.catname} className="btn btn-secondary"> Add Word</a>
     
      }
      else
      return ;
    
  }
  dispDeleteCategory =() =>  {
    console.log("document cookie: " + document.cookie);
    if(document.cookie != "" && document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1")== "ADMIN" )
      {
          return    <a className="btn btn-secondary" onClick={this.deleteCategory}> Delete Category</a>
     
      }
      else
      return ;
    
  }

  deleteCategory = () => {
    var self = this;  
    http.deleteCategory({
      "name": this.props.match.params.catname
    }).then(
      data => {
        this.setState({ words: data });
        this.props.history.push(`/category`)
      },
      err => {}
    );
  };

  findCategories = () => {
    var self = this;
    http.getCategoryWordIDs(this.props.match.params.catname).then(
      data => {
        this.setState({ cats: data });
        var wordArr = [];
        for(var i = 0; i < data.length; i++)
        {
          this.state.wordID.push(data[i].wordID);
          console.log("word id in find categories: " + data[i].wordID);
          http.getOneWordById(data[i].wordID).then(
            data2 => {
          wordArr.push(data2[0].name); 
          this.setState({ wordNames: wordArr });
            }
          );
        
        }
        
    console.log("data name: " + data[0].name);
    console.log("cat name: " + this.state.cats[0].name);
      },
      err => {}
    );
    
    
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
    const list = this.state.wordNames.map(wordNames => (
        {wordNames}
    ));
    
    const rows = [];
    for (var i = 0; i < list.length; i++) 
            rows.push(this.state.wordsNames[i]);
    
    return rows;
  };


  render() {
    const firstUser = this.state.users[0];

    var rows = [];

for (var i = 0; i < this.state.wordNames.length; i++) {
    rows.push(<EachCategory2 className="col-xly-1" name={ this.state.wordNames[i]} 
    imgUrl="https://dynamicmedia.zuza.com/zz/m/original_/0/d/0df2dd8b-2a20-4a12-bfbe-8b6144760e9c/obsolete_cover___Gallery.jpg"/>
   );
}

return (<div className="category">
<div className="container Category-main">
    <div className="row">{rows}       </div>
    
        </div>
        {this.dispAddWord()}
        {this.dispDeleteCategory()}

       </div>);

  }
  
}

export default singleCategory;