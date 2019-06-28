import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  color: black;
  margin: 1em;
  font-size: 0.7em;
  font-weight: 300;
  padding: 0.25em 1em;
  border: 1.3px solid black;
  border-radius: 2px;
  align: center;
`;

const HomeButton = (props) => {
  return (
    <Button onClick={props.handleHomePageButtonClick}>
      Return to Homepage
    </Button>
  )
}

export default HomeButton;