import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { remove } from 'lodash';
import { FormGroup } from 'react-bootstrap';
import RestaurantClient from '../rest_clients/restaurants.js';
import RestaurantActions from '../actions.js';
import { Button } from 'react-bootstrap';

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterRestaurants(searchText) {
      let searchResults
      RestaurantClient.get(function(restaurants) {
        searchResults = remove(restaurants, function(restaurant) {
          let restName = restaurant.name.toLowerCase().replace(/\s+/g, '');
          let search = searchText.toLowerCase().replace(/\s+/g, '');
          return restName.includes(search)
        })
        dispatch(RestaurantActions.filterRestaurants(searchResults));
      })
    },

    resetRestaurants() {
      RestaurantClient.get(function(restaurants) {
        dispatch
      })
    }
  }
}


const SearchBar = React.createClass ({

  componentDidMount() {
    console.log(this.props.restaurants);
  },

  render() {
    let searchText
    return (
      <div className='search-bar'>
        <div className="input-group">
          <span className="input-group-btn">
          <button
            className="btn btn-secondary"
            onClick={() => {
              this.props.filterRestaurants(
                searchText.value
              )
              searchText.value = ''
            }}
          >
            Search
          </button>
          </span>
          <input
          placeholder="Search Here"
          ref={node => {
            searchText = node
          }} />
        </div>
      </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
