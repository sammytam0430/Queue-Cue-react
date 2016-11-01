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
  <Popover id="ppopover-trigger-click-root-close" title="Popover Bottom">
    <FormWidget reservations={this.props.reservations}/>
  </Popover>
  );

    return (
      <div>
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverBottom}>
          <div>
            TIME CLICK ME
          </div>
        </OverlayTrigger>
      </div>
    );
  }
});

export default TimeWidget;

