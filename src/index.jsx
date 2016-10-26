// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// React and Redux
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

// Render the top-level React component
import reducers from './reducers';
import App from './App.jsx';
import UserMainLayout from './customer/UserMainLayout.jsx';
import UserContainer from './customer/UserContainer.jsx';
// import AddReservation from './general/AddReservation.jsx';
import RestaurantMainLayout from './restaurant/RestaurantMainLayout.jsx';
import RestaurantProfile from './restaurant/RestaurantProfile.jsx';
import CheckIn from './restaurant/CheckIn.jsx';
import Auth from './restaurant/Auth.jsx';
import Login from './general/Login.jsx';
import Signup from './general/Signup.jsx';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import { Provider } from 'react-redux';


let store = createStore(reducers);
let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render((
  <Provider store = { store }>
    <Router history={browserHistory}>
      <Route path="/" component={UserMainLayout}>
        <IndexRoute component={UserContainer} />
      </Route>

      <Route path ="restaurants" component={RestaurantMainLayout}>
        <IndexRoute component={Auth} />
          <Route path="checkin" component={CheckIn} />
          <Route path="login" component={Login} />
          <Route path="signup" component={Signup} />
          <Route path=":restaurantId" component={RestaurantProfile} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('react-root'));
