import React from "react";

class AccountPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user:{}
        };

        // Bind Functions
    }


    render() {
        return(
            <Greeting/>
        );
    }
}