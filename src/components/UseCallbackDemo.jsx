import { useCallback, useState } from "react";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h1>useCallback Demo</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={handleClick}>
        Test Callback
      </button>
    </div>
  );
}

export default UseCallbackDemo;