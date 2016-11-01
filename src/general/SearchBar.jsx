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

        if (searchResults.length === 0) {
          searchResults = remove(restaurants, function(restaurant) {
            let foodType = restaurant.food_type.toLowerCase().replace(/\s+/g, '');
            let search = searchText.toLowerCase().replace(/\s+/g, '');
            return foodType.includes(search)
          })
        }
        console.log("searchresults ", searchResults);
        dispatch(RestaurantActions.filterRestaurants(searchResults));
      })
    },

    resetRestaurants() {
      RestaurantClient.get(function(restaurants) {
        dispatch(RestaurantActions.resetRestaurantList(restaurants));
      })
    }
  }
}


const SearchBar = React.createClass ({

  render() {
    const {
      restaurants,
      filterRestaurants,
      resetRestaurants
    } = this.props;
    let searchText
    return (
      <div className='search-bar'>
        <form onKeyPress={e => {
          if(e.key === 'Enter' && searchText.value !== ''){
            e.preventDefault()
            filterRestaurants(searchText.value)
            searchText.value = ''
          } else if (e.key === 'Enter' && searchText.value === '') {
            e.preventDefault()
            resetRestaurants()
          }
        }}>
          <input
          placeholder="Search by restaurant name or food type"
          ref={node => {
            searchText = node
          }} />
        </form>
      </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
