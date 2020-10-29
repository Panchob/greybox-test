import React, { Component } from "react";
import './Popup.scss';
import { dateTime } from '../../Utils/dateTime'

export class Popup extends Component {
  render() {
    return(
      <div className="popup-wrapper">
        <div className="popup-header">
        <p>Daily Questions</p> <p>{dateTime()}</p>
        </div>
        {this.props.renderer(this.props.content)}
      </div>
    )
  }
}