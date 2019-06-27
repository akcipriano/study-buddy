import ReactDOM from 'react-dom';
import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'homepage'
    }
  }

  render() {
    if (this.state.currentPage === 'homepage') {
      return (
        <div>
          I want to...
          <br /><br />
          <button onclick={this.handleClick}>
            Find a Study Buddy
          </button> <br />
          <button onClick={this.handleClick}>
            Find a Study Buddy for a specific subject
          </button> <br />
          <button onClick={this.handleClick}>
            Find a tutor
          </button>
        </div>
      )
    }
  }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));