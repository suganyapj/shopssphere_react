import useCounter from "../hooks/useCounter";

function CustomHookDemo() {
  const { count, increase, decrease } = useCounter(5);

  return (
    <div>
      <h1>Custom Hook Demo</h1>

      <p>Count: {count}</p>

      <button onClick={increase}>
        Increase
      </button>
      <button onClick={decrease}>
        Decrease
      </button>
    </div>
  );
}

export default CustomHookDemo;