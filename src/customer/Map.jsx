import React, {Component} from 'react';

import ListWidget from '../general/ListWidget.jsx';
import ajax from 'superagent';
import AddReservationBtn from '../general/AddReservationBtn.jsx';
import AddReservationForm from '../general/AddReservationForm.jsx';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { reducers } from '../reducers.js';
import RestaurantClient from '../rest_clients/restaurants.js';
import RestaurantActions from '../actions.js';


const MapContainer = React.createClass ({

  render() {


    return (
      <div id='map-cont'>
        <div id='map'></div>
        <div>
        <h1><Link to="/list">CLICK
        </Link></h1>
        </div>
      </div>
    );
  }
});


export default MapContainer;
