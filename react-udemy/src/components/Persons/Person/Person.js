import React, { Component } from 'react'; 
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
  render (){
    return (
      <WithClass className={classes.Person}>
        <p onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </WithClass>
    )
  }
}

export default Person;