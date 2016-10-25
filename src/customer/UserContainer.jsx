import React, {Component} from 'react';
import SearchBar from '../general/SearchBar.jsx';
import LocationBar from '../general/LocationBar.jsx';
import ListWidget from '../general/ListWidget.jsx';
import ajax from 'superagent';
import AddReservationBtn from '../general/AddReservationBtn.jsx';
import AddReservationForm from '../general/AddReservationForm.jsx';

function getData() {
  ajax.get('http://localhost:3000/restaurants')
  .end(function(err, res) {
    if (err || !res.ok) {
      console.log('error?????', err);
    } else {
      console.log(res.body);
    }
  })
}



const UserContainer = React.createClass ({

  render() {
    return (
    <div>
      <h1>UserContainer</h1>
      <h1>{getData()}</h1>
      <SearchBar />
      <LocationBar />
      <ListWidget />
      <AddReservationBtn />
      <AddReservationForm />
    </div>
    );
  }
});
export default UserContainer;
