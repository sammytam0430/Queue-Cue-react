import { combineReducers } from 'redux'
import { findIndex } from 'lodash'

function restaurants(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return [
      ...state,
      {
        name: action.name,
        food_type: action.food_type,
        location: action.location
      }]
    case 'ADD_RESTAURANTS':
      return state.concat(action.restaurants);

    default:
      return state
  }
};

function reservations(state = [], action) {
  switch (action.type) {
    case 'ADD_RESERVATION':
      return [...state,
        {
          id: action.id,
          party_size: action.party_size,
          restaurant_id: action.restaurant_id,
          restaurant_name: action.restaurant_name,
          time_added: action.time_added,
          completed: false
        }]
    case 'ADD_RESERVATIONS':
      return state.concat(action.reservation_list);
    case 'DELETE_RES':
      var index = findIndex(state, function(res) {
        return res.id == action.reservation_id
      })
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}

function customers(state = [], action) {
  switch (action.type) {
    case 'SHOW_RESERVATION':
      return [...state,
        {
          reservation_id: action.reservation_id,
          restaurant_name: action.restaurant_name,
          customer_name: action.customer_name
        }
      ]
    default:
      return state
  }
}

const reducers = combineReducers ({
  restaurants,
  reservations,
  customers
});

export default reducers;
