import React from'react';
import MeetUps from './meetUps.jsx';

class StudyBuddy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    fetch('/meetups', {
      method: 'GET'
    }).then(res => res.json())
    .then(response => {this.setState({ meetups: response})})
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
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(() => console.log('POST success!'))
    .catch(error => console.error('Error:', error))

    this.setState({
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
        <form onSubmit={this.handleSubmit}>

        Post below if you would like to set up a meet:
        <br /><br />
          <label>
            Place:
            <input name="place" type="text" placeholder="ex: Starbucks on Main" value={this.state.place} onChange={this.handleInputChange} required/>
          </label>
          <br />
          <label>
            Address:
            <input name="address" type="text" value={this.state.address} onChange={this.handleInputChange} required/>
          </label>
          <br />
          <label>
            City:
            <input name="city" type="text" value={this.state.city} onChange={this.handleInputChange} required/>
          </label>
          <label>
            State:
            <input name="state" type="state" value={this.state.state} onChange={this.handleInputChange} required/>
          </label>
          <br />
          <label>
            Date:
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
          <input type="submit" value="Post Meet-up" />
        </form>

        <br />

        Scheduled Meet-ups:
        <div id="meet-ups">
          {this.state.meetups.map(meetup => <MeetUps info={meetup} key={meetup['_id']}/> )}
        </div>

      </div>
    )
  }
}

export default StudyBuddy;