// import React, { useState } from "react";
// import styles from "./SignUpPage.module.css";

// function SignUpPage() {
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [username, setUsername] = useState("");
//   const [mobileno, setMobileno] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Submitted:", { firstname, username, email, password });
//     setUsername("");
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <>
//       <div className={styles.formContainer}>
//         <h2>Register with us by entering below details</h2>
//         <br />
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <div className={styles.formGroup}>
//             <label htmlFor="firstname" className={styles.label}>
//               First Name:
//             </label>
//             <input
//               type="text"
//               id="firstname"
//               value={firstname}
//               onChange={(e) => setFirstname(e.target.value)}
//               required
//               className={styles.input}
//             />
//             <label htmlFor="lastname" className={styles.label}>
//               Last Name:
//             </label>
//             <input
//               type="text"
//               id="lastname"
//               value={lastname}
//               onChange={(e) => setLastname(e.target.value)}
//               required
//               className={styles.input}
//             />
//             <label htmlFor="username" className={styles.label}>
//               User Name:
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className={styles.input}
//             />
//             <label htmlFor="mobile No" className={styles.label}>
//               Mobile Number:
//             </label>
//             <input
//               type="text"
//               id="umobile No"
//               value={mobileno}
//               onChange={(e) => setMobileno(e.target.value)}
//               required
//               className={styles.input}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="email" className={styles.label}>
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className={styles.input}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="password" className={styles.label}>
//               Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className={styles.input}
//             />
//           </div>
//           <button type="submit" className={styles.button}>
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default SignUpPage;

import React, { useState } from "react";
import styles from "./SignUpPage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5000";
function SignUpPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitted:", { firstname, username, email, password });
    try {
      const response = await axios.post(`${API_URL}/register`, {
        firstname,
        username,
        email,
        password,
      });
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error(error.response.data); // Handle error response
    }
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h3>Register with us by entering below details</h3>
        <br />
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="firstname" className={styles.label}>
              First Name:
            </label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              className={styles.input}
            />
            <label htmlFor="lastname" className={styles.label}>
              Last Name:
            </label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              className={styles.input}
            />
            <label htmlFor="username" className={styles.label}>
              User Name:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={styles.input}
            />
            <label htmlFor="mobile No" className={styles.label}>
              Mobile Number:
            </label>
            <input
              type="text"
              id="umobile No"
              value={mobileno}
              onChange={(e) => setMobileno(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              style={{ width: "100%" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </form>
        <div style={{ textAlign: "center" }}>
          <p style={{ lineHeight: "14px", marginTop: "5px" }}>
            Click here if you are existing customer
          </p>
          <Link to="/">
            <button>Log-in</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
