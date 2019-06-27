import React from 'react';

const MeetUps = (props) => {
  return (
    <div>
      {props.info.place} <br />
      {props.info.city}, {props.info.state} <br />
      {props.info.timeFrom} to {props.info.timeTo}
      <br /><br />
    </div>
  )
}

export default MeetUps;