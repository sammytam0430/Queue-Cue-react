import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';


// function mapStateToProps(state) {
//   return state
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     seatedTable(resId) {
//       CustomerClient.seatTable(resId)
//       dispatch(RestaurantActions.seatedTable(resId))
//     }
//   }
// }

const CompletedBtn = React.createClass({


  render () {
    const { resId, handleClick } = this.props;

    return (
      <div>
        <button
          id={resId}
          className="btn btn-success btn-sm"
          onClick={() => {handleClick(resId)}}
          // onClick={this.props.handleClick(this.props.resId)}
        >
          Seat Table
        </button>
      </div>
    )
  }
})

export default (CompletedBtn);
