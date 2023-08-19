import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import this function to create a local store
import { legacy_createStore as createStore } from 'redux';
//import our Root Reducer
import rootReducer from './store/reducers/rootReducer';
//the Provider here is used to bind our react app with the redux store
import { Provider } from 'react-redux';
//the store const and we passing root Reducer as params ( it contain all reducers)
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
