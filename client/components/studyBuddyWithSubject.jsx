import React from'react';
import styled from 'styled-components'
import HomeButton from './homeButton.jsx';
import Math from './math.jsx';

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
    this.handleMathClick = this.handleMathClick.bind(this);
    this.handleScienceClick = this.handleScienceClick.bind(this);
    this.handleReadingWritingClick = this.handleReadingWritingClick.bind(this);
    this.handleForeignLanguageClick = this.handleForeignLanguageClick.bind(this);
    this.handleHistoryClick = this.handleHistoryClick.bind(this);
    this.handleOtherClick = this.handleOtherClick.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  handleMathClick() {
    this.setState({ currentPage: 'math'});
  }

  handleScienceClick() {
    this.setState({ currentPage: 'science'});
  }

  handleReadingWritingClick() {
    this.setState({ currentPage: 'readingWriting'});
  }

  handleForeignLanguageClick() {
    this.setState({ currentPage: 'foreignLanguage'});
  }

  handleHistoryClick() {
    this.setState({ currentPage: 'history'});
  }

  handleOtherClick() {
    this.setState({ currentPage: 'other'});
  }

  handleBackButtonClick() {
    this.setState({ currentPage: 'mainpage'});
  }

  render() {
    if (this.state.currentPage === 'mainpage') {
      return (
        <div>
          <HomeButton handleHomePageButtonClick={this.props.handleHomePageButtonClick} />
          <Main>
            <strong>Choose a Subject:</strong>
            <br /><br />
            <Button onClick={this.handleMathClick}>
              Math
            </Button>
            <Button onClick={this.handleScienceClick}>
              Science
            </Button>
            <Button onClick={this.handleReadingWritingClick}>
              Reading/Writing
            </Button> <br />
            <Button onClick={this.handleForeignLanguageClick}>
              Foreign Language
            </Button>
            <Button onClick={this.handleHistoryClick}>
              History
            </Button>
            <Button onClick={this.handleOtherClick}>
              Other
            </Button>
          </Main>
        </div>
      )
    }

    if (this.state.currentPage === 'math') {
      return (
        <Math
          handleHomePageButtonClick={this.props.handleHomePageButtonClick}
          handleBackButtonClick={this.handleBackButtonClick}
        />
      )
    }

    if (this.state.currentPage === 'science') {
      return (
        <Science />
      )
    }

    if (this.state.currentPage === 'readingWriting') {
      return (
        <ReadingWriting />
      )
    }

    if (this.state.currentPage === 'foreignLanguage') {
      return (
        <ForeignLanguage />
      )
    }

    if (this.state.currentPage === 'history') {
      return (
        <History />
      )
    }

    if (this.state.currentPage === 'other') {
      return (
        <Other />
      )
    }
  }
}

export default StudyBuddyWithSubject;