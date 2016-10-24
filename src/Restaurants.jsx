import React from 'react';
import { data } from './restaurants_data.js';

const Restaurants = React.createClass({
  render () {
    return (
      <ul>
        {data.map((restaurant) => {
          return <li key={restaurant.id}>
            {restaurant.name}
          </li>
        })}
      </ul>
    )
  }
})

export default Restaurants;
