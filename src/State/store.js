// Create and configure the Redux store
// Single store instance for entire application

import { createStore } from 'redux';
import rootReducer from './reducers';

// Create store with root reducer and dev tools (modern version)
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;