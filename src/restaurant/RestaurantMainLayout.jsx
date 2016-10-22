import React, {Component} from 'react';
import { Link } from 'react-router';

const RestaurantMainLayout = React.createClass ({

  render() {
    return (
      <div>
        <nav>
          <h1>RestaurantMainLayout</h1>
        </nav>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default RestaurantMainLayout;
