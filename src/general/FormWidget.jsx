import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ajax from 'superagent';
import RestaurantClient from '../rest_clients/restaurants';
import RestaurantActions from '../actions.js';
import ListWidget from '../restaurant/ListWidget.jsx';


const FormWidget = React.createClass ({


  render() {
    console.log('within the form',this.props.reservations);
    let time = 0;
    return (
      <div>
        <div>
        {this.props.reservations.map((res)=>{
          time += res.time_added;
          return (
            <div key={res.id}>
              <p>Party Size: {res.party_size}</p>
              <p>Waiting Time: {time}</p>
            </div>)
        })}
        </div>
      </div>
    );
  }

});

export default FormWidget;

