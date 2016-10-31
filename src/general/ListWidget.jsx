//takes object and iterates through to display it
import React, {Component} from 'react';

import { connect } from 'react-redux';
import RestaurantActions from '../actions.js';
import CustomerClient from '../customer_clients/customers.js';
import CompletedBtn from '../restaurant/CompletedReservationBtn.jsx';
import LocationActions from '../actions.js';


function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps(dispatch)");
  return {
    seatedTable(resId) {
      CustomerClient.deleteRes(resId, dispatch);
    }
  }
}



const ListWidget = React.createClass ({
  componentDidMount() {
    console.log(this.props)
  },

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
                <td>
                  <button
                    id={res.id}
                    className="btn btn-success btn-sm"
                    onClick={() => {this.props.seatedTable(res.id)}}
                  >
                    Seated
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
