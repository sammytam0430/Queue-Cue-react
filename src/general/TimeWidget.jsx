import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ajax from 'superagent';
import RestaurantClient from '../rest_clients/restaurants';
import RestaurantActions from '../actions.js';
import FormWidget from './FormWidget.jsx';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';



const popoverBottom = (
  <Popover id="popover-positioned-bottom" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

const TimeWidget = React.createClass ({


  render() {
    return (
      <div>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
          <button>HERE</button>
        </OverlayTrigger>
          <FormWidget reservations={this.props.reservations}/>
      </div>
    );
  }
});

export default TimeWidget;

