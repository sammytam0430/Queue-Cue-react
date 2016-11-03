import React, {Component} from 'react';
import Rest from './Rest.jsx';

const RestList = React.createClass ({

  render(){
    return (
      <div className='rest-waitlist'>
        <Rest />
      </div>
    );
  }

});

export default RestList;