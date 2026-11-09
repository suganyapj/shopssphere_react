
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function handleLogin(e) {
    e.preventDefault();

    const newErrors = {};

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Password validation
    if (password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    alert("Login functionality will be connected to Go backend later.");
  }

  return (
    <section className="auth-section">
      <div className="auth-card">
        <h2>Welcome Back!</h2>
        <p>Login to continue shopping with ShopSphere.</p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <p className="auth-error">{errors.email}</p>
          )}

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && (
            <p className="auth-error">{errors.password}</p>
          )}

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Register</Link>
        </p>

        <button
          className="back-home-btn"
          onClick={() => navigate("/")}
        >
          Back to Shopping
        </button>
      </div>
    </section>
  );
}

export default Login;
