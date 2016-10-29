import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const CompletedBtn = React.createClass({
  componentDidMount() {
  },

  render () {

    return (
      <div>
        <button
          id={this.props.resId}
          className="btn btn-success btn-sm"
          // onClick={this.props.handleClick(this.props.resId)}
        >
          Seat Table
        </button>
      </div>
    )
  }
})

export default CompletedBtn;
