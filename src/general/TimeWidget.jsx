import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ajax from 'superagent';
import RestaurantClient from '../rest_clients/restaurants';
import RestaurantActions from '../actions.js';
import FormWidget from './FormWidget.jsx';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';






const TimeWidget = React.createClass ({

  render() {
  const popoverBottom = (
  <Popover id="ppopover-trigger-click-root-close" title="Waiting List">
    <FormWidget reservations={this.props.reservations}/>
  </Popover>
  );
  let time = 0;
    return (
      <div>
        {this.props.reservations.map((res)=>{
          time += res.time_added;
        })}
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverBottom}>
        {
          {time} == 0 ?
          <div>
            No Wait
          </div>:
          <div>
            {time} Minutes
          </div>
        }
        </OverlayTrigger>

      </div>
    );
  }
});

export default TimeWidget;
