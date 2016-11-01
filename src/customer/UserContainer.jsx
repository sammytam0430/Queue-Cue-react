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
import SearchBar from '../general/SearchBar.jsx';
import LocationBar from '../general/LocationBar.jsx';
import UserReservation from '../general/UserReservation.jsx';
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
       <div onClick={this.flipBox}>
      ▼
    </div>

    <div className="table-container">
            <nav id="user-nav">
          <div className="title">
            Queue
          </div>
            <span className="queuer queuer1">
            <div className="triangle triangle1">
            </div>
            </span>
            <span className="queuer queuer2">
            <div className="triangle triangle2">
            </div>
            </span>
            <span className="queuer queuer3">
            <div className="triangle triangle3">
            </div>
            </span>
          <div className="line line1" />
            <SearchBar />
            <LocationBar />
          <div className="line line2" />
          <div id="reserved-spot">
            <UserReservation />
          </div>
        </nav>


    <div className="toMap" onClick={this.flipBack}>
      ▲
    </div>
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

    );
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
