import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import WithClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props){
    super(props);
    console.log("Hello from constructor", props)
  }

  state = {
    persons: [
    {id:"1", name: 'Max', age: 28 },
    {id:"2", name: 'Manu', age: 29 },
    {id:"3", name: 'Steph', age: 30 }
    ],
    otherState: "some other value",
    showPersons: false,
    authenticated: false
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    let persons = null;
    
    if (this.state.showPersons){
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    
    return (
      <WithClass classes={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider> 
      </WithClass>
    );
  }
}

export default App;
