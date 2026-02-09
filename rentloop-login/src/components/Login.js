import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import bgImage from "../assets/rentloop-bg.png";
import { loginUser, registerUser } from "../api";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("renter");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    const hasLetter = /[A-Za-z]/.test(pwd);
    const hasDigit = /\d/.test(pwd);
    const hasSpecial =
      /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(pwd);
    return pwd.length >= 8 && hasLetter && hasDigit && hasSpecial;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(username, password);

      // store token & user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful!");

      // ✅ COMMON HOME DASHBOARD
      navigate("/home");
    } catch (err) {
      setError(err.message || "Login failed!");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!validatePassword(password)) {
      setError(
        "Password must be strong (8+ chars, letter, digit, special)."
      );
      return;
    }

    try {
      await registerUser(username, password, role);
      alert("Sign Up Successful!");
      setIsSignup(false);
    } catch (err) {
      setError(err.message || "Sign Up failed!");
    }
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="login-backdrop"></div>
      <div className="login-box">
        <div className="login-branding">
          <h1 className="brand-logo">Rent<span>Loop</span></h1>
        </div>
        <h2 className="login-heading">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="login-subtext">
          {isSignup
            ? "Join us to find your perfect space"
            : "Enter your credentials to access your account"}
        </p>

        <form onSubmit={isSignup ? handleSignup : handleLogin}>

          <div className="input-group">
            <i className="fas fa-user input-icon"></i>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* ROLE SELECTOR */}
          {isSignup && (
            <div className="role-selection-wrapper">
              <p className="role-label">Choose your RentLoop experience</p>
              <div className="role-grid">
                <div
                  className={`role-tile ${role === "renter" ? "active" : ""}`}
                  onClick={() => setRole("renter")}
                >
                  <div className="tile-icon">
                    <i className="fas fa-shopping-basket"></i>
                  </div>
                  <div className="tile-info">
                    <span className="tile-title">Renter</span>
                    <span className="tile-subtitle">I want to rent items</span>
                  </div>
                  {role === "renter" && <div className="selection-check"><i className="fas fa-check-circle"></i></div>}
                </div>
                <div
                  className={`role-tile ${role === "owner" ? "active" : ""}`}
                  onClick={() => setRole("owner")}
                >
                  <div className="tile-icon">
                    <i className="fas fa-store"></i>
                  </div>
                  <div className="tile-info">
                    <span className="tile-title">Owner</span>
                    <span className="tile-subtitle">I want to list items</span>
                  </div>
                  {role === "owner" && <div className="selection-check"><i className="fas fa-check-circle"></i></div>}
                </div>
              </div>
            </div>
          )}

          <div className="input-group">
            <i className="fas fa-lock input-icon"></i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
            </span>
          </div>

          {!isSignup && (
            <div className="remember-me">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember Me
              </label>
              <span className="forgot-password">Forgot Password?</span>
            </div>
          )}

          {error && <div className="error-message">
            <i className="fas fa-exclamation-circle"></i> {error}
          </div>}

          <button type="submit" className="login-button">
            {isSignup ? "Sign Up" : "Login"}
          </button>

          <div className="login-footer">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <button
                type="button"
                className="link-button"
                onClick={() => {
                  setIsSignup(!isSignup);
                  setUsername("");
                  setPassword("");
                  setRole("renter");
                  setError("");
                }}
              >
                {isSignup ? "Login" : "Sign Up"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
