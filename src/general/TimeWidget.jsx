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
  const popoverTop = (
  <Popover id="ppopover-trigger-click-root-close" title="Popover top">
    <FormWidget reservations={this.props.reservations}/>
  </Popover>
  );

    return (
      <div>
        <OverlayTrigger trigger="click" rootClose placement="top" overlay={popoverTop}>
          <button>HERE</button>
        </OverlayTrigger>
      </div>
    );
  }
});

export default TimeWidget;

