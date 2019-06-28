import ReactDOM from 'react-dom';
import React from 'react';
import StudyBuddy from './components/studyBuddy.jsx';
import StudyBuddyWithSubject from './components/studyBuddyWithSubject.jsx';
import FindTutor from './components/findTutor.jsx';

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
        <div>
          I want to...
          <br /><br />
          <button onClick={this.handleStudyBuddyClick}>
            Find a Study Buddy
          </button> <br />
          <button onClick={this.handleStudyBuddyWithSubjectClick}>
            Find a Study Buddy for a specific subject
          </button> <br />
          <button onClick={this.handleFindTutorClick}>
            Find a tutor
          </button>
        </div>
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