import React from'react';
import styled from 'styled-components'
import HomeButton from './homeButton.jsx';

class FindTutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div>
        <HomeButton handleHomePageButtonClick={this.props.handleHomePageButtonClick}/>
        <br /><br />
        Find Tutor
      </div>
    )
  }
}

export default FindTutor;