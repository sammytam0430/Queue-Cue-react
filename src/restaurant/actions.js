export function addRestaurant(name, food_type, location) {
  return {
    type: 'ADD_RESTAURANT',
    name: name,
    food_type: food_type,
    location: location
  }
}

export function restaurantList(data) {
  return {
    type: 'RESTAURANT_LIST',
    restaurant_list: data
  }
}

// export default {
//   addRestaurant
// }