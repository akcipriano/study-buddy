import React from'react';
import HomeButton from './homeButton.jsx';

class FindTutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div>
        Find Tutor
        <br /><br />
        <HomeButton handleHomePageButtonClick={this.props.handleHomePageButtonClick}/>
      </div>
    )
  }
}

export default FindTutor;