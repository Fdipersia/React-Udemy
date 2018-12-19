import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28 },
      {name: 'Manu', age: 29 },
      {name: 'Steph', age: 30 }
    ],
    otherState: "some other value"
  }

  switchNameHandler = (name) => {
    this.setState({
      persons:[
        {name: name, age: 28 },
        {name: 'Manu', age: 29 },
        {name: 'Stephanie', age: 30 }
      ] })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: "Max", age: 28 },
        {name: event.target.value, age: 29 },
        {name: 'Stephanie', age: 30 }
      ] 
    })
  }

  render() {
    const style = { 
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer"
  };

    return (
      <div className="App">
        <h1>Hello from React</h1>
        <p>Whoa it is working!</p>
        <button
            style={style} 
            onClick={() => this.switchNameHandler("Maximilian")}>Switch Name</button>
        <Person name={this.state.persons[0].name}
         age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
         age={this.state.persons[1].age} 
         click={this.switchNameHandler.bind(this, "Maximus")} changed={this.nameChangedHandler} />
        <Person name={this.state.persons[2].name}
         age={this.state.persons[2].age}>
        I like casino </Person>  
      </div>
    );
  }
}

export default App;
