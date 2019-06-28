import React from'react';
import HomeButton from './homeButton.jsx';

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
          Choose a Subject
          <br /><br />
          <button>
            Math
          </button> <br />
          <button>
            Science
          </button> <br />
          <button>
            Reading/Writing
          </button><br />
          <button>
            Foreign Language
          </button> <br />
          <button>
            History
          </button> <br />
          <button>
            Other
          </button>

          <br /><br />
        <HomeButton handleHomePageButtonClick={this.props.handleHomePageButtonClick}/>
        </div>
      )
    }
  }
}

export default StudyBuddyWithSubject;