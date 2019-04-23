import React, { Component } from 'react';
import './App.css';

class Card extends Component {

    render() {
        return (
        <div className="imageDiv">
          < img alt="" src="https://i.ytimg.com/vi/KynOk8t-stE/maxresdefault.jpg"></img>
        
          <p>This is your rap name {this.props.theCurrentRandomName} </p>
         </div>
        )
    }

}
export default Card;