import React from 'react';

const userInput = (props) => {
  return (
    <div className="UserInput">
      <input onChange={props.changed} type="text" placeholder="What's your name?" ></input> 
    </div>
  )
};

export default userInput;
