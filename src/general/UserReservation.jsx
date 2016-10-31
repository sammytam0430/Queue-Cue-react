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
      CustomerClient.getCustomers(function(CustomersAndResos) {
        let customers = CustomersAndResos.customers
        let reservations = CustomersAndResos.reservations
        let user = remove(customers, function(customer) {
          return customer.email.toLowerCase() == email.toLowerCase()
        })
        let currentUserId = user[0].id;
        console.log("Current user ", user[0]);
        let userReservations = remove(reservations, function(reservation) {
          return reservation.customer_id == currentUserId
        })
        dispatch(CustomerActions.showCustomerReservation(userReservations[0].id,  userReservations[0].restaurant_name, user[0].name, user[0].id))
      })
    },
    deleteRes(resId, customerId) {
      // CustomerClient.deleteRes(resId, dispatch);
      // CustomerClient.deleteCustomer(customerId, dispatch);
      CustomerClient.deleteResAndCustomer(resId, customerId, dispatch);
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
    const { customer, handleSubmit, deleteRes } = this.props
    let lastCustomer = customer.length - 1

    return (
      <div>
        {customer[lastCustomer].active &&
          <p>Hi {customer[lastCustomer].customer_name}, you're in the queue for {customer[lastCustomer].restaurant_name}</p> ||
          <p>Your queues...</p>
        }
        {customer[lastCustomer].active &&
          <Button
          bsStyle="danger"
          bsSize="small"
          onClick={() => {deleteRes(customer[lastCustomer].reservation_id, customer[lastCustomer].customer_id)}}
        >
        Get out of the queue
        </Button>}

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Are you currently in a Queue?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Enter your email to keep your place</p>
            <form onSubmit={e => {
              e.preventDefault()
              handleSubmit(email.value)
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
