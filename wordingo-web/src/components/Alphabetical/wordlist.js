import React, { Component } from "react";
import '../Alphabetical/wordlist.css';

class Wordlist extends Component {

    constructor(props) {
        super(props);
        this.state = { letterClicked: "C" };
    
        //Bind Functions
        this.list = this.list.bind(this);
      }

    list = () => {

        let listToMap = [...this.props.allwords];
        console.log(listToMap)

        if(this.state.letterClicked != ""){
            
            listToMap = this.props.allwords.filter(word => {
                return word.name[0]===this.state.letterClicked;
            });
            console.log(listToMap);
        }

        const list = listToMap.map(word => (
        //the key has to be here on the outermost level
            <div className="col-sm-4" key={word._id}>
            <h1>{word.name}</h1>
            </div>
        ));

        return list;





        // if(this.state.letterClicked=="All"){
        //     const list = this.props.allwords.map(word => (
        //         //the key has to be here on the outermost level
        //         <div className="col-sm-4" key={word._id}>
        //           <h1>{word.name}</h1>
        //         </div>
        //       ));
        //     return list;
        // }
        // else if(this.state.letterClicked){
            
        //     console.log("GOT INTO ELSE IF");
        //     console.log(this.state.letterClicked)

        //     //   let list = this.props.allwords.filter(function (word) {
        //     //     return word[0]===this.state.letterClicked;
        //     //   });

        //     let newList = this.props.allwords.filter(word => {
        //         console.log(word.name[0] + "->" + this.state.letterClicked);
        //         if(word[0] == this.state.letterClicked){
        //             console.log("MATCHES");
        //             return word[0] == this.state.letterClicked;
        //         }
        //         else{
        //             console.log("NOT THE SAME");
        //         }
                
        //     });
        //     console.log(newList);
        //     newList.map(word => (
        //         //the key has to be here on the outermost level
        //         <div className="col-sm-4" key={word._id}>
        //             <h1>{word.name}</h1>
        //         </div>
        //     ));

        //       return newList;

        

        // }
        
    }
    // wordList = () => {
    //     //map goes through every element in an array and does something(takes in callback)
    //     const list = this.props.allwords.map(word => (
    //       //the key has to be here on the outermost level
    //       <div className="col-sm-4" key={word._id}>
    //         <h1>{word.name}</h1>
    //       </div>
    //     ));

    //     return list;
    // }
    // letterList = () => {
    //     //map goes through every element in an array and does something(takes in callback)
    //     const filteredList = //filtered list (allwords.filter(...based on..))
    //     filteredList.map(word => (
    //       //the key has to be here on the outermost level
    //       <div className="col-sm-4" key={word._id}>
    //         <h1>{word.name}</h1>
    //       </div>
    //     ));

    //     return list;
    // }



    render() {
        return (
            <div className="row">
            {this.list()}
            </div>
        );
    }
}

export default Wordlist;