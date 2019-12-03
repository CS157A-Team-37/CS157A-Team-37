import React, { Component } from "react";
import '../eachCategory/EachCategory.css';

class EachCategory2 extends Component {
    componentDidMount () {
      }

    render() {
        
        return (

            <div class="card eachCategory">
                <div class="card-body">
                    <a href= {"/word-definition/" + this.props.name} className="btn btn-primary btn-block"> {this.props.name}</a>
                </div>
            </div>
        );
    }
}

export default EachCategory2;

