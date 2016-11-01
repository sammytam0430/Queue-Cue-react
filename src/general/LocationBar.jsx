import React, {Component} from 'react';
import { connect } from 'react-redux';
import LocationActions from '../actions.js';


function handleSubmit(location, dispatch) {
  dispatch(LocationActions.addLocation(location))
}

let LocationBar = ({ dispatch }) => {
  let location

  return (
    <div className='location-bar'>
      <form className='location-form' action="/" onKeyPress={e => {
        if(e.key === 'Enter') {
          e.preventDefault()
          handleSubmit(location.value, dispatch)
        }
      }}>
      <input id='pac-input' placeholder="location" ref={node => {
        location = node
      }} />
      </form>
    </div>
  );
}

export default connect()(LocationBar);
