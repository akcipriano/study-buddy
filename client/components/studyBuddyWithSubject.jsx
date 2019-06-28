import React from'react';
import HomeButton from './homeButton.jsx';

class StudyBuddyWithSubject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div>
        Study Buddy With Subject
        <br /><br />
        <HomeButton handleHomePageButtonClick={this.props.handleHomePageButtonClick}/>
      </div>
    )
  }
}

export default StudyBuddyWithSubject;