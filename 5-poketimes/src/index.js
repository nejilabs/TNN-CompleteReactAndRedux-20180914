import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Start: Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducers'
// End: Redux

const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
