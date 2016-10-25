import ajax from 'superagent';

let token = "eEv92YbfLS";

function new(token) {
  ajax.post('http://localhost:3000/customers/new')
  .set('Authorization', 'Token token=' + token)
  .end(function (err, res){
    if (err || !res.ok) {
      console.log('error!!!!!!', err);
    } else {

      console.log(res);
      cb(res.body)
    }
  })
}


export default {
  new
}
