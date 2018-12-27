import React from 'react';

const validation = (props) => {
  return (
    <div>
      {
        props.textLength > 5 ? 
          <p>Text long enough</p> : 
          <p>Text too short</p>
      }
    </div>

  )
} 

export default validation;