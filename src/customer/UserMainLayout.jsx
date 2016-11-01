import React, {Component} from 'react';
import { Link } from 'react-router';
import SearchBar from '../general/SearchBar.jsx';
import LocationBar from '../general/LocationBar.jsx';
import UserReservation from '../general/UserReservation.jsx';

const UserMainLayout = React.createClass ({

  render() {
    return (
      <div>
        <nav id="user-nav">
          <div className="title">
            Queue
          </div>
          <span className="queuer queuer1">
            <div className="triangle triangle1">
            </div>
          </span>
          <span className="queuer queuer2">
            <div className="triangle triangle2">
            </div>
          </span>
          <span className="queuer queuer3">
            <div className="triangle triangle3">
            </div>
          </span>
          <div className="line line1" />
            <SearchBar />
            <LocationBar />
          <div className="line line2" />
          <div id="reserved-spot">
            <UserReservation />
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default UserMainLayout;
