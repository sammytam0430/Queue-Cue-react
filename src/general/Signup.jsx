
import { Link, browserHistory } from 'react-router';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import ajax from 'superagent';
import RestaurantClient from '../rest_clients/restaurants.js';
import RestaurantActions from '../restaurant/actions.js'


function handleSubmit(name, food_type, location, email, password, dispatch) {
  RestaurantClient.create(name, food_type, location, email, password, function(token){
    localStorage.setItem("token", token)
    dispatch(RestaurantActions.addRestaurant(name, food_type, location))
    browserHistory.push("/restaurants/:restaurantId")
  })
}

let Signup = ({ dispatch }) => {
  let name
  let food_type
  let location
  let email
  let password

  return (
    <div>
      <h1>Signup</h1>
      <form action="/" onSubmit={e => {
        e.preventDefault()
        handleSubmit(name.value, food_type.value, location.value, email.value, password.value, dispatch)
      }}>
      <input placeholder="name" ref={node => {
        name = node
      }} />
      <input placeholder="food_type" ref={node => {
        food_type = node
      }} />
      <input placeholder="location" ref={node => {
        location = node
      }} />
      <input placeholder="email" ref={node => {
        email = node
      }} />
      <input placeholder="password" ref={node => {
        password = node
      }} />
      <button type='submit'>
        Signup
      </button>
      </form>
    </div>
  );
}

export default connect()(Signup);
