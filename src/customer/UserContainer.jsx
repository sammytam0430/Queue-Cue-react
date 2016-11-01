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

function mapDispatchToProps(dispatch) {
  return {
    storeData() {
      RestaurantClient.get(function(restaurants){
        dispatch(RestaurantActions.addRestaurants(restaurants));
      });
    }
  };
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
    reservations: state.reservation_list
  };
};

const UserContainer = React.createClass ({

  componentWillMount() {
    this.props.storeData();
  },

  flipBox(event) {
    event.preventDefault()
    let m = document.getElementById('user-container'), c = m.style;
        c.transform = 'rotateX(89deg)';
  },

  flipBack(event) {
    event.preventDefault()
    let m = document.getElementById('user-container'), c = m.style;
        c.transform = 'rotateX(359deg)';
  },

  render() {

    const { restaurants } = this.props;
    return (
    <div id="user-container">
      <div id='map-cont'>
        <div id='map'></div>
      </div>
      <div className="toList" onClick={this.flipBox}>
        ▼
      </div>
      <div className="table-container">
        <div className="toMap" onClick={this.flipBack}>
          ▲
        </div>
        <div className="scroll">
          {this.props.restaurants.map((restaurant) => {
            return (
              <ListWidget
              key={restaurant.id}
              reservations={this.props.reservations}
              restaurant={restaurant}
              button1={AddReservationBtn}/>)
          })}
        </div>
      </div>
    </div>

    );
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
