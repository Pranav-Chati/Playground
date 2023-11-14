
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>This is an example of DOM Manipulation in React</h1>
      <p>The count: {count}</p>
      <button onClick={() => setCount(count + 1)}> Increment the Button </button>
      <button onClick={() => setCount(count - 1)}> Decrement the Button </button>
    </div>
  );
}

export default App;
