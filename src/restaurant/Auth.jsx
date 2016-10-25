import React, {Component} from 'react';
import { Link, Router, browserHistory } from 'react-router';

const Auth = React.createClass ({

  componentDidMount() {
    this.checkForUser();
  },

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  },

  checkForUser() {
    //change to check user exists later
    if (false) {
      browserHistory.push("/restaurants/:restaurantId")
    } else {
      browserHistory.push("/restaurants/checkin")
    };
  }
});
export default Auth;
