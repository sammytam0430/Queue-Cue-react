import ajax from 'superagent';

function create(name, food_type, location, email, password, cb) {
  ajax.post('http://localhost:3000/restaurants')
  .send({restaurants: {name: name, food_type: food_type, location: location, email: email, password: password}})
  .end(function (err, res){
    if (err || !res.ok) {
      console.log('error!!!!!!', err);
    } else {
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



export default {
  create,
  get,
  getReservations
}
