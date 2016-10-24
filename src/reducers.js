import { combineReducers } from 'redux'

function restaurants(state = {}, action) {
  switch (action.type) {
    case 'SHOW_RESTAURANTS':
      return {...state,
        // {something}
      }
    default:
      return state
  }
}

function addUser(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          phone: action.phone
        }
      ]
    default:
      return state
  }
}

const reducers = combineReducers({
  restaurants,
  addUser
})

export default reducers;
