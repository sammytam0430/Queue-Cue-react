// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// React and Redux
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Render the top-level React component
import reducers from './reducers';
import App from './App.jsx';

// create the store
let store = createStore(reducers);
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
