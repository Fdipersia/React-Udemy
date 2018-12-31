import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = classes.Button;
    if(props.showPersons){
      btnClass = [classes.Button, classes.Red].join(' ');
    }

    if(props.persons.length <= 2){
      assignedClasses.push( classes.red );
    }
    if(props.persons.length <= 1){
      assignedClasses.push( classes.bold );
    }
  return (
    <Aux>
      <h1>Hello from React</h1>
      <p className={assignedClasses.join(' ')}>Whoa it is working!</p>
      <button
        className = {btnClass}
        onClick={props.clicked}>Toggle Persons</button>
      <button onClick={props.login}>Log in</button>
    </Aux>
    // NO NEED TO USE Aux anymore, you can use the same but without the word aux =>  > </> instead
  );
}

export default Cockpit;