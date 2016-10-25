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

const reducers = combineReducers ({
  addRestaurant
});

export default reducers;
