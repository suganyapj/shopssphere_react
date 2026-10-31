import { useState,memo,useCallback } from "react";

const Child=memo(function Child({ onClick }) {
  console.log("Child rendered");

  return (
    <button onClick={onClick}>
      Child Button
    </button>
  );
})

function MemoCallbackDemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <h1>Memo + useCallback Demo</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Parent Count
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default MemoCallbackDemo;