import { Link } from 'react-router';
import React, {Component} from 'react';

const Login = React.createClass ({

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="/tweets" method= "POST">
          <span> name </span>
          <span> email </span>
          <span> number </span>
          <span> party size </span>
          <input type="submit" value="Log in" />
        </form>
      </div>
    );
  }
});

export default Login;
