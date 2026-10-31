import { useLayoutEffect, useRef, useState } from "react";

function UseLayoutEffectDemo() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(boxRef.current.getBoundingClientRect().width);
  }, []);

  return (
    <div>
      <h1>useLayoutEffect Demo</h1>

      <div
        ref={boxRef}
        style={{ width: "300px", padding: "20px", border: "2px solid black" }}
      >
        My Box
      </div>

      <p>Box width: {width}px</p>
    </div>
  );
}

export default UseLayoutEffectDemo;