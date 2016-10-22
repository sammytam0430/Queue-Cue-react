import React, {Component} from 'react';
import { Link } from 'react-router';

const CheckIn = React.createClass ({

  render() {
    return (
    <div>
      <ul>
        <li><Link to="/restaurants/login">Login</Link></li>
        <li><Link to="/restaurants/signup">Signup</Link></li>
      </ul>
    </div>
    );
  }
});

export default CheckIn;
