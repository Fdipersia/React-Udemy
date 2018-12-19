import React from 'react';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <h3>{props.name} sayed:</h3>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>
      <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"</p>
    </div>
  )
};

export default userOutput;
