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

        
    }
    



    render() {
        return (
            <div className="row">
            {this.list()}
            </div>
        );
    }
}

export default Wordlist;