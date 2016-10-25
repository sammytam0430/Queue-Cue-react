import React from 'react';


function handleSubmit(name, phone, email, party_size) {
  RestaurantClient.create(name, food_type, location, function(restaurant){
    dispatch(RestaurantActions.addRestaurant(name, food_type, location))
    browserHistory.push("/restaurants/:restaurantId")
  })
}


let AddReservationForm = () => {
  let name
  let phone
  let email
  let party_size


  return (
    <div>
      <h1>Make a Reservation</h1>
      <form action="/" onSubmit={e => {
        e.preventDefault()

      }}>
      <input ref={node => {
        name = node
      }} />
      <input ref={node => {
        phone = node
      }} />
      <input ref={node => {
        email = node
      }} />
      <input ref={node => {
        party_size = node
      }} />
      <button type='submit'>
        Add
      </button>
      </form>
    </div>
  );
}

export default AddReservationForm;
