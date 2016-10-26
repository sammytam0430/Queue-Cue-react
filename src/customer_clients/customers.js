import ajax from 'superagent';

function newRes(name, phone, email, party_size, cb) {
  ajax.post('http://localhost:3000/customers')
  .send({name: name, phone_number: parseInt(phone), email: email})
  .send({reservation: {party_size: parseInt(party_size), customer_id: 1, restaurant_id:1}})
  .end(function (err, res){
    if (err || !res.ok) {
      console.log('error!!!!!!', err);
    } else {
      cb(res.body)
    }
  })
}


export default {
  newRes
}
