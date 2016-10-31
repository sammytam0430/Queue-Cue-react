//takes object and iterates through to display it
import React, {Component} from 'react';
import { connect } from 'react-redux';
import TimeWidget from '../general/TimeWidget.jsx';
import RestaurantActions from '../actions.js';
import CustomerClient from '../customer_clients/customers.js';
import CompletedBtn from '../restaurant/CompletedReservationBtn.jsx';
import LocationActions from '../actions.js';


function mapStateToProps(state) {
  return state
}

const ListWidget = React.createClass ({

  render() {

    return(

      <article className='restaurant-table'>
         Name: {this.props.restaurant.name}
         <br />
         Type of Food: {this.props.restaurant.food_type}
         <br />
         Location: {this.props.restaurant.location}
         <br />
          {<this.props.button1 {... this.props.restaurant} />}
        <article>
        Wait Time: {<TimeWidget resId={this.props.restaurant.id}
        reservations={this.props.restaurant.reservations}/>}
        </article>
        <br />
      </article>

    )
  }
});



export default (ListWidget);
