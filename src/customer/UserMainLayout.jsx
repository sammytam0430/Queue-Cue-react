import React, {Component} from 'react';
import { Link } from 'react-router';
import SearchBar from '../general/SearchBar.jsx';
import LocationBar from '../general/LocationBar.jsx';

const UserMainLayout = React.createClass ({

  render() {
    return (
      <div>
        <nav id="user-nav">
          <div className="title">
            Queue
          </div>
            <span className="queuer">
            <img className="triangle" src="http://www.edmarrieschar.com/images/triangle_green_giant564x488.png">
            </img>
            </span>
          <div className="line line1" />
            <SearchBar />
            <LocationBar />
          <div className="line line2" />
        </nav>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default UserMainLayout;
