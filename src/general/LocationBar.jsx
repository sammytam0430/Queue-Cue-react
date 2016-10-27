import React, {Component} from 'react';


const LocationBar = React.createClass ({

  render() {
    return (
      <div className='location-bar'>
        <input type="text" placeholder="Location" />
      </div>
    );
  }
});

export default LocationBar;
