import React, {Component} from 'react';
import { Link } from 'react-router';
import SearchBar from '../general/SearchBar.jsx';
import LocationBar from '../general/LocationBar.jsx';
import UserReservation from '../general/UserReservation.jsx';

const UserMainLayout = React.createClass ({

  render() {
    return (
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default UserMainLayout;
