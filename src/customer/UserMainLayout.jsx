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
            <span className="queuer queuer1">
            <img className="triangle triangle1" src="http://www.edmarrieschar.com/images/triangle_green_giant564x488.png">
            </img>
            </span>
            <span className="queuer queuer2">
            <img className="triangle triangle2" src="https://learn.weatherstem.com/modules/learn/lessons/66/img/photo-shape-triangle.png">
            </img>
            </span>
            <span className="queuer queuer3">
            <img className="triangle triangle3" src="
            https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Pink_Fire.svg/2000px-Pink_Fire.svg.png">
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
