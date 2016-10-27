import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return state
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
                <td>{this.props.button}</td>
              </tr>
            )
          })
        }
      </tbody>
    )
  }
});

export default connect(mapStateToProps)(RestaurantQueue);
