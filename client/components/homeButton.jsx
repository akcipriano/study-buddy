import React from 'react';

const HomeButton = (props) => {
  return (
    <button onClick={props.handleHomePageButtonClick}>
      Return to Homepage
    </button>
  )
}

export default HomeButton;