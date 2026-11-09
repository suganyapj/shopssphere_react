
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  function handleRegister(e) {
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

    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    alert("Registration will be connected to Go backend later.");
  }

  return (
    <section className="auth-section">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p>Join ShopSphere and start shopping!</p>

        <form onSubmit={handleRegister}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email Address</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="auth-error">{errors.email}</p>}

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && (
            <p className="auth-error">{errors.password}</p>
          )}

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && (
            <p className="auth-error">{errors.confirmPassword}</p>
          )}

          <button type="submit" className="auth-btn">
            Register
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
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

export default Register;
