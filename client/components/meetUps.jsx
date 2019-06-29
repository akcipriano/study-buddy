import React from 'react';
import convert from 'convert-time';

const MeetUps = (props) => {
  const date = new Date(props.info.date).toDateString();
  const timeFrom = convert(props.info.timeFrom);
  const timeTo = convert(props.info.timeTo);
  const state = props.info.state.toUpperCase();

  const urlString = `${props.info.address}, ${props.info.city}, ${state}`
  const encodedURI = encodeURI(urlString);

  if (props.info.topic) {
    if (props.info.message !== '') {
      return (
        <div>
        <i>{props.info.message}</i> <br />
        {props.info.topic} <br />
        <strong>{props.info.place}</strong> <br />
        <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodedURI}`} target="_blank"> {props.info.address}, {props.info.city}, {state} </a><br />
        <strong>{date}</strong> <br />
        {timeFrom} to {timeTo} <br />
        ___________________________________
        <br /><br />
      </div>
      )
    } else {
      return (
        <div>
        {props.info.topic} <br />
        <strong>{props.info.place}</strong> <br />
        <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodedURI}`} target="_blank"> {props.info.address}, {props.info.city}, {state} </a><br />
        <strong>{date}</strong> <br />
        {timeFrom} to {timeTo} <br />
        ___________________________________
        <br /><br />
      </div>
      )
    }
  } else {
    if (props.info.message) {

      return (
        <div>
        <i>{props.info.message}</i> <br />
        <strong>{props.info.place}</strong> <br />
        <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodedURI}`} target="_blank"> {props.info.address}, {props.info.city}, {state} </a><br />
        <strong>{date}</strong> <br />
        {timeFrom} to {timeTo} <br />
        ___________________________________
        <br /><br />
      </div>
      )
    } else {
      return (
        <div>
        <strong>{props.info.place}</strong> <br />
        <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodedURI}`} target="_blank"> {props.info.address}, {props.info.city}, {state} </a><br />
        <strong>{date}</strong> <br />
        {timeFrom} to {timeTo} <br />
        ___________________________________
        <br /><br />
      </div>
      )
    }
  }
}

export default MeetUps;