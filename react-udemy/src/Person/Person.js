import React from 'react'; 
import classes from './Person.css';


const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I am {props.name} and my age is {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
// children is any element between the opening and closing tag of the component
  )
};

export default person;