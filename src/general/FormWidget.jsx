import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ajax from 'superagent';
import RestaurantClient from '../rest_clients/restaurants';
import RestaurantActions from '../actions.js';


const FormWidget = React.createClass ({

  render() {
    let time = 0;
    return (
      <div className="listOfRes">
        {this.props.reservations.map((res)=>{
          time += res.time_added;
          return (
            <div key={res.id}>
              <p>Party Size: {res.party_size}</p>
              <p>Waiting Time: {time}</p>
            </div>)
        })}

      </div>
    );
  }

});

export default (FormWidget);

