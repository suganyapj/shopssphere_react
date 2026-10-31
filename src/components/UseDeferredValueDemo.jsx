
import { useState, useDeferredValue } from "react";

function UseDeferredValueDemo() {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  const names = [
    "Yamini",
    "Suganya",
    "John",
    "Priya",
    "Rahul",
    "Anitha",
  ];

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(deferredSearch.toLowerCase())
  );

  return (
    <div>
      <h1>useDeferredValue Demo</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search names..."
      />

      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseDeferredValueDemo;
