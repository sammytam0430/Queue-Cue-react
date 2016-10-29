import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { findIndex } from 'lodash';
import CustomerClient from '../customer_clients/customers.js';

function mapStateToProps(state) {
  return {
    reservations: state.reservations,
    restaurants: state.restaurants
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit(email) {
      CustomerClient.getCustomers(function(allCustomers) {
        findIndex(allCustomers, function(customer) {
          return customer.email.toLowerCase() == email.toLowerCase()
        })
      })
    }
  }
}

function getReso(reservation) {
  let restaurant_name = this.props.reservations;
}

const CurrentReservations = React.createClass({

  getInitialState() {
    return { showModal: true };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render () {
    let email

    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Are you currently in a Queue?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Enter your email to keep your place</p>
            <form onSubmit={e => {
              e.preventDefault()
              this.props.handleSubmit(email.value)
            }} >
              <input placeholder="email" ref={node => {email = node
              }} />
              <Button
                onClick={this.close}
                type='submit'
              >
                Add
              </Button>
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentReservations);
