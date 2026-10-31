import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "add") {
    return state + 1;
  }

  if (action.type === "remove") {
    return Math.max(0, state - 1);
  }

  if (action.type === "reset") {
    return 0;
  }

  return state;
}

function ShoppingCart() {
  const [totalItems, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <p>Total items: {totalItems}</p>

      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      <button onClick={() => dispatch({ type: "remove" })}>Remove</button>
      <button onClick={() => dispatch({ type: "reset" })}> Reset</button>
    </div>
  );
}

export default ShoppingCart;
