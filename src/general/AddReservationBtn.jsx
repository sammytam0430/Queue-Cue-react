import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import CustomerClient from '../customer_clients/customers.js';
import ReservationActions from '../actions.js';

function timeAdded(party_size) {
  switch (party_size) {
    case '6':
      return 60
      break
    case '5':
      return 45
      break
    case '4':
      return 30
      break
    case '3':
      return 20
      break
    case '2':
      return 15
      break
    default:
      return 15
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit(restId, name, phone, email, party_size) {
      let time_added = timeAdded(party_size);

      CustomerClient.newRes(restId, name, phone, email, party_size, time_added,
      function(party){
        dispatch(ReservationActions.addReservation(party));
        alert("Thanks for queuing up!");
      })
    }
  }
}


const AddReservationBtn = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render () {
    let name
    let phone
    let email
    let party_size

    return (
      <div>
        {this.props.customers.length === 0 &&
          <Button
          onClick={this.open}
          id={this.props.id}
          bsStyle="success"
          bsSize="small"
          >
          Add
          </Button>
        }

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Queue me up!</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <form action="/" onSubmit={e => {
            e.preventDefault()
            this.props.handleSubmit(this.props.id, name.value, phone.value, email.value, party_size.value)
          }}>
            <input placeholder="name" ref={node => {
              name = node
            }} />
            <input placeholder="phone" ref={node => {
              phone = node
            }} />
            <input placeholder="email" ref={node => {
              email = node
            }} />
            <input placeholder="party size" ref={node => {
              party_size = node
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



export default connect(mapStateToProps, mapDispatchToProps)(AddReservationBtn);
