import React, {Component} from 'react';
import { Link } from 'react-router';

const SearchBar = React.createClass ({

  render() {
    return (
      <div className='search-bar'>
        <input type="text" placeholder="Search Here" />
      </div>
    );
  }
});

export default SearchBar;
