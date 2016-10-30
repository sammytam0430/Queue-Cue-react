import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { remove } from 'lodash';
import CustomerClient from '../customer_clients/customers.js';
import CustomerActions from '../actions.js';

function mapStateToProps(state) {
  return {
    reservations: state.reservations,
    restaurants: state.restaurants,
    customer: state.customers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit(email) {
      normalizedEmail = email.toLowerCase();
      CustomerClient.getCustomers(function(CustomersAndResos) {
        let customers = CustomersAndResos.customers
        let reservations = CustomersAndResos.reservations
        let user = remove(customers, function(customer) {
          return customer.email.toLowerCase() == email.toLowerCase()
        })
        let currentUserId = user[0].id;
        console.log("Current user ", user[0].name);
        let userReservations = remove(reservations, function(reservation) {
          return reservation.customer_id == currentUserId
        })
        dispatch(CustomerActions.showCustomerReservation(userReservations[0].id,  userReservations[0].restaurant_name, user[0].name))
      })
    },
    deleteRes(resId) {
      CustomerClient.deleteRes(resId);
      dispatch(CustomerActions.deleteRes(resId));
      dispatch(CustomerActions.deleteCustomerRes(resId));
    }
  }
}

function getReso(reservation) {
  let restaurant_name = this.props.reservations;
}

const UserReservation = React.createClass({

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
    const { customer } = this.props

    return (
      <div>
        {customer.length > 0 &&
          <p>Hi {customer[0].customer_name}, you're in the queue for {customer[0].restaurant_name}</p> ||
          <p>Your queues...</p>
        }
        {customer.length > 0 &&
          <Button
          id={customer[0].reservation_id}
          bsStyle="danger"
          bsSize="small"
          onClick={() => this.props.deleteRes(customer[0].reservation_id)}
          >
          Get out of the queue
          </Button>
        }

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

export default connect(mapStateToProps, mapDispatchToProps)(UserReservation);
