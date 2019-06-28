import React from 'react';
import convert from 'convert-time';

const MeetUps = (props) => {
  const date = new Date(props.info.date).toDateString();
  const timeFrom = convert(props.info.timeFrom);
  const timeTo = convert(props.info.timeTo);
  const state = props.info.state.toUpperCase();

  if (props.info.subject) {
    if (props.info.message !== '') {
      return (
        <div>
        <i>{props.info.message}</i> <br />
        {props.info.subject} <br />
        <strong>{props.info.place}</strong> <br />
        {props.info.address} <br />
        {props.info.city}, {state} <br />
        <strong>{date}</strong> <br />
        {timeFrom} to {timeTo} <br />
        ___________________________________
        <br /><br />
      </div>
      )
    } else {
      return (
        <div>
        {props.info.subject} <br />
        <strong>{props.info.place}</strong> <br />
        {props.info.address} <br />
        {props.info.city}, {state} <br />
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
        {props.info.address} <br />
        {props.info.city}, {state} <br />
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
        {props.info.address} <br />
        {props.info.city}, {state} <br />
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