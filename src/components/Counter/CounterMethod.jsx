import React, { useState } from 'react';

function CounterMethod() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={increment}>increase</button>
      <button type="button" onClick={decrement}>decrease</button>
    </div>
  );
}

export default CounterMethod;
