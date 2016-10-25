import React, {Component} from 'react';
import { Link } from 'react-router';

const App = React.createClass ({

  render() {
    return (
      <div>
        <h1>Hello React :)</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
        </ul>
      </div>
    );
  }
});

export default App;
