import {useReducer} from "react"
function reducer(state, action) {
  if (action.type === "increment") {
    return state + 1;
  }

  if (action.type === "decrement") {
    if (state <= 0) {
      return 0;
    }
    return state - 1;
  }

  if (action.type === "reset") {
    return 0;
  }
  if (action.type==="add"){
    return state + action.value;
  }

  return state;
}
function DeveloperCounter() {

    const [count, dispatch] = useReducer(reducer, 0);
  return <div><h2>Developer Counter: {count}</h2>
  <button onClick={() => dispatch({ type: "increment" })}>
    Increment
  </button>
  <button onClick={() => dispatch({ type: "decrement" })}>
    Decrement
  </button>
  <button onClick={() => dispatch({ type: "reset" })}>
    Reset
  </button>

<button onClick={() => dispatch({ type: "add", value: 5 })}>
  Add 5
</button>
  </div>;
}
export default DeveloperCounter;