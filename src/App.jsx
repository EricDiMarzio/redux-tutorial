// Main component that uses Redux state and actions
// Demonstrates useSelector and useDispatch hooks

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementByRandom,
} from './state/actions.js';

function App() {
  // Access Redux state using useSelector
  const count = useSelector((state) => state.counter.count);

  // Get dispatch function to send actions
  const dispatch = useDispatch();

  // Event handlers that dispatch actions
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  // Local state for the increment amount input
  const [amount, setAmount] = useState('');

  const handleIncrementByAmount = () => {
    // Convert string to number, default to 0 if invalid
    const numAmount = parseInt(amount) || 0;
    dispatch(incrementByAmount(numAmount));
  };

  const handleRandomIncrement = () => {
    dispatch(incrementByRandom());
  };

  return (
    <div className="App">
      <h1>Redux Counter App</h1>

      {/* Display current count from Redux store */}
      <h2>Count: {count}</h2>

      {/* Action buttons */}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>

      {/* Increment by amount section */}
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          style={{ margin: '0 10px', padding: '5px' }}
        />

        <button onClick={handleIncrementByAmount}>Increment by Amount</button>

        <button onClick={handleRandomIncrement}>
          Increment by Random (1-10)
        </button>
      </div>
    </div>
  );
}

export default App;
