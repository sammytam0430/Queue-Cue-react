import React from 'react';
import { connect } from 'react-redux';
import CustomerClient from '../customer_clients/customers.js';
import ReservationActions from '../reservation/actions.js';

function timeAdded(party_size) {
  switch (party_size) {
    case '6':
      return 60
      break
    case '5':
      return 45
      break
    case '4':
      return 30
      break
    case '3':
      return 20
      break
    case '2':
      return 15
      break
    default:
      return 15
  }
}

function handleSubmit(name, phone, email, party_size, dispatch) {
  let time_added = timeAdded(party_size);
  CustomerClient.newRes(name, phone, email, party_size, time_added,
  function(party){
    dispatch(ReservationActions.addGroup(party));
  })
}

let AddReservationForm = ({ dispatch }) => {
  let name
  let phone
  let email
  let party_size

  return (
    <div>
      <h1>Make a Reservation</h1>
      <form action="/" onSubmit={e => {
        e.preventDefault()
        handleSubmit(name.value, phone.value, email.value, party_size.value, dispatch)
      }}>
        <input placeholder="name" ref={node => {
          name = node
        }} />
        <input placeholder="phone" ref={node => {
          phone = node
        }} />
        <input placeholder="email" ref={node => {
          email = node
        }} />
        <input placeholder="party size" ref={node => {
          party_size = node
        }} />
        <button type='submit'>
          Add
        </button>
      </form>
    </div>
  );
}

export default connect()(AddReservationForm);
