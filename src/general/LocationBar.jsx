import React, {Component} from 'react';
import { connect } from 'react-redux';
import LocationActions from '../actions.js';

// console.log({dispatch});

const LocationBar = React.createClass ({

  handleSubmit: function(location) {
    // console.log('!!!!!!!!!!!!!!11');
    // dispatch(LocationActions.addLocation(location));
  },

  render() {
    return (
      <div className='location-bar'>
        <input type="text" placeholder="Location" ref='location'
        onKeyPress={e => {
          if(e.key === 'Enter') {
            e.preventDefault();
            console.log('!!!!!!!!!!!!');
            this.handleSubmit(this.refs.location.value)
          }
        }}/>
      </div>
    );
  }
});

export default LocationBar;
