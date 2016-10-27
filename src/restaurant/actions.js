function addRestaurant(name, food_type, location) {
  return {
    type: 'ADD_RESTAURANT',
    name: name,
    food_type: food_type,
    location: location
  }
}

function addRestaurants(data) {
  return {
    type: 'ADD_RESTAURANTS',
    restaurants: data
  }
}

function reservationList(data) {
  return {
    type: 'ADD_RESERVATIONS',
    reservation_list: data
  }
}

function seatedTable() {
  return {
    type: 'TABLE_SEATED',
    completed: true
  }
}

export default  {
  addRestaurant,
  addRestaurants,
  reservationList,
  seatedTable
}
