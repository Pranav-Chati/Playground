import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>The Count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me to increment the count
      </button>

      <button onClick={() => setCount(count - 1)}>
        Click me to decrement the count
      </button>
    </div>
  );
}

export default Counter;
