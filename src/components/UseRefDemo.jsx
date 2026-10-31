import { useRef } from "react";

function UseRefDemo() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
 
  return (
    <div>
      <h1>useRef Demo</h1>

      <input ref={inputRef} placeholder="Enter your name" />
<button onClick={() => inputRef.current.focus()}>
  Focus Input
</button>
<button
  onClick={() => {
    renderCount.current = renderCount.current + 1;
    console.log("Ref value:", renderCount.current);
  }}
>
  Increase Ref
</button>
    </div>
  );
}

export default UseRefDemo;