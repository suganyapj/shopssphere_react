
import { useState, useTransition } from "react";

function UseTransitionDemo() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("home");

  function handleChangeTab(newTab) {
    startTransition(() => {
      setTab(newTab);
    });
  }

  return (
    <div>
      <h1>useTransition Demo</h1>

      <button onClick={() => handleChangeTab("home")}>
        Home
      </button>

      <button onClick={() => handleChangeTab("about")}>
        About
      </button>

      {isPending && <p>Loading...</p>}

      {tab === "home" ? (
        <h2>Welcome to Home</h2>
      ) : (
        <h2>Welcome to About</h2>
      )}
    </div>
  );
}

export default UseTransitionDemo;
