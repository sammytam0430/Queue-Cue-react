import ajax from 'superagent';

let token = "eEv92YbfLS";

function newRes(name, phone, email, party_size) {
  ajax.post('http://localhost:3000/customers')
  // .set('Authorization', 'Token token=' + token)
  .send({name: name, phone_number: parseInt(phone), email: email})
  .send({reservation: {party_size: parseInt(party_size), customer_id: 1, restaurant_id:1}})
  .end(function (err, res){
    if (err || !res.ok) {
      console.log('error!!!!!!', err);
    } else {
      console.log(res);
      // cb(res.body)
    }
  })
}


export default {
  newRes
}
