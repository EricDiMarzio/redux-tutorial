// Combine all reducers into a root reducer
// In larger apps, you'd combine multiple feature reducers here

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

// Root reducer that combines all feature reducers
const rootReducer = combineReducers({
  counter: counterReducer
  // Add other reducers here as your app grows:
  // user: userReducer,
  // posts: postsReducer,
  // etc.
});

export default rootReducer;
// Sometime called 'reducers' instead