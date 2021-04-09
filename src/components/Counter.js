import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <>
      <button onClick={onButtonClick}>Click Me!</button>

      <h1>Current Count: {count}</h1>
    </>
  )
}

export default Counter;