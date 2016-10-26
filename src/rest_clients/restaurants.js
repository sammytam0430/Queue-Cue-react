import ajax from 'superagent';

function create(name, food_type, location, cb) {
  ajax.post('http://localhost:3000/restaurants')
  .send({name: name, food_type: food_type, location: location})
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



export default {
  create,
  get
}
