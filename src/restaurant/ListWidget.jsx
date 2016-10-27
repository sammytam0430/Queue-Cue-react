import React from 'react';

const RestaurantQueue = React.createClass({

  checkForProps () {
    if (this.props.reservations) {
      return (
        this.props.reservations.map((res) => {
          return <tr key={res.id}>
            <td>{res.party_size}</td>
          </tr>
        })
      )
    }
  },


  render () {
    return (
      <tbody>
        {this.checkForProps()}
      </tbody>
    )
  }
});

export default RestaurantQueue;
