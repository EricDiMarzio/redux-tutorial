// Action creator functions that return action objects
// Import our action types to ensure consistency

import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from './actionTypes';

// Action creator for increment (no payload needed)
export const increment = () => {
  return {
    type: INCREMENT
  };
};

// Action creator for decrement (no payload needed)
export const decrement = () => {
  return {
    type: DECREMENT
  };
};

// Action creator for increment by amount (payload contains the amount)
export const incrementByAmount = (amount) => {
  return {
    type: INCREMENT_BY_AMOUNT,
    payload: amount
  };
};

// Action creator for increment by random amount (1-10)
// Side effect (Math.random) happens here, not in reducer
export const incrementByRandom = () => {
  const randomAmount = Math.floor(Math.random() * 10) + 1;
  return {
    type: INCREMENT_BY_AMOUNT,
    payload: randomAmount
  };
};