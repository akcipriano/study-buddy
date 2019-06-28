import React from'react';
import styled from 'styled-components'
import HomeButton from './homeButton.jsx';

const Main = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400&display=swap');
  font-family: 'Raleway', sans-serif;
  font-size: 1.6em;
  font-weight: 400;
  margin: 50px 125px;
  align: center;
`;

const Button = styled.button`
  color: black;
  margin: 1em;
  font-size: 1em;
  font-weight: 300;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 2px;
  align: center;
`;

class StudyBuddyWithSubject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'mainpage'
    }
  }

  render() {
    if (this.state.currentPage === 'mainpage') {
      return (
        <div>
          <HomeButton handleHomePageButtonClick={this.props.handleHomePageButtonClick} />
          <Main>
            <strong>Choose a Subject:</strong>
            <br /><br />
            <Button>
              Math
            </Button>
            <Button>
              Science
            </Button>
            <Button>
              Reading/Writing
            </Button> <br />
            <Button>
              Foreign Language
            </Button>
            <Button>
              History
            </Button>
            <Button>
              Other
            </Button>
          </Main>
        </div>
      )
    }
  }
}

export default StudyBuddyWithSubject;