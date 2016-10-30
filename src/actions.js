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

function deleteRes(resId) {
  return {
    type: 'DELETE_RES',
    reservation_id: resId
  }
}

function addReservation(party) {
  return {
    type: 'ADD_RESERVATION',
    id: party.id,
    restaurant_id: party.restaurant_id,
    restaurant_name: party.restaurant_name,
    party_size: party.party_size,
    time_added: party.time_added
  }
}

function showCustomerReservation(reservation_id, restaurant_name, customer_name){
  return {
    type: 'SHOW_RESERVATION',
    reservation_id: reservation_id,
    restaurant_name: restaurant_name,
    customer_name: customer_name
  }
}

export default  {
  addRestaurant,
  addRestaurants,
  reservationList,
  deleteRes,
  addReservation,
  showCustomerReservation
}
