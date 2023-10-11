import { useCallback, useState } from "react";
import Child from "./Child";
const Count = () => {
  const [count, setCount] = useState(0);

  // non memoized function
  const incrementNonMemoized = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const incrementMemoized = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <Child onClick={incrementNonMemoized} />
      <Child onClick={incrementMemoized} />
    </div>
  );
};

export default Count;
