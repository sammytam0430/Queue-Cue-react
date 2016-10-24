import { combineReducers } from 'redux';

function addUser(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
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
  addUser
});

export default reducers;