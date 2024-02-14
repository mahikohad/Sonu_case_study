// import React, { useState } from "react";
// import styles from "./LoginPage.module.css";

// function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Submitted:", { username, password });
//     setUsername("");
//     setPassword("");
//   };

//   return (
//     <div className={styles.formContainer}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.formGroup}>
//           <label htmlFor="username" className={styles.label}>
//             Username:
//           </label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className={styles.input}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="password" className={styles.label}>
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className={styles.input}
//           />
//         </div>
//         <button type="submit" className={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const API_URL = "http://localhost:5000";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });
      console.log(response.data); // Handle success response
      localStorage.setItem("token", response?.data?.token);
      alert("Login successful");
      navigate("/LoanDashboard");
    } catch (error) {
      console.error(error.response.data); // Handle error response
      alert("Invalid Email Id or Password");
    }

    console.log("Submitted:", { username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className={styles.formContainer}>
      <h3 style={{ textAlign: "center" }}>Login</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.label}>
            Username:
          </label>
          <input
            type="text"
            // id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="text"
            // id="username"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />

          {/* <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          /> */}
        </div>
        <button
          type="submit"
          className={styles.button}
          style={{ marginTop: "10px" }}
        >
          Login
        </button>
      </form>
      <div style={{ textAlign: "center" }}>
        <p style={{ marginTop: "15px" }}>
          Click Below button if you are new customer
        </p>
        <Link to="/SignUpPage">
          <button> Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
