import React from 'react';
import { connect } from 'react-redux';
import RestaurantActions from '../actions.js';
import CustomerClient from '../customer_clients/customers.js';
import CompletedBtn from './CompletedReservationBtn.jsx';

function mapStateToProps(state) {
  return {
    reservations: state.reservations
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteReservation(resId, customerId) {
      CustomerClient.deleteResAndCustomerByRestaurant(resId, customerId, dispatch)
      }
    }
  }

const ListWidget = React.createClass({
    render () {
    return (
      <tbody>
        {this.props.reservations &&
          this.props.reservations.map((res) => {
            return (
              <tr key={res.id}>
                <td>{res.party_size}</td>
                <td>{res.time_added}</td>
                <td>
                  <button
                    id={res.id}
                    className="btn btn-success btn-sm"
                    onClick={() => this.props.deleteReservation(res.id, res.customer_id)}
                    >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    )
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ListWidget);
