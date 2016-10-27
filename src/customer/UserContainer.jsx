import React, {Component} from 'react';

import ListWidget from '../general/ListWidget.jsx';
import ajax from 'superagent';
import AddReservationBtn from '../general/AddReservationBtn.jsx';
import AddReservationForm from '../general/AddReservationForm.jsx';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { reducers } from '../reducers.js';
import RestaurantClient from '../rest_clients/restaurants.js';
import * as RestaurantActions from '../restaurant/actions.js'

function mapDispatchToProps(dispatch) {
  return {
    storeData() {
      RestaurantClient.get(function(data){
        dispatch(RestaurantActions.restaurantList(data));
      });
    }
  };
}

function mapStateToProps(state) {
  return {
    restaurants: state.displayRestaurant.restaurant_list
  };
};

const UserContainer = React.createClass ({

  componentWillMount() {
    this.props.storeData();
  },

  render() {
    const { restaurants } = this.props;
    return (
    <div id="user-container">
    <table className="list-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Food</th>
          <th>Location</th>
        </tr>
      </thead>
      <ListWidget
        data={restaurants}
        button1={AddReservationBtn} />
    </table>
      <AddReservationForm />
    </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
