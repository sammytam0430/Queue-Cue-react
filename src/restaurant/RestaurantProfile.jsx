import React, {Component} from 'react';
import { connect } from 'react-redux';
import ListWidget from './ListWidget.jsx';
import CompletedBtn from './CompletedReservationBtn.jsx';
import RestaurantClient from '../rest_clients/restaurants.js';
import RestaurantActions from '../actions.js';
import TimeWidget from '../general/TimeWidget.jsx';

function mapDispatchToProps(dispatch) {
  return {
    getReservations(resId) {
      RestaurantClient.getReservations(resId, function(resList) {
        dispatch(RestaurantActions.reservationList(resList.queue_list, resList.total_time))
        dispatch(RestaurantActions.totalResTime(resId, resList.total_time))
      })
    }

  }
}

function mapStateToProps(state) {
  return {
    reservationList: state.reservation_list,
    total_reservation_time: state.time
  }
}

const RestaurantProfile = React.createClass ({

  componentDidMount () {
    let resId = this.props.params.restaurantId;
    this.props.getReservations(resId);
  },

  render() {
    let index = this.props.total_reservation_time.length - 1;
    return (
    <div>
      <table className="list-table">
      <thead>
        <tr>
          <th>Party Size</th>
          <th>Time Added</th>
          <th>Completed</th>
        </tr>
      </thead>
        <ListWidget
          reservations={this.props.reservationList}
       />
      <tfoot>
        <tr>
          <td>Total</td>
          {this.props.total_reservation_time.length > 0 &&
            <td>{this.props.total_reservation_time[index].total_time} Minutes</td>
          }
        </tr>
      </tfoot>
      </table>
    </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantProfile);
