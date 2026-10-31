import { useState } from "react";

function ShoppingCartStorage() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("cartCount");
    return savedCount !== null ? Number(savedCount) : 0;
  });

  function handleAdd() {
    const newCount = count + 1;

    setCount(newCount);

    localStorage.setItem("cartCount", newCount);
  }
  return (
    <div>
      <h1>Shopping Cart Storage</h1>

      <p>Total items: {count}</p>

      <button onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default ShoppingCartStorage;