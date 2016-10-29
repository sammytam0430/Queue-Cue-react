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

function deleteRes(resId, dispatch) {
  ajax.delete('http://localhost:3000/reservations/' + resId)
  .end(function (err, res){
    if (err || !res.ok) {
      console.log('error!!!!!!', err);
      return
    }
    dispatch(RestaurantActions.deleteRes(resId))
  })
}


export default {
  newRes,
  deleteRes
}
