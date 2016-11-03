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

function filterRestaurants(restaurants) {
  return {
    type: 'FILTER_RESTAURANTS',
    restaurants: restaurants
  }
}

function resetRestaurantList(restaurants) {
  return {
    type: 'RESET_RESTAURANTS',
    restaurants: restaurants
  }
}

function reservationList(queue_list, total_time) {
  return {
    type: 'ADD_RESERVATIONS',
    reservation_list: queue_list,
    total_time: total_time
  }
}

function deleteRes(resId) {
  return {
    type: 'DELETE_RES',
    reservation_id: resId
  }
}

function addReservation(new_reservation, new_customer) {
  return {
    type: 'ADD_RESERVATION',
    id: new_reservation.id,
    restaurant_id: new_reservation.restaurant_id,
    restaurant_name: new_reservation.restaurant_name,
    party_size: new_reservation.party_size,
    time_added: new_reservation.time_added,
    customer_name: new_customer.name,
    customer_email: new_customer.email,
    customer_id: new_customer.id,
    active: true
  }
}

function addLocation(location) {
  return {
    type: 'LOCATION',
    location: location
  }
}

function showCustomerReservation(reservation_id, restaurant_name, customer_name, customer_id){
  return {
    type: 'SHOW_RESERVATION',
    reservation_id: reservation_id,
    restaurant_name: restaurant_name,
    customer_name: customer_name,
    customer_id: customer_id
  }
}

function deleteCustomer(customerId) {
  return {
    type: 'DELETE_CUSTOMER',
    customer_id: customerId
  }
}

function totalResTime(resId, total_time) {
  return {
    type: 'GET_TOTAL_TIME',
    resId: resId,
    total_time: total_time
  }
}

export default  {
  addRestaurant,
  addRestaurants,
  filterRestaurants,
  resetRestaurantList,
  reservationList,
  deleteRes,
  addReservation,
  showCustomerReservation,
  deleteCustomer,
  addLocation,
  totalResTime
}
