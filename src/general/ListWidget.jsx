//takes object and iterates through to display it
import React, {Component} from 'react';
import { connect } from 'react-redux';
import TimeWidget from '../general/TimeWidget.jsx';
import RestaurantActions from '../actions.js';
import CustomerClient from '../customer_clients/customers.js';




const ListWidget = React.createClass ({

  render() {

    return(

      <tr>
        <td> {this.props.restaurant.name}</td>
        <td> {this.props.restaurant.food_type}</td>
        <td> {this.props.restaurant.location}</td>
        <td> {<TimeWidget resId={this.props.restaurant.id}
        reservations={this.props.restaurant.reservations}/>} </td>
        <td> {<this.props.button1 {... this.props.restaurant} />} </td>
      </tr>

    )
  }
});

export default (ListWidget);
