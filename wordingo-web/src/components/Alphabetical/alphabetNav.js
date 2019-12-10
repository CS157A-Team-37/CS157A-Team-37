import React, { Component } from "react";
import "../Alphabetical/alphabetNav.css";


class AlphabetNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light"  >
                <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">All <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">A</a>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        );
    }
}

export default AlphabetNav;

