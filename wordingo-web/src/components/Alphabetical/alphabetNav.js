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
    const list = alphArray.map(letter => (
      <a class="nav-link active" href="/alphabetical/:{letter}">
        {letter}
      </a>
    ));

    return list;
  };

  render() {
    return (
      <div className="container">
        <nav class="nav">{this.list()}</nav>
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
