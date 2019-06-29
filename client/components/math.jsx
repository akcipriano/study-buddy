import React from'react';
import HomeButton from './homeButton.jsx';
import BackButton from './backButtonStudyBuddyWithSubject.jsx';

class Math extends React.Component {
  render() {
    return (
      <div>
        <HomeButton handleHomePageButtonClick={this.props.handleHomePageButtonClick} />
        <BackButton handleBackButtonClick={this.props.handleBackButtonClick}/>
        <br />
        Math
      </div>
    )
  }
}

export default Math;