import { useState } from "react";
function Button() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleSubtract() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <>
      <h3>{count}</h3>
      <button onClick={handleAdd}>Increase</button>
      <button onClick={handleSubtract}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Button;
