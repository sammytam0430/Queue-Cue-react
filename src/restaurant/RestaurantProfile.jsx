import React, {Component} from 'react';
import { connect } from 'react-redux';
import RestaurantQueue from './ListWidget.jsx';
import RestaurantClient from '../rest_clients/restaurants.js';
import RestaurantActions from './actions.js';

function mapDispatchToProps(dispatch) {
  return {
    getReservations(resId) {
      RestaurantClient.getReservations(resId, function(resList) {
        dispatch(RestaurantActions.reservationList(resList))
      })
    }
  }
}

function mapStateToProps(state) {
  return {
    reservationList: state.displayReservations.reservation_list
  }
}

const RestaurantProfile = React.createClass ({

  componentDidMount () {
    let resId = this.props.params.restaurantId;
    this.props.getReservations(resId);
  },

  render() {
    return (
    <div>
      <table className="list-table">
      <thead>
        <tr>
          <th>Party Size</th>
        </tr>
      </thead>
        <RestaurantQueue reservations={this.props.reservationList} />
      </table>
    </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantProfile);
