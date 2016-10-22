import React, {Component} from 'react';
import SearchBar from '../general/SearchBar.jsx';
import LocationBar from '../general/LocationBar.jsx';
import ListWidget from '../general/ListWidget.jsx';

const UserContainer = React.createClass ({

  render() {
    return (
    <div>
      <h1>UserContainer</h1>
      <SearchBar />
      <LocationBar />
      <ListWidget />
    </div>
    );
  }
});
export default UserContainer;
