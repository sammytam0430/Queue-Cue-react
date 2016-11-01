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
          {<TimeWidget resId={this.props.restaurant.id}
        reservations={this.props.restaurant.reservations}/>}
        </div>
        <div>
          {this.props.restaurant.name}
        </div>
        <div>
          Food: {this.props.restaurant.food_type}
        </div>
        <div>
          Location: {this.props.restaurant.location}
        </div>
        <div>
          {<this.props.button1 {... this.props.restaurant} />}
         </div>
      </div>

    )
  }
});



export default (ListWidget);
