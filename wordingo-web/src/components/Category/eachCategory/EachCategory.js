import React, { Component } from "react";
import '../eachCategory/EachCategory.css';

class EachCategory extends Component {
    render() {
        return (
            <div class="card eachCategory">
                <img class="card-img-top" src={this.props.imgUrl} alt="eachCategory" class="center"></img>
                <div class="card-body">
                <a href= {"singleCategory/" + this.props.name} className="btn btn-primary btn-block"> {this.props.name}</a>
                </div>
            </div>
        );
    }
}

export default EachCategory;

