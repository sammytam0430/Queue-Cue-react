import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ajax from 'superagent';
import RestaurantClient from '../rest_clients/restaurants';
import RestaurantActions from '../actions.js';

function mapStateToProps(state) {
//   return {
//     // reservationList: state.reservation_list
//     reservationList: state.reservations
//   }
}


function mapDispatchToProps(dispatch) {
//   return {
//     getReservations(resId) {
//       RestaurantClient.getReservations(resId, function(resList) {
//         dispatch(RestaurantActions.reservationList(resList))
//       })
//     }
//   }
}

const FormWidget = React.createClass ({

  componentWillMount () {
    // let resId = this.props.resId;
    // this.props.getReservations(resId);
  },

  render() {
    return (
      <div>
        {
          console.log(this.props.reservations)
        }
      </div>
    );
  }

});

export default (FormWidget);

