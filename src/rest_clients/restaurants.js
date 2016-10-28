import ajax from 'superagent';

function create(name, food_type, location, email, password, cb) {
  console.log("EMAIL ", email, password);
  ajax.post('http://localhost:3000/restaurants')
  .send({restaurants: {name: name, food_type: food_type, location: location, email: email, password: password}})
  .end(function (err, res){
    if (err || !res.ok) {
      console.log('error!!!!!!', err);
    } else {

      console.log(res);
      cb(res.body)
    }
  })
}

function get(cb) {
    ajax.get('http://localhost:3000/restaurants')
    .end(function(err, res) {
      if (err || !res.ok) {
        console.log('error?????', err);
      } else {
        console.log(res.body);
        cb(res.body)
      }
    })
}

function getReservations(resId, cb) {

  ajax.get('http://localhost:3000/restaurants/' + resId)
  .end(function(err, res) {
    if (err || !res.ok) {
      console.log('error?????', err);
    } else {
      cb(res.body)
    }
  })
}

function seatTable(resId, cb) {
  ajax.put('http://localhost:3000/customers')
}


export default {
  create,
  get,
  getReservations
}
