
import { Link, browserHistory } from 'react-router';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { reducers } from '../reducers.js';
import ajax from 'superagent';

function postData(name, food_type, location) {
  ajax.post('http://localhost:3000/restaurants')
  .send({name: name, food_type: food_type, location: location})
  .end(function (err, res){
    if (err || !res.ok) {
      console.log('error!!!!!!', err);
    } else {
      browserHistory.push("/restaurants/:restaurantId")
      console.log(res);
    }
  })
}

function addUser(name, food_type, location) {
  return {
    type: 'ADD_USER',
    name: name,
    food_type: food_type,
    location: location
  }
}

let Signup = ({ dispatch }) => {
  let name
  let food_type
  let location

  return (
    <div>
      <h1>Signup</h1>
      <form action="/" onSubmit={e => {
        e.preventDefault()
        dispatch(addUser(name.value, food_type.value, location.value))
        postData(name.value, food_type.value, location.value)
        name.value = ''
        food_type.value = ''
        location.value = ''
      }}>
      <input ref={node => {
        name = node
      }} />
      <input ref={node => {
        food_type = node
      }} />
      <input ref={node => {
        location = node
      }} />
      <button type='submit'>
        Signup
      </button>
      </form>
    </div>
  );
}

export default connect()(Signup);
