import React, { Component } from 'react';
import Card from './Card.js';
class Input extends Component {
    constructor(props){
        super();

        this.state = {
            name:'',
            rapnames: ['Jcole','Jay Z','Kanye West'],
            currentName:'',
        }
    }
    setName= (event) => {
        this.setState({name: event.target.value});
        console.log(this.state.name);
    }
    pickRandomName = () => {
        let randomNumber = Math.floor( Math.random() * this.state.rapnames.length ); 
        this.setState({currentName:this.state.rapnames[randomNumber]});
      }
    render() {
        return (
            <div>
               <form>
                   <label>
                      <h1> Rap Name Generator</h1>
                      <p>What's your real name?</p>
                      
                      
                   </label>
                   <p>
                   <input type="text" name="name" onChange={this.setName} />
                   </p >
                   <button onClick={this.pickRandomName}>Create Rap Name</button>
               </form>
               <Card theCurrentRandomName={this.state.currentName} ></Card>
            </div>
        )
    }

}
export default Input;