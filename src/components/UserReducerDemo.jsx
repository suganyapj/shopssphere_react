import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increaseStep") {
    return {
      ...state,
      step: state.step + 1,
    };
  }
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + state.step,
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,
      count: state.count - state.step,
    };
  }

  if (action.type === "reset") {
    return {
      ...state,
      count: 0,
    };
  }

  return state;
}

function UserReducerDemo() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    step: 1,
  });

  return (
    <div>
      <h1>useReducer Demo</h1>

      <p>Count: {state.count}</p>
      <p>Step: {state.step}</p>
      <button onClick={() => dispatch({ type: "increaseStep" })}>
        Increase Step
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UserReducerDemo;
