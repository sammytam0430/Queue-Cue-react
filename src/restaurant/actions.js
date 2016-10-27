function addRestaurant(name, food_type, location) {
  return {
    type: 'ADD_RESTAURANT',
    name: name,
    food_type: food_type,
    location: location
  }
}

function restaurantList(data) {
  return {
    type: 'RESTAURANT_LIST',
    restaurant_list: data
  }
}

function reservationList(data) {
  return {
    type: 'GET_RESERVATIONS',
    reservation_list: data
  }
}

export default  {
  addRestaurant,
  restaurantList,
  reservationList
}
