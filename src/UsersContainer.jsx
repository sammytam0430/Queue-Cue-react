import React from 'react';
// will receive the store state because it needs the existing users
// will need to dispatch to the store to add people to the list

// userState is the reducer that i need to write
// this will pass down this.props.users to whatever component
const UserContainer = React.createClass({
  render () {
    let name
    let phone
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          this.props.addUser(name.value, phone.value)
          name.value = ''
          phone.value = ''
        }}>
          <input ref={node =>{
            name = node
          }} />
          <input ref={node =>{
            phone = node
          }} />
          <button type="submit">
            Add User
          </button>
        </form>
      </div>
    )
  }
})

const mapStateToProps = (store) => {
  return {
    users: store.addUser
  }
}

var i = 0;
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (name, phone) => {
      dispatch({
        type: 'ADD_USER',
        id: i++,
        name: name,
        phone: phone
      })
    }
  }
}

import { connect } from 'react-redux'
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);

// export default UserContainer;
