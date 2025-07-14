// Pure function that handles counter-specific state changes
// - Same input always produces same output
// - No side effects (API calls, DOM manipulation, console.logs, setTimeout, random numbers
// - If you need functionality like this, include it in the action creator or UI component

// Takes current state and action, returns new state

import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from '../actionTypes';

// Initial state for the counter
const initialState = {
  count: 0
};

// Reducer function - must be pure (no side effects)
// reducer is just a function
// - Takes in initial state and an action
// - switch statement which listens for the action.type and returns a new state object
// You CAN write mutating logic here.
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    
    case INCREMENT_BY_AMOUNT:
      return {
        ...state,
        count: state.count + action.payload
      };
    
    default:
      // Always return current state for unknown actions
      return state;
  }
};

export default counterReducer;