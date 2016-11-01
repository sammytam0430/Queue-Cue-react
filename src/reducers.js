import { combineReducers } from 'redux'
import { findIndex, difference } from 'lodash'

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
    case 'FILTER_RESTAURANTS':
      let negative_results = difference(state, action.restaurants)
      let newState = negative_results.concat(action.restaurants);
      let index = action.restaurants.length;
      return newState.slice(0, index)
      break;
    case 'RESET_RESTAURANTS':
      let diff = difference(action.restaurants, state);
      return diff
      break;
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
          customer_name: action.customer_name,
          customer_email: action.customer_email,
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

function location(state = {}, action) {
  switch (action.type) {
    case 'LOCATION':
      return {...state,
      location: action.location
      }
    default:
      return state
  }
}

function customers(state = [{active: false}], action) {
  switch (action.type) {
    case 'ADD_RESERVATION':
      return [...state,
        {
          reservation_id: action.id,
          restaurant_name: action.restaurant_name,
          customer_name: action.customer_name,
          customer_id: action.customer_id,
          active: true
        }
      ]
      case 'SHOW_RESERVATION':
        return [...state,
          {
            reservation_id: action.reservation_id,
            restaurant_name: action.restaurant_name,
            customer_name: action.customer_name,
            customer_id: action.customer_id,
            active: true
          }
        ]
      case 'DELETE_CUSTOMER':
        return [...state,
          {
            customer_id: action.customer_id,
            active: false
          }
        ]
    default:
      return state
  }
}

function search(state = [{search: false}], action) {
  switch (action.type) {
    case 'FILTER_RESTAURANTS':
      return [
        {search: action.search}
      ]
    case 'RESET_RESTAURANTS':
      return [
        {search: action.search}
      ]
      break;
    default:
      return state
  }
}

const reducers = combineReducers ({
  location,
  restaurants,
  reservations,
  customers,
  search
});

export default reducers;
