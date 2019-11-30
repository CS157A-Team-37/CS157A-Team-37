import React, { Component } from "react";
import '../eachCategory/EachCategory.css';

class EachCategory extends Component {
    render() {
        return (
            <div className="card eachCategory">
                <img className="card-img-top" src={this.props.imgUrl} alt="eachCategory"></img>
                <div className="card-block">
                    <a href="#" className="btn btn-primary"> {this.props.name}</a>
                </div>
            </div>
        );
    }
}

export default EachCategory;
