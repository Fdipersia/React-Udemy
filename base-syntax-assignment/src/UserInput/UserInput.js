import React from 'react';

const userInput = (props) => {
  return (
    <div className="UserInput">
      <input onChange={props.changed} id="inputForm" type="text" value={props.currentName} ></input> 
    </div>
  )
};

export default userInput;
