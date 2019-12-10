import React, { Component } from "react";
import "../Alphabetical/alphabetNav.css";

class AlphabetNav extends Component {
  constructor(props) {
    super(props);

    //Bind Functions
    this.list = this.list.bind(this);
  }
  list = () => {
    let alphArray = [
      "All",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "G",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];

      const letterStyling = {
      backgroundColor: "white",
      padding: "10px 20px",
      textAlign: "enter",
      fontSize:"1.5rem",
      textDecoration: "",
      display: "inline-block",
      boxShadow: "0px 0px 3px 2px rgba(255,185,121,0.99)"
    }


    const list = alphArray.map(letter => (
      <a class="nav-link active" href={"/alphabetical/" + letter} style={letterStyling}>
        {letter}
      </a>
    ));

    return list;
  };

  render() {

    const navStyling = {
      backgroundColor: "white",
      color: "black",
      padding: "10px 20px",
      margin: "auto"
    }

    return (
      <div className="container-fluid" style={{marginRight:"2rem"}}>
        <nav class="nav justify-content-center" style={navStyling}>{this.list()}</nav>
      </div>

      // <nav className="navbar navbar-expand-lg navbar-light"  >
      //     <div className="collapse navbar-collapse" id="navbarNav" >
      //         <ul className="navbar-nav">
      //             <li className="nav-item active">
      //                 <a className="nav-link" href="#">All <span class="sr-only">(current)</span></a>
      //             </li>
      //             <li className="nav-item">
      //                 <a className="nav-link" href="#">A</a>
      //             </li>

      //         </ul>
      //     </div>
      // </nav>
    );
  }
}

export default AlphabetNav;
