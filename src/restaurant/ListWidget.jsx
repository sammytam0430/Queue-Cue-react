import React from 'react';
import { connect } from 'react-redux';
import RestaurantActions from '../actions.js';
import CustomerClient from '../customer_clients/customers.js';
import CompletedBtn from './CompletedReservationBtn.jsx';

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    seatedTable(resId) {
      CustomerClient.deleteRes(resId, dispatch);
      dispatch(RestaurantActions.deleteRes(resId));
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
                <td>{JSON.stringify(res.completed)}</td>
                <td>
                  <button
                    id={res.id}
                    className="btn btn-success btn-sm"
                    onClick={() => this.props.seatedTable(res.id)}
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
