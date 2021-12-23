import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function addMe(n) {
    return n + 1;
  }

  // not actually the best way to do this, but I want a reminder that I can use functions here.
  function increase() {
    setCount(addMe(count));
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
