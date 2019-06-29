import React from'react';
import styled from 'styled-components'
import MeetUps from './meetUps.jsx';
import HomeButton from './homeButton.jsx';

const Main = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400&display=swap');
  font-family: 'Raleway', sans-serif;
  font-size: 1.1em;
  font-weight: 400;
  margin: 50px 125px;
`;

const Posts = styled.div`
  font-size: 0.9em;
  font-weight: 300;
`;

const Submit = styled.input`
  color: black;
  font-size: 0.7em;
  font-weight: 300;
  padding: 0.25em 1em;
  border: 1.3px solid black;
  border-radius: 2px;
`;

class StudyBuddy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      place: '',
      address: '',
      city: '',
      state: '',
      date: '',
      timeFrom: '',
      timeTo: '',
      meetups: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/meetups', {
      method: 'GET'
    }).then(res => res.json())
    .then(response => {this.setState({ meetups: response.reverse()})})
    .catch(error => console.error('Error:', error))
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();

    fetch('http://localhost:3000/newmeet', {
      method: 'POST',
      body: JSON.stringify({
        message: this.state.message,
        place: this.state.place,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        date: this.state.date,
        timeFrom: this.state.timeFrom,
        timeTo: this.state.timeTo,
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(() => console.log('POST success!'))
    .catch(error => console.error('Error:', error))

    this.setState({
      message: '',
      place: '',
      address: '',
      city: '',
      state: '',
      date: '',
      timeFrom: '',
      timeTo: ''
    });

    this.componentDidMount();
  }

  render() {
    return(
      <div>
        <HomeButton handleHomePageButtonClick={this.props.handleHomePageButtonClick}/>
        <Main>
          <form onSubmit={this.handleSubmit}>
          <strong><u>Set up a meet:</u></strong>
          <br /><br />
            <label>
              <textarea rows="4" cols="40" name="message" type="text" placeholder="Optional Message" value={this.state.message} onChange={this.handleInputChange}/>
            </label>
            <br />
            <label>
              Place:&nbsp;
              <input name="place" type="text" placeholder="ex: Starbucks on Main" value={this.state.place} onChange={this.handleInputChange} required/>
            </label>
            <br />
            <label>
              Address:&nbsp;
              <input name="address" type="text" value={this.state.address} onChange={this.handleInputChange} required/>
            </label>
            <br />
            <label>
              City:&nbsp;
              <input name="city" type="text" value={this.state.city} onChange={this.handleInputChange} required/>
            </label>
            <label>
              State:&nbsp;
              <input name="state" type="state" placeholder="CA" value={this.state.state} maxLength="2" size="3" onChange={this.handleInputChange} required/>
            </label>
            <br />
            <label>
              Date:&nbsp;
              <input name="date" type="date" value={this.state.date} onChange={this.handleInputChange} required/>
            </label>
            <br />
            <label>
              From &nbsp;
              <input name="timeFrom" type="time" value={this.state.timeFrom} onChange={this.handleInputChange} required/>
              &nbsp; to &nbsp;
              <input name="timeTo" type="time" value={this.state.timeTo} onChange={this.handleInputChange} required/>
            </label>
            <br /><br />
            <Submit type="submit" value="Post Meet-up" /> &nbsp;
          </form>
          <br /><br /><br />

          <strong><u>Scheduled Meet-ups:</u></strong>
          <Posts>
            <br />
            <div id="meet-ups">
              {this.state.meetups.map(meetup => <MeetUps info={meetup} key={meetup['_id']}/> )}
            </div>
          </Posts>
        </Main>
    </div>
    )
  }
}

export default StudyBuddy;