import React, {Component} from 'react';
import SearchBar from '../general/SearchBar.jsx';
import LocationBar from '../general/LocationBar.jsx';
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

function mapStateToProps(state)
{
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
    <div>
      <h1>UserContainer</h1>
      <SearchBar />
      <LocationBar />
      <ListWidget data={restaurants} />
      <AddReservationBtn />
      <AddReservationForm />
    </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
