import React from 'react';
import convert from 'convert-time';

const MeetUps = (props) => {
  const date = new Date(props.info.date).toDateString();
  const timeFrom = convert(props.info.timeFrom);
  const timeTo = convert(props.info.timeTo);

  if (props.info.subject) {
    return (
      <div>
      {props.info.subject} <br />
      {props.info.place} <br />
      {props.info.address} <br />
      {props.info.city}, {props.info.state} <br />
      {date} <br />
      {timeFrom} to {timeTo}
      <br /><br />
    </div>
    )
  } else {
    return (
      <div>
        {props.info.place} <br />
        {props.info.address} <br />
        {props.info.city}, {props.info.state} <br />
        {date} <br />
        {timeFrom} to {timeTo}
        <br /><br />
      </div>
    )
  }
}

export default MeetUps;