import ajax from 'superagent';

function newRes(name, phone, email, party_size, cb) {
  ajax.post('http://localhost:3000/customers')
  .send({name: name, phone_number: phone, email: email})
  .send({reservation: {party_size: parseInt(party_size), restaurant_id: 1, completed: false}})
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
