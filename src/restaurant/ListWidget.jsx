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
      CustomerClient.seatTable(resId, function(reservation){
        dispatch(RestaurantActions.addReservation(reservation))
      })
    }
  }
}

const RestaurantQueue = React.createClass({

  checkForProps () {

  },

  componentDidMount () {
    // this.state.subscribe(() => {
    //   console.log(state.getState());
    // });
  },


  render () {
    return (
      <tbody>
        {this.props.reservations &&
          this.props.reservations.map((res) => {
            // console.log("Reservations ", res)
            return (
              <tr key={res.id}>
                <td>{res.party_size}</td>
                <td>{res.time_added}</td>
                <td>{JSON.stringify(res.completed)}</td>
                <td>{<CompletedBtn
                  resId={res.id}
                  handleClick={this.props.seatedTable}
                  />}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    )
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantQueue);
