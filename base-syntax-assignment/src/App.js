import React, { Component } from 'react';
import './App.css';
import './UserOutput/UserOutput.css';
import './UserInput/UserInput.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
      name: "Francisco"
    }

  switchNameHandler = (name) => {
    this.setState({ name: name })
  }

  nameChangedHandler = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <button onClick={()=> this.switchNameHandler("Panchi")} >Switch name</button>
        <UserInput 
                  changed={this.nameChangedHandler}
                  currentName= {this.state.name}
        />
        <button onClick = {()=> this.switchNameHandler("Francisco")}>Reset</button>
        <UserOutput name={this.state.name}/>
        <UserOutput name={this.state.name}/>
        <UserOutput name={this.state.name}/>
      </div>
    );
  }
}

export default App;
