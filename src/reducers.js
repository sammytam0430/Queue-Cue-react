import { combineReducers } from 'redux'

function addRestaurant(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
    return [
    ...state,
    {
      name: action.name,
      food_type: action.food_type,
      location: action.location
    }]
    default:
    return state
  }
};

const restaurantDefaultState = {
  restaurant_list: []
}

function displayRestaurant(state = restaurantDefaultState, action) {
  switch (action.type) {
    case 'RESTAURANT_LIST':
    return Object.assign({}, state, {
      restaurant_list: action.restaurant_list
    })
    default:
    return state
  }
};

function addGroup(state = [], action) {
  switch (action.type) {
    case 'ADD_GROUP':
    return [...state,
      {
        id: action.id,
        party_size: action.party_size,
        time_added: 15,
        completed: false
      }]
    default:
      return state
  }
}


const reducers = combineReducers ({
  addRestaurant,
  displayRestaurant,
  addGroup
});

export default reducers;
