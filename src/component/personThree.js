import React, {Component} from "react";

export default class PersonThree extends Component {
    render(){
        const {name,age } = this.props;
        return (
            <div className="person">
                <h1>{name}</h1>
                <p>Your Age: {age}</p>
            </div> 
        )
    }
}