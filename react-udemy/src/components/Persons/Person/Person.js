import React, { Component } from 'react'; 
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';

class Person extends Component {

  componentDidMount () {
    console.log('[Person.js] Inside componentDidMount()' );
    if(this.props.position === 0 ){
      this.inputElement.focus();
    }
  }

  render (){
    return (
      <WithClass className={classes.Person}>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated!</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </WithClass>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func 
};

export default Person;