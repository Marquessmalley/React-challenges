import { useState } from "react";

const CounterChallenge = () => {
  const [counter, setCounter] = useState(0);

  const incrementState = () => {
    setCounter((state) => state + 1);
  };
  const decrementState = () => {
    setCounter((state) => state - 1);
  };
  return (
    <div className="App">
      {counter}
      <button onClick={incrementState}>Increment</button>
      <button onClick={decrementState}>Decrement</button>
    </div>
  );
};

export default CounterChallenge;
