import { useState } from "react";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    setIsLoggedIn(true);
    login();
    navigate("/dashboard");
  }

  if (isLoggedIn) {
    return <h1>Login successful! Welcome.</h1>;
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
