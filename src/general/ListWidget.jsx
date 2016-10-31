//takes object and iterates through to display it
import React, {Component} from 'react';
import { connect } from 'react-redux';
import TimeWidget from '../general/TimeWidget.jsx';
import RestaurantActions from '../actions.js';
import CustomerClient from '../customer_clients/customers.js';




const ListWidget = React.createClass ({

  render() {

    return(

      <div className='restaurant-table'>
        <div>
         Name: {this.props.restaurant.name}
         </div>
          <div>
         Type of Food: {this.props.restaurant.food_type}
         Location: {this.props.restaurant.location}
         </div>
        <div>
          {<this.props.button1 {... this.props.restaurant} />}
        Wait Time: {<TimeWidget resId={this.props.restaurant.id}
        reservations={this.props.restaurant.reservations}/>}
        </div>
        <br />
      </div>

    )
  }
});



export default (ListWidget);
