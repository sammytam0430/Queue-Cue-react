import { Link } from 'react-router';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { reducers } from '../reducers.js';

function addUser(name, email) {
  return {
    type: 'ADD_USER',
    name: name,
    email: email
  }
}

let Login = ({ dispatch }) => {
  let name
  let email

  return (
    <div>
      <h1>Login</h1>
      <form action="/" onSubmit={e => {
        e.preventDefault()
        dispatch(addUser(name.value, email.value))
        name.value = ''
        email.value = ''
      }}>
      <input ref={node => {
        name = node
      }} />
      <input ref={node => {
        email = node
      }} />
      <button type='submit'>
        Login
      </button>
      </form>
    </div>
  );
}

export default connect()(Login);
