//takes object and iterates through to display it
import React, {Component} from 'react';

import { connect } from 'react-redux';
import RestaurantActions from '../actions.js';
import CustomerClient from '../customer_clients/customers.js';
import CompletedBtn from '../restaurant/CompletedReservationBtn.jsx';

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



const ListWidget = React.createClass ({


  render() {
    return(
      <tbody>
        {this.props.button1 &&
        this.props.data.map((el) => {
          return (
            <tr key={el.id}>
              <td > {el.name}</td>
              <td> {el.food_type}</td>
              <td> {el.location}</td>
              <td><this.props.button1 {... el} /></td>
            </tr>
          )
        }) ||
        
        this.props.reservations &&
          this.props.reservations.map((res) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ListWidget);
