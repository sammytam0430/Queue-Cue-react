import React from 'react';

var i = 0;
function addUser(name, phone) {
  return {
    type: 'ADD_USER',
    id: i++,
    name: name,
    phone: phone
  }

}

let UserContainer = ({ dispatch }) => {
  let name
  let phone

  return (
    <div className="row">
      <form className="form-inline" onSubmit={e => {
        e.preventDefault();
        dispatch(addUser(name.value, phone.value))
        name.value = ''
        phone.value = ''
      }}>
        <div className="form-group">
          <input className="form-control" placeholder="Name" ref={node =>{
            name = node
          }} />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="email" ref={node =>{
            phone = node
          }} />
        </div>
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  )
}



import { connect } from 'react-redux';
export default connect()(UserContainer);
