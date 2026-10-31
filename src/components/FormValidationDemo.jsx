import { useState } from "react";

function FormValidationDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("Please enter both name and email.");
      return;
    }

    setError("");
    alert(`Name: ${name}\nEmail: ${email}`);
  }

  return (
    <div>
      <h1>Form Validation Demo</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default FormValidationDemo;