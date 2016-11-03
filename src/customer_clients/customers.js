import ajax from 'superagent';
import RestaurantActions from '../actions.js';

function newRes(restId, name, phone, email, party_size, time_added, cb) {

  ajax.post('http://localhost:3000/customers')
  .send({name: name, phone_number: phone, email: email})
  .send({reservation: {restaurant_id: restId, party_size: parseInt(party_size), time_added: time_added, completed: false}})
  .end(function (err, res){
    if (err || !res.ok) {
      console.log('error!!!!!!', err);
    } else {
      console.log("this", res.body);
      cb(res.body)
    }
  })
}

///////Promises
function deleteResAndCustomer(resId, customer_id, dispatch) {
    deleteResPromise(resId, dispatch)
    .then(deleteCustomerPromise(customer_id, dispatch))
    .catch(function(err, data) {
      console.log("Promise error", err);
    })
}

function deleteResPromise(resId, dispatch) {
  return new Promise(function (resolve, reject) {
    ajax.delete('http://localhost:3000/reservations/' + resId)
    .end(function (err, res){
      if (err || !res.ok) {
        console.log('error!!!!!!', err);
        reject(new Error());
      }
      resolve(dispatch(RestaurantActions.deleteRes(resId)));
    })
  })
}
function deleteCustomerPromise(customerId, dispatch) {
  return new Promise(function (resolve, reject) {
    ajax.delete('http://localhost:3000/customers/' + customerId)
    .end(function (err, res){
      if (err || !res.ok) {
        console.log('error!!!!!!', err);
        reject(new Error());
      }
      resolve(dispatch(RestaurantActions.deleteCustomer(customerId)));
    })
  })
}
/////////////////



function getCustomers(cb) {
  ajax.get('http://localhost:3000/customers/')
  .end(function(err, res) {
    if (err || !res.ok) {
      console.log('error!!!!!!', err);
      return
    } else {
      cb(res.body)
    }
  })
}


export default {
  newRes,
  getCustomers,
  deleteResAndCustomer
}
