import React, {Component} from 'react';
import GroupButtons from './GroupButtons.jsx';

const Rest = React.createClass ({

  render(){
    return (
      <div className='rest-waitlist'>
        <h3>Restaurant Name</h3>
        <p className='location'>Location</p>
        <p className='price-range'>Price</p>

        <GroupButtons />
      </div>
    );
  }

});

export default Rest;