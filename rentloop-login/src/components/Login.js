


//  import React, { useState } from "react";
//  import { useNavigate } from "react-router-dom";
//  import "./Login.css";
// import bgImage from "../assets/rentloop-bg.png";

// const Login = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState(""); // for sign up
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const validatePassword = (pwd) => {
//     const hasLetter = /[A-Za-z]/.test(pwd);
//     const hasDigit = /\d/.test(pwd);
//     const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(pwd);
//     return pwd.length >= 8 && hasLetter && hasDigit && hasSpecial;
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!validatePassword(password)) {
//       setError("Password must have 8+ chars, 1 letter, 1 digit, 1 special char.");
//     } else if (username === "admin123") {
//       setError("This username is already taken. Try another.");
//     } else {
//       setError("");
//       alert("Login Successful!");
//       navigate("/home");
//     }
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();
//     if (!username || !email || !password) {
//       setError("All fields are required.");
//     } else if (!validatePassword(password)) {
//       setError("Password must be strong (8+ chars, 1 letter, 1 digit, 1 special).");
//     } else {
//       setError("");
//       alert("Sign Up Successful!");
//       setIsSignup(false); // Switch back to login
//     }
//   };

//   return (
//     <div className="login-container" style={{ backgroundImage: `url(${bgImage})` }}>
//       <div className="login-box">
//         <h2 className="login-heading">
//           {isSignup ? "Create Your Account" : "Unlock Your Digital Gateway"}
//         </h2>

//         <form onSubmit={isSignup ? handleSignup : handleLogin}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />

//           {isSignup && (
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           )}

//           <div className="password-wrapper">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <span
//               className="toggle-eye"
//               onClick={() => setShowPassword(!showPassword)}
//               title={showPassword ? "Hide Password" : "Show Password"}
//             >
//               {showPassword ? "🙈" : "👁️"}
//             </span>
//           </div>

//           {!isSignup && (
//             <div className="remember-me">
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                 />
//                 Remember Me
//               </label>
//             </div>
//           )}

//           {error && <p className="error-message">{error}</p>}

//           <button type="submit" className="login-button">
//             {isSignup ? "Sign Up" : "Login"}
//           </button>

//           <button
//             type="button"
//             className="login-button"
//             onClick={() => {
//               setIsSignup(!isSignup);
//               setError("");
//               setUsername("");
//               setPassword("");
//               setEmail("");
//             }}
//           >
//             {isSignup ? "Back to Login" : "New User? Sign Up"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import bgImage from "../assets/rentloop-bg.png";
import { loginUser, registerUser } from "../api"; // <-- fixed import path

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    const hasLetter = /[A-Za-z]/.test(pwd);
    const hasDigit = /\d/.test(pwd);
    const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(pwd);
    return pwd.length >= 8 && hasLetter && hasDigit && hasSpecial;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }
    try {
      const data = await loginUser(username, password);
      console.log("Logged in:", data);
      alert("Login Successful!");
      navigate("/home");
    } catch (err) {
      setError(err.message || "Login failed!");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be strong (8+ chars, 1 letter, 1 digit, 1 special).");
      return;
    }
    try {
      const user = await registerUser(username, password);
      console.log("Registered:", user);
      alert("Sign Up Successful!");
      setIsSignup(false); // Switch back to login
    } catch (err) {
      setError(err.message || "Sign Up failed!");
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="login-box">
        <h2 className="login-heading">
          {isSignup ? "Create Your Account" : "Unlock Your Digital Gateway"}
        </h2>

        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <div className="password-wrapper">
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
              title={showPassword ? "Hide Password" : "Show Password"}
            >
              {showPassword ? "🙈" : "👁️"}
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
            </div>
          )}

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button">
            {isSignup ? "Sign Up" : "Login"}
          </button>

          <button
            type="button"
            className="login-button"
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
              setUsername("");
              setPassword("");
            }}
          >
            {isSignup ? "Back to Login" : "New User? Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

