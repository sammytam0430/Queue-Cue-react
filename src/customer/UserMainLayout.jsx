import React, {Component} from 'react';
import { Link } from 'react-router';

const UserMainLayout = React.createClass ({

  render() {
    return (
      <div>
        <nav>
          <h1>UserMainLayout</h1>
        </nav>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default UserMainLayout;
