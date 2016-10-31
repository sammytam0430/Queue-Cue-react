import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ajax from 'superagent';
import RestaurantClient from '../rest_clients/restaurants';
import RestaurantActions from '../actions.js';
import FormWidget from './FormWidget.jsx'


const TimeWidget = React.createClass ({

  render() {
    return (
      <div>
        <div id='time-widget'>
          HERE
        </div>
        <div id='form-widget'>
          <FormWidget
            resId={this.props.resId}
            reservations={this.props.reservations}/>
        </div>
      </div>
    );
  }

});

export default TimeWidget;

