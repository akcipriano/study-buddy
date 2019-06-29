import ReactDOM from 'react-dom';
import React from 'react';
import styled from 'styled-components'
import StudyBuddy from './components/studyBuddy.jsx';
import StudyBuddyWithSubject from './components/studyBuddyWithSubject.jsx';
import FindTutor from './components/findTutor.jsx';

const Main = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400&display=swap');
  font-family: 'Raleway', sans-serif;
  font-size: 1.8em;
  font-weight: 400;
  margin: 50px 125px;
  align: center;
`;

const Button = styled.button`
  color: black;
  margin: 1em;
  font-size: .5em;
  font-weight: 300;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 2px;
  align: center;
`;

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'homepage'
    }
    this.handleStudyBuddyClick = this.handleStudyBuddyClick.bind(this);
    this.handleStudyBuddyWithSubjectClick = this.handleStudyBuddyWithSubjectClick.bind(this);
    this.handleFindTutorClick = this.handleFindTutorClick.bind(this);
    this.handleHomePageButtonClick = this.handleHomePageButtonClick.bind(this);
  }

  handleStudyBuddyClick() {
    this.setState({ currentPage: 'studyBuddy'});
  }

  handleStudyBuddyWithSubjectClick() {
    this.setState({ currentPage: 'studyBuddyWithSubject'});
  }

  handleFindTutorClick() {
    this.setState({ currentPage: 'findTutor'});
  }

  handleHomePageButtonClick() {
    this.setState({ currentPage: 'homepage'});
  }

  render() {
    if (this.state.currentPage === 'homepage') {
      return (
        <Main>
          I want to...
          <br /><br />
          <Button onClick={this.handleStudyBuddyClick}>
            Find a Study Buddy
          </Button> <br />
          <Button onClick={this.handleStudyBuddyWithSubjectClick}>
            Find a Study Buddy (specific topic)
          </Button> <br />
          <Button onClick={this.handleFindTutorClick}>
            Find a Tutor
          </Button>
        </Main>
      )
    }

    if (this.state.currentPage === 'studyBuddy') {
      return (
        <StudyBuddy handleHomePageButtonClick={this.handleHomePageButtonClick}/>
      )
    }

    if (this.state.currentPage === 'studyBuddyWithSubject') {
      return (
        <StudyBuddyWithSubject handleHomePageButtonClick={this.handleHomePageButtonClick}/>
      )
    }

    if (this.state.currentPage === 'findTutor') {
      return (
        <FindTutor handleHomePageButtonClick={this.handleHomePageButtonClick}/>
      )
    }
  }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));